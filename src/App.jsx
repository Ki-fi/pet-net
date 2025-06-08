import './App.css'
import Card from "./components/card/Card.jsx";
import Button from "./components/button/Button.jsx";
import SideMenu from "./components/side-menu/SideMenu.jsx";
import PageBar from "./components/page-bar/PageBar.jsx";
import ToggleButton from "./components/toggle-button/ToggleButton.jsx";
import { Routes, Route } from 'react-router-dom';
import Chip from "./components/chip/Chip.jsx";
import CardContent from "./components/card-content/CardContent.jsx";
import Avatar from "./components/avatar/Avatar.jsx";

<Routes>
<Route path="/buurtgroep" element={<div>Buurtgroep Page</div>} />
<Route path="/profiel" element={<div>Buurtgroep Page</div>} />
</Routes>


function App() {

  return (
      <>
          <div className="menu-wrapper"><SideMenu /></div>
                  <div className="content">
                      <PageBar pageTitle={"Buurtgroep"}/>
                      <div className="cards-wrapper">
                          <ToggleButton
                              buttonNameLeft={"Alle posts"}
                              buttonNameRight={"Mijn posts"}
                          />
                          <Card
                              avatar={<Avatar />}
                              title={"Adison George"}
                              hasSubtitle={true}
                              subtitle={"Dit is een ondertitel"}
                              buttons={<Button
                                  variant={"primary"}
                                  buttonText="reageren"
                              ></Button>
                              }
                          >
                              <CardContent>
                                  <Chip chipText={"Kattenbak verschonen"}/>
                              </CardContent>
                          </Card>
                          <Card
                              avatar={<Avatar />}
                              title={"Chap Workman"}
                              hasSubtitle={true}
                              subtitle={"Dit is een ondertitel"}
                              buttons={<Button
                                  variant={"primary"}
                                  buttonText="reageren"
                              />}
                          >
                              <CardContent>
                                  <Chip chipText={"Water verversen"}/>
                              </CardContent>
                          </Card>
                      </div>
                      <div className="footer">
                          <Button
                              variant="fab"
                              hasIconLeft={true}
                              iconName={"add"}
                          />
                      </div>
                  </div>
      </>
  )
}

export default App
