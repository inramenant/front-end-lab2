import "../styles/CourseInfo.css";

const CourseInfo = ({ courseName }) => {
    return (
        <section id="course-info">
            <h2>Course Information</h2>
            <p>Welcome to the <strong>{courseName}</strong> course!</p>
            <p>This course covers essential topics to help students excel in programming.</p>
        </section>
    );
};

export default CourseInfo