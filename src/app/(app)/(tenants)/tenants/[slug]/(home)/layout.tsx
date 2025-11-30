import { Footer } from "@/modules/tenants/ui/components/footer";
import { Navbar } from "@/modules/tenants/ui/components/navbar";

interface LayoutProps {
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
}

const Layout = ({ children, params }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen bg-[#f4f4f0]">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
