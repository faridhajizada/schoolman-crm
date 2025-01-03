import { Outlet } from "react-router-dom";
import { HeaderWrapper } from "./components/header";
import { FooterWrapper } from "./components/footer";
import { Sidebar } from "./components/sidebar";
import { PageDataProvider } from "./core";


const MasterLayout = () => {

  return (
    <PageDataProvider>
      <div className="d-flex flex-column flex-root app-root" id="kt_app_root">
        <div
          className="app-page flex-column flex-column-fluid"
          id="kt_app_page"
        >
          <HeaderWrapper />
          <div
            className="app-wrapper flex-column flex-row-fluid"
            id="kt_app_wrapper"
          >
            <Sidebar />
            <div
              className="app-main flex-column flex-row-fluid"
              id="kt_app_main"
            >
              <div className="d-flex flex-column flex-column-fluid">
                <Outlet />
              </div>
              <FooterWrapper />
            </div>
          </div>
        </div>
      </div>
    </PageDataProvider>
  );
};

export { MasterLayout };
