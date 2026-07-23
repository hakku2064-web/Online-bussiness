import Layout from "./layouts/Layout";
import {Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Collection from "./pages/Collection";
import About from "./pages/About";
import Contact from "./pages/Contact";



function App() {
  return (
   <Routes>
    <Route path="/" element={<Layout/>}>
    <Route index element={<Home/>}/>
    <Route path="about" element={<About/>}/>
    <Route path="collection" element={<Collection/>}/>
    <Route path="contact" element={<Contact/>}/>
    </Route>
   </Routes>
  )
}

export default App