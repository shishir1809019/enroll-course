import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import './Course.css';


const Course = (props) => {

    const {title,price,name} = props.course
    const handleAddCourse = props.handleAddCourse
    return (
        <div className = 'course-main'>
            <div className="course">
            <h4>{title}</h4>
            <p> <small>Instractor: {name}</small> </p>
            <br/>
            <p><small>{price}</small></p>
            <Button onClick= {() =>handleAddCourse(props.course)}>Enroll Now</Button>
        </div>
        </div>
    );
};

export default Course;