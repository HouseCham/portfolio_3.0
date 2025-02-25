import type { ReactNode } from "react";

/**
 * Function component for displaying a step with sticky color variant
 * @returns 
 */
export const StepWithStickyColorVariant = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-full max-w-2xl p-4 md:mx-auto">
        {children}
    </div>
  );
};

export default StepWithStickyColorVariant;
