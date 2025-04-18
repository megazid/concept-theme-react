import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import AnnouncementBar from "./AnnouncementBar";
// import ScrollingText from "../shared/ScrollingText";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <AnnouncementBar />
      <Header />
      <main className="pt-[112px] md:pt-[120px] flex-1">
        {/* <ScrollingText className="mt-4 md:mt-8" /> */}
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout; 