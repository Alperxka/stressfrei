import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { initGoogleAds, initPhoneTracking } from "./lib/gtag";

initGoogleAds();
initPhoneTracking();
const root = createRoot(document.getElementById("root")!);
root.render(<App />);
