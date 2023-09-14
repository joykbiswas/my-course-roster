import "./App.css";
import Cart from "./Component/Cart/Cart";
import Header from "./Component/Header/Header";
import Main from "./Component/Main/Main";

function App() {
  return (
    <>
      <Header></Header>
      <div className=" md:flex ">
        <Main className="col-span-9"></Main>
        <Cart className="col-span-3"></Cart>
      </div>
    </>
  );
}

export default App;
