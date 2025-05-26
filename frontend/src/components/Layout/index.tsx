import { useLocation } from "react-router-dom";
import Nav from "./Nav";

function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <>
      {!isHome && <Nav />}
      {!isHome && <div className="h-20" />}
      {children}
    </>
  );
}

export default Layout;
