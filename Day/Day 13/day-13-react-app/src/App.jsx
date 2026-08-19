import { Welcome } from "./components/P1";
import { ProductCard} from "./components/P2";
import  SonyImg  from "./assets/sony.jpg";

import './App.css'

function App() {
  

  return (
    <>
      <Welcome name="vanishree" />
      <ProductCard
      name="sony"
      price={4900}
      image={SonyImg}
      
      
      />
    </>
  )
}

export default App
