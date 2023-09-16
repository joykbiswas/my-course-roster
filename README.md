<!-- # React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh -->

#Add 3 project features:
<h3>Usage of React Hooks:</h3> <h5>React hooks are functions that allow you to use state, use Effect, context, and other React features in functional components .Hooks are a powerful tool that can be used to simplify and streamline the development of React components.useState and useEffect hooks are the most fundamental hooks.</h5>
<h3>Use of a json Api:</h3> <h5>Json is a lightweight data-interchange format that is easy to read and write.json api can be used to provide data to web applications, mobile, applications and  e-commerce  website. It can be used to fetch data.</h5>
<h3>Props:</h3><h5> Props are data that is passed from a parent component to a child component.Props are a powerful way to pass data between components in React. They are easy to use and understand, and they make it easy to keep your code organized and maintainable.</h5>

#Discuss managed the state in this project:
<h3>[allCourse, setAllCourse] = useState([])</h3><h5>useState([]) is a hook call that initializes a state variable named allCourse is the current state value, initially set to an empty array. setAllCourse is a event handle that you can use to click the allCourse state. When i call setAllCourse (newValue), it will update the allCourse state with the new value you provide as newValue.</h5>
<h3>[selectCourse, setSelectCourse] = useState([])</h3><h5>useState([]) initializes the selectCourse state variable as an empty array, and when i select the course  to click the selectCourse variable. but you can not select one course one time it depend you Credit hour. At last You can use setSelectCourse to update its value.</h5>
<h3>[totalCost ,setTotalCost] = useState([])</h3><h5>useState([]) initializes the totalCost state variable as an empty array, and you have select the course then  the price give up.It will update the total price with the new value you provide as newValue.</h5>
<h3>[totalCredit, setTotalCredit]= useState([])</h3><h5>useState([]) initializes the totalCost state variable as an empty array, and you have access to it credit hour  the totalCredit variable is give up.But you not assess more than  Credit 20 hour.</h5>
<h3>[remaining, setRemaining] =useState(20)</h3><h5> The remaining state variable with an initial value of 20. when you select the course then your credit is decrise .you can use only 20 hour credit.It show setRemaining update value.</h5>
