import { useEffect, useState } from "react";
import './Main.css'
const Main = () => {
  const [allCourse, setAllCourse] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setAllCourse(data));
  }, []);

  return (
    <div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3">
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
              <button className=" text-xl w-full p-2 bg-sky-500 text-white rounded-lg ">Select</button>
            </div>
          </div>
        ))}
       
      </div>
    </div>
    
  );
  
};

export default Main;
