import "../styles/Faculty.css"

const Faculty = () => {
    const facultyMembers = [
      { name: "Dr. John Doe", position: "Professor", gpa: "3.9", workplace: "IITU" },
      { name: "Alice Smith", position: "Lecturer", gpa: "3.8", workplace: "IITU" },
    ];
  
    return (
      <section id="faculty">
        <h2>Faculty Members</h2>
        <ul>
          {facultyMembers.map((member, index) => (
            <li key={index}>
              <strong>{member.name}</strong> - {member.position} (GPA: {member.gpa}, {member.workplace})
            </li>
          ))}
        </ul>
      </section>
    );
  };
  
  export default Faculty;
  