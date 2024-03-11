export default function updateStudentGradeByCity(students, city, newGrades) {
  const filteredStudents = students.filter(
    (student) => student.location === city,
  );

  return filteredStudents.map((student) => {
    const newGrade = newGrades.find(
      (newGrade) => student.id === newGrade.studentId,
    );
    return { ...student, grade: newGrade ? newGrade.grade : 'N/A' };
  });
}
