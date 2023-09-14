import { useEffect, useState } from "react";
import './Main.css'
import Cart from "../Cart/Cart";
const Main = () => {
  const [allCourse, setAllCourse] = useState([]);
  const [selectCourse, setSelectCourse] = useState([])
  const [totalCost ,setTotalCost] = useState([])
  const [totalCredit, setTotalCredit] = useState([])
  const [remaining, setRemaining] =useState(0)
  

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
      return alert('already add course')
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
        return alert('no available credit')
      }
      else{
        setTotalCredit(credit)
      setRemaining(totalRemaining)
      setTotalCost(cost)

      setSelectCourse([...selectCourse,course])
      }
    }
    
    // console.log('click button');
  }

  return (
    <div className=" md:flex ">
      <div className="col-span-9 grid md:grid-cols-2 lg:grid-cols-3">
        {allCourse.map((course) => (
          <div key={course.id} className="w-80 m-8 p-3 border-2 space-y-4 border-red-400">
            <img className="w-72 h-40" src={course.img} alt="" />
            <h3 className="text-lg font-bold">{course.title}</h3>
            <h4> {course.description}</h4>
            <p className=" flex justify-between">
              <p>Price :{course.price} $ </p> 
              <p>Credit:{course.credit}</p>
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
    </div>
    
  );
  
};

export default Main;
