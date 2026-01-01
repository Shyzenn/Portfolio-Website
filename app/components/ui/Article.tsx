import React, { ReactNode } from "react";

const Article = ({ children }: { children: ReactNode }) => {
  return (
    <article className="border rounded-lg p-4 dark:bg-gray-950">
      {children}
    </article>
  );
};

export default Article;
