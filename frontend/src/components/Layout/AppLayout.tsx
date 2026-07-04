import type { ReactNode } from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

type Props = {
  children: ReactNode;
};

function AppLayout({ children }: Props) {
  return (
    <div className="flex">

      <Sidebar />

      <div className="flex-1">

        <Topbar />

        <div className="p-8">
          {children}
        </div>

      </div>

    </div>
  );
}

export default AppLayout;