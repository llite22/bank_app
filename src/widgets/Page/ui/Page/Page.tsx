import { ReactNode } from "react";

export const Page = ({ children }: { children: ReactNode }) => {
  return (
    <main className="flex-grow h-custom py-5 px-5 pl-11 pr-11 overflow-y-auto flex-shrink">
      {children}
    </main>
  );
};
