import AppRouter from "./router/router";
import { HelmetProvider } from "react-helmet-async";

import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

function App() {
  return (
    <HelmetProvider>
      <AppRouter />
    </HelmetProvider>
  );
}

export default App;