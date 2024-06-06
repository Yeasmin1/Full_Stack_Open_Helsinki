const Total = (props) => {
  const total = props.course.parts.reduce ((accumulator, currentObject)=>{
    return accumulator+currentObject.exercises

  }, 0)
  return (
    <div>
      <h4>total of {total} exercises</h4>
    </div>
  )
  }
export default Total;