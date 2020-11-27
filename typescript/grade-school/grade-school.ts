type Student = string
type Grade = number
type GradeString = string
type StudentRooster = Map<GradeString, Student[]>
type StudentGrades = Map<Student, Grade>

interface GradeSchool {
    studentRoster(): StudentRooster
    addStudent(s: Student, g: Grade): void
    studentsInGrade(g: Grade): Student[]
}

class GradeSchool implements GradeSchool {
    private studentGrades: StudentGrades
    constructor() { this.studentGrades = new Map<Student, Grade>() }
    private studentGradeEntries(): [Student, Grade][] {
        return Array.from(this.studentGrades.entries());
    }
    public studentRoster(): StudentRooster {
        const grades: Grade[] =
            Array.from(new Set(this.studentGrades.values()).values())
                .sort()

        const emptyStudentsRooster = new Map<GradeString, Student[]>()

        const gradesReducer =
            (rooster: StudentRooster, grade: Grade): StudentRooster =>
                rooster.set(grade.toString(), this.studentsInGrade(grade))

        return grades.reduce(gradesReducer, emptyStudentsRooster)
    }
    addStudent(s: Student, g: Grade): void {
        this.studentGrades.set(s, g)
    }
    studentsInGrade(g: Grade): Student[] {
        return this.studentGradeEntries()
            .filter(([_, sg]) => sg == g)
            .map(([s, _]) => s).sort()
    }
}

export default GradeSchool
