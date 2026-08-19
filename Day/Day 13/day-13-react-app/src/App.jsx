import { Welcome } from "./components/P1";
import { ProductCard } from "./components/P2";
import SonyImg from "./assets/sony.jpg";
import ButtonDemo from "./components/P3";
import Counter from "./components/StateExampleOne";
import ToggleText from "./components/StateExampleTwo";
import './App.css'

function App() {


  return (
    <>
      <ToggleText />

      <Counter />
      <Welcome name="vanishree" />
      <ProductCard
        name="sony"
        price={4900}
        image={SonyImg}


      />
      <ButtonDemo />

    </>
  )
}

export default App
