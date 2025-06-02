import './App.css'
import Button from "./components/button/Button.jsx";
import Input from "./components/input/Input.jsx";

function App() {

  return (
    <>
        <Button
            variant={"primary"}
            isDisabled={false}
            hasIconLeft={false}
            hasIconRight={true}
            iconName={"add"}
            onClick={() => {}}
            buttonText={"Primary Button"}
        />
        <Button
            variant={"secondary"}
            isDisabled={false}
            hasIconLeft={false}
            hasIconRight={false}
            iconName={"add"}
            onClick={() => {}}
            buttonText={"Secondary Button"}
        />
        <br/>
        <Input
            variant={"light"}
            label={"Input field"}
            placeholderText={"Type something"}
        />
    </>
  )
}

export default App
