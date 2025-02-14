import { useState } from "react";
import "../styles/CourseEnrollment.css"

const CourseEnrollment = () => {
    const [students, setStudents] = useState(10);

    return (
        <section id="enrollment">
            <h2>Course Enrollment</h2>
            <p>Number of students enrolled: {students}</p>
            <button onClick={() => setStudents(students + 1)}>Enroll</button>
        </section>
    );
};

export default CourseEnrollment;