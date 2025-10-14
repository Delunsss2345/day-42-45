import Header from "@/components/Header";
import { Outlet } from "react-router";

const DefaultLayout = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto p-4">
        <Outlet />
      </main>
    </div>
  );
};

export default DefaultLayout;
