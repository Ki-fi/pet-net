import './App.css'
import Card from "./components/card/Card.jsx";
import Button from "./components/button/Button.jsx";
import SideMenu from "./components/side-menu/SideMenu.jsx";
import PageBar from "./components/page-bar/PageBar.jsx";
import ToggleButton from "./components/toggle-button/ToggleButton.jsx";
import { Routes, Route } from 'react-router-dom';

<Routes>
<Route path="/buurtgroep" element={<div>Buurtgroep Page</div>} />
<Route path="/profiel" element={<div>Buurtgroep Page</div>} />
</Routes>


function App() {

  return (
      <>
          <div className="menu-wrapper"><SideMenu /></div>
              <div className="content">
                  <div className="pagebar-wrapper"><PageBar pageTitle={"Buurtgroep"}/></div>
                  <div className="cards-wrapper">
                  <ToggleButton
                     buttonNameLeft={"Alle posts"}
                     buttonNameRight={"Mijn posts"}
                  />
                  <Card
                      title={"Titel"}
                      hasSubtitle={true}
                      subtitle={"Dit is een ondertitel"}
                      buttons={<Button
                          variant={"primary"}
                          buttonText="ACTION"
                      />
                      }
                  />
                  <Card
                      title={"Titel"}
                      hasSubtitle={true}
                      subtitle={"Dit is een ondertitel"}
                      buttons={<Button
                          variant={"primary"}
                          buttonText="ACTION"
                      />
                      }
                  />
                  </div>
              </div>
      </>
  )
}

export default App
