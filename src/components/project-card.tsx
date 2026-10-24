/* eslint-disable @next/next/no-img-element */
"use client";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Markdown from "react-markdown";

function ProjectImage({ src, alt }: { src: string; alt: string }) {
  const [imageError, setImageError] = useState(false);

  if (!src || imageError) {
    return <div className="w-full aspect-video bg-muted" />;
  }

  return (
    <img
      src={src}
      alt={alt}
      width={1366}
      height={768}
      loading="lazy"
      decoding="async"
      className="w-full aspect-video object-cover object-top"
      onError={() => setImageError(true)}
    />
  );
}

interface Props {
  title: string;
  href?: string;
  description: string;
  dates: string;
  tags?: readonly string[];
  link?: string;
  image?: string;
  video?: string;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  className?: string;
}

export function ProjectCard({
  title,
  href,
  description,
  dates,
  tags,
  link,
  image,
  video,
  links,
  className,
}: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const hasValidLink = Boolean(href && href !== "#");

  useEffect(() => {
    const videoEl = videoRef.current;
    if (!videoEl) return;

    // Respect reduced-motion preferences
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      videoEl.pause();
      return;
    }

    // Play video automatically when within or approaching viewport, pause when offscreen
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            videoEl.play().catch(() => {});
          } else {
            videoEl.pause();
          }
        });
      },
      { rootMargin: "200px" }
    );

    observer.observe(videoEl);
    return () => observer.disconnect();
  }, [video]);

  const mediaContent = (
    <>
      {video ? (
        <video
          ref={videoRef}
          loop
          muted
          playsInline
          preload="metadata"
          width={1366}
          height={768}
          className="w-full aspect-video object-cover object-top"
          aria-label={`${title} preview video`}
        >
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : image ? (
        <ProjectImage src={image} alt={title} />
      ) : (
        <div className="w-full aspect-video bg-linear-to-br from-muted/70 via-muted/40 to-muted/80 flex flex-col items-center justify-center gap-2 border-b border-border/50 select-none">
          <span className="text-2xl font-bold tracking-wider text-muted-foreground/40 font-mono uppercase">
            {title.split(" ")[0]}
          </span>
          <span className="text-xs text-muted-foreground/50 font-medium">Project Showcase</span>
        </div>
      )}
    </>
  );

  return (
    <div
      className={cn(
        "flex flex-col h-full border border-border rounded-xl overflow-hidden hover:ring-2 hover:ring-muted transition-all duration-200",
        hasValidLink ? "cursor-pointer" : "cursor-default",
        className
      )}
    >
      <div className="relative shrink-0">
        {hasValidLink ? (
          <Link
            href={href!}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            {mediaContent}
          </Link>
        ) : (
          <div className="block">{mediaContent}</div>
        )}
        {links && links.length > 0 && (
          <div className="absolute top-2 right-2 flex flex-wrap gap-2">
            {links.map((item, idx) => (
              <Link
                href={item.href}
                key={idx}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
              >
                <Badge
                  className="flex items-center gap-1.5 text-xs bg-black text-white hover:bg-black/90"
                  variant="default"
                >
                  {item.icon}
                  {item.type}
                </Badge>
              </Link>
            ))}
          </div>
        )}
      </div>
      <div className="p-6 flex flex-col gap-3 flex-1">
        <div className="flex items-start justify-between gap-2">
          <div className="flex flex-col gap-1">
            <h3 className="font-semibold">{title}</h3>
            <time className="text-xs text-muted-foreground">{dates}</time>
          </div>
          {hasValidLink && (
            <Link
              href={href!}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
              aria-label={`Open ${title}`}
            >
              <ArrowUpRight className="h-4 w-4" aria-hidden />
            </Link>
          )}
        </div>
        <div className="text-xs flex-1 prose max-w-full text-pretty font-sans leading-relaxed text-muted-foreground dark:prose-invert">
          <Markdown>{description}</Markdown>
        </div>
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-auto">
            {tags.map((tag) => (
              <Badge
                key={tag}
                className="text-[11px] font-medium border border-border h-6 w-fit px-2"
                variant="outline"
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
