import React from "react";
import { PricingTable } from "@clerk/nextjs";

function PricingSection() {
  return (
    <div className="w-full">
      <div className="mb-16">
        <h2 className="text-5xl md:text-6xl font-bold mb-4">
          Simple Pricing
        </h2>

        <p className="text-xl text-stone-600 font-light">
          Start for free. Upgrade to become a master chef.
        </p>
      </div>

      <div className="mx-auto">
       <PricingTable
  appearance={{
    variables: {
      colorPrimary: "#f97316",
    },
  }}
/>
      </div>
    </div>
  );
}

export default PricingSection;