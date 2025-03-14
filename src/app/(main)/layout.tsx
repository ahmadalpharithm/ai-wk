import { NavBar } from "@/components/layout/navbar";
import { SiteFooter } from "@/components/layout/site-footer";
import { NavMobile } from "@/components/layout/mobile-nav";


interface MarketingLayoutProps {
  children: React.ReactNode;
}

export default function MarketingLayout({ children }: MarketingLayoutProps) {
  return (
    <div className="flex flex-col">
      <NavMobile />
      <NavBar scroll={true} />
      <div className="min-h-screen">{children}</div>
      <SiteFooter />
    </div>
  );
}
