import { forwardRef } from "react";

import { cn } from "@/lib/utils";

const BentoGrid = ({ children, className, ...props }) => (
  <div
    data-slot="bento-grid"
    className={cn(
      "mt-[18px] grid grid-cols-4 auto-rows-[160px] grid-flow-row-dense gap-4 max-[860px]:grid-cols-2 max-[560px]:auto-rows-auto max-[560px]:grid-cols-1",
      className,
    )}
    {...props}
  >
    {children}
  </div>
);

const BentoCard = forwardRef(function BentoCard(
  { children, className, ...props },
  ref,
) {
  return (
    <div
      data-slot="bento-card"
      ref={ref}
      className={cn("pointer-events-auto", className)}
      {...props}
    >
      {children}
    </div>
  );
});

export { BentoGrid, BentoCard };
