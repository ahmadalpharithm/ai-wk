"use client";

import { SubscriptionPlan, UserSubscriptionPlan } from "@/types";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/shared/icons";

interface BillingFormButtonProps {
  offer: SubscriptionPlan;
  subscriptionPlan: UserSubscriptionPlan;
  year: boolean;
}

export function BillingFormButton({
  year,
  offer,
  subscriptionPlan,
}: BillingFormButtonProps) {

  return (
    <Button
      variant={"default"}
      rounded="full"
      className="w-full"
      onClick={() => {}}
    >
      {"Manage Subscription"}
    </Button>
  );
}
