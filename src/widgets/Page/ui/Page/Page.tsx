import { ReactNode } from "react";

export const Page = ({ children }: { children: ReactNode }) => {
  return (
    <main className="flex-grow h-custom py-5 px-5 pl-4 pr-4 overflow-y-auto flex-shrink bg-gray-100 dark:bg-black">
      {children}
    </main>
  );
};
