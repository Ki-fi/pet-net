import './App.css'
import Card from "./components/card/Card.jsx";
import Button from "./components/button/Button.jsx";


function App() {

  return (
      <>
          <div className="feed">
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
      </>
  )
}

export default App
