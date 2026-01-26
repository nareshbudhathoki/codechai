import { Outlet } from "react-router-dom";
import NavOptions from "../components/NavOptions";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavOptions />

      {/* Content renders below sticky navbar automatically */}
      <main className="grow">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;
