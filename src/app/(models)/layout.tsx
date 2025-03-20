import { SiteFooter } from "@/components/layout/site-footer";
import { ModelsNavigation } from "@/components/layout/ModelsNavigation";


interface MarketingLayoutProps {
  children: React.ReactNode;
}

export default function MarketingLayout({ children }: MarketingLayoutProps) {
  return (
    <div className="relative flex flex-col">
      <ModelsNavigation scroll={true} />
      <div className="relative">{children}</div> 
      <SiteFooter />
    </div>
  );
}
