import React from 'react';
import { Link, useParams } from 'react-router-dom';

const CourseDetails = () => {
    const {courseId} = useParams();
    return (
        <div>
            <h2>  Course Details : {courseId} </h2>
            <Link to="/checkout">  <button> check out </button>  </Link>
        </div>
    );
};

export default CourseDetails;