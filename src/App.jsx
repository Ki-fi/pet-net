import './App.css'
import Button from "./components/button/Button.jsx";

function App() {

  return (
    <>
        <Button
            variant={"primary"}
            isDisabled={false}
            hasIconLeft={false}
            hasIconRight={false}
            onClick={() => {}}
            buttonText={"Primary Button"}
        />
        <Button
            variant={"secondary"}
            isDisabled={false}
            hasIconLeft={false}
            hasIconRight={false}
            onClick={() => {}}
            buttonText={"Primary Button"}
        />
    </>
  )
}

export default App
