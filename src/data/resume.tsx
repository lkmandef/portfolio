import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Docker } from "@/components/ui/svgs/docker";
import { PhpIcon } from "@/components/ui/svgs/php";
import { JavascriptIcon } from "@/components/ui/svgs/javascript";
import { Html5Icon } from "@/components/ui/svgs/html5";
import { Css3Icon } from "@/components/ui/svgs/css3";
import { LaravelIcon } from "@/components/ui/svgs/laravel";
import { TailwindcssIcon } from "@/components/ui/svgs/tailwindcss";
import { ViteIcon } from "@/components/ui/svgs/vite";
import { SqliteIcon } from "@/components/ui/svgs/sqlite";
import { GitIcon } from "@/components/ui/svgs/git";
import { VscodeIcon } from "@/components/ui/svgs/vscode";
import { PostmanIcon } from "@/components/ui/svgs/postman";

import type { ComponentType } from "react";

export type Skill = {
  name: string;
  icon?: ComponentType<{ className?: string }>;
};

export type PlaygroundProject = {
  title: string;
  description: string;
  dates: string;
  technologies?: readonly string[];
  image?: string;
  video?: string;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  href?: string;
  active?: boolean;
};

export const DATA = {
  name: "Lukmanul Hakim",
  nickname: "Lukman",
  initials: "LK",
  url: "https://github.com/lkmandef",
  location: "Banjarmasin, Indonesia",
  locationLink: "https://www.google.com/maps/place/Banjarmasin",
  description: "Full-Stack Developer",
  summary:
    "I am a Full-Stack Developer focused on building and deploying clean, functional web applications from scratch. With a strong interest in both frontend interactivity and backend logic, I enjoy taking ideas and turning them into responsive digital solutions. I thrive on diving into new technologies and continuously improving my workflow. Currently, my main focus is on creating seamless user experiences and writing maintainable code.",
  avatarUrl: "/me.png",
  skills: [
    { name: "PHP", icon: PhpIcon },
    { name: "JavaScript", icon: JavascriptIcon },
    { name: "HTML5", icon: Html5Icon },
    { name: "CSS3", icon: Css3Icon },
    { name: "SQL", icon: SqliteIcon },
    { name: "Laravel", icon: LaravelIcon },
    { name: "Laravel Blade", icon: LaravelIcon },
    { name: "Tailwind CSS", icon: TailwindcssIcon },
    { name: "Responsive Web Design" },
    { name: "Vite", icon: ViteIcon },
    { name: "RESTful Routing" },
    { name: "CRUD Operations" },
    { name: "Form Validation" },
    { name: "Database Integration" },
    { name: "SQLite", icon: SqliteIcon },
    { name: "Relational Database Design" },
    { name: "Database Migrations & Seeders" },
    { name: "Git & GitHub", icon: GitIcon },
    { name: "Visual Studio Code", icon: VscodeIcon },
    { name: "Postman", icon: PostmanIcon },
    { name: "QR Code Integration" },
    { name: "Automated Testing (PHPUnit)" },
    { name: "React", icon: ReactLight },
    { name: "TypeScript", icon: Typescript },
    { name: "Docker", icon: Docker },
  ] as readonly Skill[],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "lukmanoman17@gmail.com",
    tel: "",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/lkmandef",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/lukmanul-hakim-041437217",
        icon: Icons.linkedin,
        navbar: true,
      },
      Instagram: {
        name: "Instagram",
        url: "https://instagram.com/Lkman_u",
        icon: Icons.instagram,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:lukmanoman17@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "RSUD dr. H. Moch. Ansari Saleh Banjarmasin",
      href: "#",
      badges: ["On-site"],
      location: "Banjarmasin, South Kalimantan, Indonesia",
      title: "Full-Stack Web Developer Intern",
      logoUrl: "/rs.png",
      start: "2026",
      end: "",
      description:
        "Developed HAFIS (Hospital APAR & Fire Inspection System), a web-based fire extinguisher inspection and monitoring system. Implemented end-to-end full-stack features including APAR asset management, QR code scanning for physical inspections, monthly inspection logging, maintenance follow-up tracking, and automated reporting workflows.",
    },
  ],
  education: [
    {
      school:
        "Universitas Islam Kalimantan Muhammad Arsyad Al Banjari (UNISKA MAB)",
      href: "https://uniska-bjm.ac.id/",
      degree: "Bachelor's Degree in Informatics Engineering (GPA: 3.80 / 4.00)",
      logoUrl: "/uniska.png",
      start: "2023",
      end: "2027",
    },
  ],
  projects: [
    {
      title: "HAFIS — Hospital APAR & Fire Inspection System",
      href: "https://github.com/lkmandef",
      dates: "2026",
      active: true,
      description:
        "A web-based fire extinguisher inspection and monitoring system developed during an internship at RSUD dr. H. Moch. Ansari Saleh Banjarmasin. The system supports APAR asset management, QR code scanning, monthly inspection tracking, maintenance follow-ups, and automated reporting.",
      technologies: [
        "Laravel 13",
        "PHP 8.5",
        "Blade",
        "Tailwind CSS v4",
        "JavaScript",
        "SQLite",
        "Vite",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/lkmandef",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/hafis.mp4",
    },
  ],
  playground: [
    {
      title: "Type Ossuary",
      href: "https://type-ossuary.vercel.app/",
      dates: "2026",
      active: true,
      description:
        "**Type Ossuary**: a resting place for words. Sweep a flashlight through the dark, type, and watch your text creep when left alone, rot when erased, and be buried for good with a single press of Enter.",
      technologies: [],
      links: [
        {
          type: "Website",
          href: "https://type-ossuary.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "/type.mp4",
    },
  ] as readonly PlaygroundProject[],
} as const;
