
import "./App.css";

import Header from "./Component/Header/Header";
import Main from "./Component/Main/Main";

function App() {
  // const [selectCourse, setSelectCourse] = useState([])
  // const handleSelectCourse=(course)=>{
  //   setSelectCourse([...selectCourse,course])
  //   console.log('click button');
  // }
  return (
    <>
      <Header></Header>
      <div >
        <Main  ></Main>
        
      </div>
    </>
  );
}

export default App;
