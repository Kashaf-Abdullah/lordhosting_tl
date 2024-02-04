import "./App.css";
import MainPage from "./Pages/MainPage";
import PageRevendeurWeb from "./Pages/PageRevendeurWeb";
import PageServer from "./Pages/PageServer";
import PageServiceCloud from "./Pages/PageServiceCloud";
import PageServiceGame from "./Pages/PageServiceGame";
import PageWebDomain from "./Pages/PageWebDomain";

import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import PageWindow from "./Pages/PageWindow";
import PagePterodactyl from "./Pages/PagePterodactyl";
import PageBrokeProtocol from "./Pages/PageBrokeProtocol";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage></MainPage>} />
          <Route path="/webdomain" element={<PageWebDomain />} />
          <Route path="/servicecloud" element={<PageServiceCloud />} />
          <Route path="/revendeurweb" element={<PageRevendeurWeb />} />
          <Route path="/servicegame" element={<PageServiceGame />} />
          <Route path="/server" element={<PageServer/>} />
          <Route path="/window" element={<PageWindow/>} />
          <Route path="/pterodactyl" element={<PagePterodactyl/>} />
          <Route path="/broke-protocol" element={<PageBrokeProtocol/>} />
        
          </Routes>
      </Router>
    </>
  );
}

export default App;
