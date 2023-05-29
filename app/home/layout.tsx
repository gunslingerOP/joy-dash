import Header from "../components/Header";
import SidebarProvider from "../components/sidebar/SidebarProvider";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex    ">
      <section className="h-screen self-start	top-0 sticky flex   ">
        <SidebarProvider />
      </section>

      <section className="px-16  my-6    ">
        <Header title="Overview" />
        {children}
      </section>
    </div>
  );
}
