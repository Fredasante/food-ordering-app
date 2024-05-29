import Header from "@/components/Header";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props): JSX.Element => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="container mx-auto py-10">{children}</div>
    </div>
  );
};

export default Layout;
