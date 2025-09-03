import { Navbar } from "./navbar";

interface HomeLayoutProps {
  children: React.ReactNode;
}

const HomeLayout = ({ children }: HomeLayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      {children}
    </div>
  );
};

export default HomeLayout;
