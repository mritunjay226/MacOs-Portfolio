import {Dock, Navbar, Welcome, Home} from "@components"
import { Terminal, Safari, Resume, Finder, Text, ImageWindowContent, Contact, Photos } from "@windows";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable"

gsap.registerPlugin(Draggable);
const App = () => {
  return (
    <main>
        <Navbar/>
        <Welcome />
        <Dock />

        <Terminal />
        <Safari />
        <Resume />
        <Finder />
        <Text />
        <ImageWindowContent />
        <Contact />
        <Home />
        <Photos />
    </main>
  )
}

export default App