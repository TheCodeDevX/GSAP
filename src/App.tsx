import { useGSAP } from "@gsap/react"
import { ScrollTrigger, SplitText } from "gsap/all"
import gsap from 'gsap'

 const App = () => {
  gsap.registerPlugin(ScrollTrigger, SplitText)
   return (
     <div className="flex-center h-screen">
       <h1 className="text-3xl text-indigo-530">Hello, Gsap!</h1>
     </div>
   )
 }
 
 export default App
 