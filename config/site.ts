import { SidebarNavItem, SiteConfig } from "types";
import { env } from "@/env.mjs";

const site_url = env.NEXT_PUBLIC_APP_URL;

export const siteConfig: SiteConfig = {
  name: "ai-wk",
  description:
    "A product for models",
  url: site_url,
  ogImage: `${site_url}/_static/og.jpg`,
  links: {
    twitter: "https://twitter.com",
    github: "https://github.com/ahmadalpharithm/ai-wk",
  },
  mailSupport: "support@saas-starter.com",
};

export const footerLinks: SidebarNavItem[] = [
  {
    title: "Company",
    items: [
      { title: "About", href: "#" },
    ],
  },
  {
    title: "Product",
    items: [
      { title: "Subscription", href: "#" },
    ],
  },
  {
    title: "Terms",
    items: [
      { title: "Payment", href: "#" },
    ],
  },
];
