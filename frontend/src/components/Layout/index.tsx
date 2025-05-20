import Nav from "./Nav";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Nav />
      <div className="h-20" /> {/* 네브 높이만큼 여백 */}
      {children}
    </>
  );
}
export default Layout;
