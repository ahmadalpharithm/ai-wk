import { SidebarNavItem, SiteConfig } from "@/types";
// import { env } from "@/env.mjs";

const site_url = "https://www.ai-wk.com";

export const siteConfig: SiteConfig = {
  name: "ai-wk",
  description:
    "A product for models",
  url: site_url,
  ogImage: `${site_url}`,
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
      { title: "Subscriptions", href: "#" },
    ],
  },
  {
    title: "Terms",
    items: [
      { title: "Payments", href: "#" },
    ],
  },
];
