import Header from "../components/Header";
import SidebarProvider from "../components/sidebar/SidebarProvider";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex   h-screen">
      <section className="    flex">
        <SidebarProvider />
      </section>

      <section className="px-16 mt-6">
        <Header title="Overview" />
        {children}
      </section>
    </div>
  );
}
