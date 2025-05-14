import type { Metadata } from "next";

const TITLE = "Ramsés Ramírez Vallejo";
const DESCRIPTION = "I'm a software engineer with a passion for creating innovative solutions.";
const DEFAULT_KEYWORDS = [
  "Ramsés Ramírez Vallejo",
  "Software Engineer",
  "Web Developer",
  "Full Stack Developer",
  "JavaScript",
  "TypeScript",
  "Golang",
  ".NET",
  "C#",
  "React",
  "Node.js",
  "Next.js",
  "Programador",
  "Desarrollador Web",
  "Desarrollador Full Stack",
  "Jalisco",
  "México",
  "Desarrollador de Software",
  "Ingeniero de Software",
  "Ingeniero de Software en Jalisco",
  "Ingeniero de Software en México",
  "Desarrollador de Software en Jalisco",
  "Desarrollador de Software en México",
  "Desarrollador Web en Jalisco",
  "Desarrollador Web en México",
  "Desarrollador Full Stack en Jalisco",
  "Desarrollador Full Stack en México",
  "Desarrollador Web en Guadalajara",
  "Desarrollador Web en Tepatitlán",
  "Desarrollador Full Stack en Guadalajara",
  "Desarrollador Full Stack en Tepatitlán",
]
const SITE_URL = "https://ramsesramva.com";
const LOGO_URL = "https://ramsesramva.com/logo_me.png";


interface SEOProps {
    title?: string;
    description?: string;
    keywords?: string[];
    openGraph?: {
        title?: string;
        description?: string;
        images?: {
            url: string;
            width: number;
            height: number;
            alt: string;
        }[];
    };
    twitter?: {
        title?: string;
        description?: string;
        card?: "summary" | "summary_large_image" | "player" | "app";
        images?: string[];
    };
    canonicalUrlRelative?: string;
    extraMetaTags?: Record<string, string>;
}

export const getSEOTags = (props?: SEOProps): Metadata & {
    canonicalUrlRelative?: string;
    extraMetaTags?: Record<string, string>;
} => {
    return {
        title: props?.title || TITLE,
        description: props?.description || DESCRIPTION,
        keywords: props?.keywords ? [...props?.keywords, ...DEFAULT_KEYWORDS] : DEFAULT_KEYWORDS,
        applicationName: "Dipinto",
        metadataBase: new URL(SITE_URL),
        icons: [
          {rel: "icon", href: "/favicon.ico", url: "/favicon.ico"},],
        openGraph: {
            title: props?.openGraph?.title || TITLE,
            description: props?.openGraph?.description || DESCRIPTION,
            url: SITE_URL,
            images: props?.openGraph?.images || [{
                url: LOGO_URL,
                width: 500,
                alt: "Dipinto",
                height: 500
              }],
            locale: "es_MX",
            type: "website",
        },
        twitter: {
            card: props?.twitter?.card || "summary_large_image",
            title: props?.twitter?.title || TITLE,
            description: props?.twitter?.description || DESCRIPTION,
            images: props?.twitter?.images,
        },
        ...(props?.canonicalUrlRelative && {
            alternates: { canonical: props?.canonicalUrlRelative },
        }),

        ...(props?.extraMetaTags && {
            extraMetaTags: props?.extraMetaTags,
        }),
    }
};