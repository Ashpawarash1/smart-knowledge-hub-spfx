import * as React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <main
      style={{
        padding: "24px",
      }}
    >
      {children}
    </main>
  );
};

export default Layout;