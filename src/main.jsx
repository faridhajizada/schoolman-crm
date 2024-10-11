import { createRoot } from "react-dom/client";
import "./_metronic/assets/sass/style.react.scss";
import "./_metronic/assets/fonticon/fonticon.css";
import "./_metronic/assets/keenicons/duotone/style.css";
import "./_metronic/assets/keenicons/outline/style.css";
import "./_metronic/assets/keenicons/solid/style.css";
import "./_metronic/assets/sass/style.scss";
import { AppRoutes } from "./app/routing/AppRoutes";
import { Provider } from "react-redux";
import store from "./app/redux/store";


createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <AppRoutes />
  </Provider>
);