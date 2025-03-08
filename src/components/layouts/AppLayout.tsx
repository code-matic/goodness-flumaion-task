import { type ReactNode } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import PageWrapper from "./PageWapper";

interface AppLayoutProps {
  children: ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <div>
      <Navbar />
      <PageWrapper>{children}</PageWrapper>
      <Footer />
    </div>
  );
};

export default AppLayout;