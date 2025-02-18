import { cn } from "@/utils/cn";
import { ReactNode } from "react";
/**
 * Functional component that wraps the code block in a container.
 * @param param0 
 * @returns 
 */
const CodeContainer = ({ children }: { children: ReactNode }) => {
  return (
    <div className="h-fit w-full rounded-lg border border-neutral-400/20 bg-neutral-100 px-5 py-3 transition-colors duration-300 dark:border-neutral-400/10 dark:bg-neutral-800 dark:hover:bg-neutral-800/80">
      <code
        className={cn(
          "whitespace-pre-wrap text-neutral-500 text-sm dark:text-neutral-300",
        )}
      >
        {children}
      </code>
    </div>
  );
};

export default CodeContainer;