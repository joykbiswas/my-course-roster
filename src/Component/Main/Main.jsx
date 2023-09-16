import { useEffect, useState } from "react";
import './Main.css'
import Cart from "../Cart/Cart";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Main = () => {
  const [allCourse, setAllCourse] = useState([]);
  const [selectCourse, setSelectCourse] = useState([])
  const [totalCost ,setTotalCost] = useState([])
  const [totalCredit, setTotalCredit] = useState([])
  const [remaining, setRemaining] =useState(20)
  

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setAllCourse(data));
  }, []);

  const handleSelectCourse=(course)=>{
    const isExit =selectCourse.find(item=>item.id ===course.id)

    let cost= course.price
    let credit = course.credit
    if(isExit){
      return toast.warn("This course already select!")
    }
    else{
      selectCourse.forEach(item =>{
        cost = cost +item.price

      })
      selectCourse.forEach(item=>{
        credit =credit +item.credit
      })
      const totalRemaining =20-credit
      if(credit >20){
        return toast.error("no credit available!")
      }
      else{
        setTotalCredit(credit)
      setRemaining(totalRemaining)
      setTotalCost(cost)

      setSelectCourse([...selectCourse,course])
      }
    }
    
  }

  return (
    <div className=" md:flex ">
      <div className="col-span-9 grid md:grid-cols-2 lg:grid-cols-3 ">
        {allCourse.map((course) => (
          <div key={course.id} className="w-80 md:w-72 lg:w-80 m-7 p-3  space-y-4 bg-white">
            <img className="w-72 h-40" src={course.img} alt="" />
            <h3 className="text-lg font-bold">{course.title}</h3>
            <h4> {course.description}</h4>
            <p className=" flex justify-between">
              <p>Price :{course.price} $ </p> 
              
              <p>Credit:{course.credit}hr</p>
            </p>
            <div>
              <button onClick={()=>handleSelectCourse(course)} className=" text-xl w-full p-2 bg-sky-500 text-white rounded-lg ">Select</button>
            </div>
          </div>
        ))}
       
      </div>
      <Cart className="col-span-3" 
      selectCourse={selectCourse}
      totalCost={totalCost}
      totalCredit={totalCredit}
      remaining={remaining}
      ></Cart>

     
     <ToastContainer></ToastContainer>
    </div>
    
  );
  
};

export default Main;
