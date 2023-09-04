import { useLocation } from "react-router-dom";
import Sidebar from "./sidebar";

function RootLayout({ children }) {
  const {pathname} = useLocation();
  const isLoginPage = pathname === "/login";

  return (
    <div className="flex ">
      {!isLoginPage && <Sidebar />}
      <main className="max-w-[3400px]  flex-1 ">{children}</main>
    </div>
  );
}

export default RootLayout;
