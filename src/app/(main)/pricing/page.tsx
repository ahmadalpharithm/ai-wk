import { constructMetadata } from "@/lib/utils";
import { ComparePlans } from "@/components/pricing/compare-plans";
// import { PricingCards } from "@/components/pricing/pricing-cards";

export const metadata = constructMetadata({
  title: "Pricing – SaaS Starter",
  description: "Explore our subscription plans.",
});

export default async function PricingPage() {


  return (
    <div className="flex w-full flex-col justify-center items-center gap-16 py-8 md:py-8">
      {/* <PricingCards userId={user?.id} subscriptionPlan={subscriptionPlan} /> */}
      <hr className="container" />
      <ComparePlans />
    </div>
  );
}
