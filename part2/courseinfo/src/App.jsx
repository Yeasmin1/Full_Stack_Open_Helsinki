import Header from "./course/Header"
import Content from "./course/Content"
import Total from "./course/Total"
import CourseComponent from "./course/CourseComponent"
const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]
  return (
    <div>
      <CourseComponent course={courses}/>
    </div>

    /*<div>
      {courses.map((course, index)=>(
        <>
        <Header key={course.id} course={course}/>
        <Content key={course.id} course = {course}/>
        <Total key={course.id} course = {course} />
        </>
          
      ))}
      
    </div>*/
  )
}

export default App