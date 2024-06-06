import Content from "./Content";
import Total from "./Total";
import Header from "./Header";
const CourseComponent = ({course}) => {
    return(
        <div>
            {course.map((getCourse)=>(
                <>
                <Header key={getCourse.id} course = {getCourse}/>
                <Content key={getCourse.id} course = {getCourse}/>
                <Total key={getCourse.id} course = {getCourse} />
                </>   
            ))}
        </div>
    )
}
export default CourseComponent;
