
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css'
import Home from './assets/Home';
import NavBar from "./assets/NavBar";
import NotFound from "./assets/NotFound";
import Features from "./assets/Features";
import Footer from "./assets/Footer";

function App() {

  // object data: 
  // code: "USD"
  // description: "United States Dollar"
  // rate: "30,237.4335"
  // rate_float: 30237.4335
  // symbol: "&#36;"

  // console.log(getData().then(data => {
  //   return data.bpi.USD.rate
  // }))

  // const [data, setData] = useState("USD")
  // let description = "sadasd"
  // let title2 = "probando"


  return (
    <>
      <NavBar></NavBar>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="*" element={<NotFound></NotFound>}></Route>
          <Route path="/features" element={<Features></Features>}></Route>
        </Routes>
      </BrowserRouter>
      <Footer></Footer>
    </>
  )
}

export default App
