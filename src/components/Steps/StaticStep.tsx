import { ReactNode } from "react";

/**
 * Static step component for displaying a step with title and children
 * @param param0 
 * @returns 
 */
const StaticStep = ({
  step,
  title,
  children,
  titleclassname = "",
  className = "",
}: {
  step: number;
  title: string;
  titleclassname?: string;
  children?: ReactNode;
  className?: string;
}) => {
  return (
    <div className={`flex gap-6 ${className}`}>
      <div className="flex flex-col items-center">
        <p className="flex size-8 flex-none select-none items-center justify-center rounded-full border border-neutral-400/20 bg-neutral-100 font-medium text-neutral-700 text-sm dark:border-neutral-400/10 dark:bg-neutral-800 dark:text-neutral-50 dark:hover:bg-neutral-800/80">
          {step}
        </p>
        <div className="relative my-2 h-full w-px rounded-full bg-neutral-200 dark:bg-neutral-700" />
      </div>
      <div className="mb-4 w-full">
        <h6 className={`mb-4 ml-1 font-medium text-lg text-neutral-700 tracking-tight dark:text-neutral-50 ${titleclassname}`}>
          {title}
        </h6>
        {children}
      </div>
    </div>
  );
};

export default StaticStep;