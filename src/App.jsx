import './App.css'
import BottomSheet from "./components/bottomSheet/BottomSheet.jsx";
import Input from "./components/input/Input.jsx";

function App() {

  return (
    <>
        <div className="login-page">
            <div className="login-background"></div>
            <BottomSheet title="Inloggen">
                <p>Er is een inlogcode verstuurd naar example@email.com</p>
                <Input
                    variant={"dark"}
                    label={"Inlogcode"}
                    placeholderText={"Type something"}
                />
            </BottomSheet>
        </div>
    </>
  )
}

export default App
