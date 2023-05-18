import { Outlet } from "react-router-dom"
import Header from "./Header/Header"



function App() {

  return (
    <div className="container" >
   <Header></Header>
      <Outlet></Outlet>
      
    </div>
  )
}

export default App
