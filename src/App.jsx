import HeaderLeft from "./components/HeaderLeft"
import Home from "./components/Home"


const App = () => {
  return (
    <div className="min-h-screen w-full flex flex-col ">
      <HeaderLeft />
      <Home />
    </div>
  )
}

export default App