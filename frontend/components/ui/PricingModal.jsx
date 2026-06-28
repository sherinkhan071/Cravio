"use client";
import React from 'react'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./Dialog";
import PricingSection from './PricingSection';

const PricingModal = ({subscriptionTier = "free", children}) => {
    const[isOpen, setIsOpen] = React.useState(false);
    const canOpen = subscriptionTier === "free";
  return (
   <Dialog
  open={isOpen}
  onOpenChange={canOpen ? setIsOpen : undefined}
>
  <DialogTrigger asChild>
    {children}
  </DialogTrigger>

  <DialogContent
  className="w-[90vw] max-w-4xl"
  onInteractOutside={() => setIsOpen(false)}
>
  <PricingSection />
</DialogContent>
</Dialog>
  )
}

export default PricingModal