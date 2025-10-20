import { useGSAP } from "@gsap/react"
import { ScrollTrigger, SplitText } from "gsap/all"
import gsap from 'gsap'
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Cocktails from "./components/Cocktails"
import About from "./components/About"
import Art from "./components/Art"
import Menu from "./components/Menu"

 const App = () => {
  gsap.registerPlugin(ScrollTrigger, SplitText)
   return (
     <main >
      <Navbar/>
      <Hero/>
      <Cocktails/>
      <About/>
      <Art/>
      <Menu/>
     </main>
   )
 }
 
 export default App
 