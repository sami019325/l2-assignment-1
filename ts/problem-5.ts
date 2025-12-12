{
    //

    interface Student {
        name: string,
        age: number,
        grades: Array<number>
        averageGradeForBob?: () => number
    }
    const student1: Student = {
        name: "Bob",
        age: 17,
        grades: [75, 80, 82, 88, 90],
    }

    const averageGrade = (stdntObj: Student): number => {
        return stdntObj.grades.reduce((a, b) => a + b, 0) / stdntObj.grades.length;
    };



    const averageGradeForBob = averageGrade(student1)
    console.log(averageGradeForBob);
    //
}