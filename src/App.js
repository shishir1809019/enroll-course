import './App.css';
import { useEffect, useState } from 'react';
import data from './data/data.json';
import Course from './Course/Course';
import Cart from './Cart/Cart';


function App() {

  const [courses, setCourses] = useState([])
  const [cart, setCart] = useState([])

  useEffect(() => {
    setCourses(data)
  })

  const handleAddCourse = (course) => {
    const newCart = [...cart, course]
    setCart(newCart)
  }



  return (
    <div className="App">
      <h1>Total Course - {data.length}</h1>
      <p>Course Enrolled - {cart.length} </p>
      <Cart cart={cart}></Cart>
      {
        courses.map(course => <Course course ={course} handleAddCourse={handleAddCourse}></Course>)
      }
    </div>
  );
}

export default App;
