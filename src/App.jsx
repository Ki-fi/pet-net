import './App.css'
import Card from "./components/card/Card.jsx";
import Button from "./components/button/Button.jsx";
import SideMenu from "./components/side-menu/SideMenu.jsx";


function App() {

  return (
      <>
          <div className="menu-wrapper"><SideMenu /></div>
              <div className="content">
                  <div className="cards-wrapper">
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
