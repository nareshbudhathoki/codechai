import { Outlet } from "react-router-dom";
import NavOptions from "../components/NavOptions";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";

const DashboardLayout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-950 text-white">
      {/* Navbar */}
      <NavOptions />

      {/* Main content with sidebar */}
      <div className="flex flex-1 pt-16">
        {/* Sidebar */}
        <Sidebar />

        {/* Dashboard content */}
        <main className="flex-1 p-6 overflow-auto">
          <Outlet />
        </main>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default DashboardLayout;
