import { MainNavigation } from "@/components/layout/MainNavigation";
import { SiteFooter } from "@/components/layout/site-footer";


interface MarketingLayoutProps {
  children: React.ReactNode;
}

export default function MarketingLayout({ children }: MarketingLayoutProps) {
  return (
    <div className="relative flex flex-col">
      <MainNavigation scroll={true} />
      <div className="relative">{children}</div> 
      <SiteFooter />
    </div>
  );
}
