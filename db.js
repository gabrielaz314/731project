var { MongoClient } = require('mongodb');

var url = 'mongodb+srv://testUser:DBPASS@cluster0.tyvwx.mongodb.net/cps731project?retryWrites=true&w=majority';


var db = null;
var client = null;
async function connect() {
    if (db == null) {
        var options = {
            useUnifiedTopology: true,
        };

        client = await MongoClient.connect(url, options);
        db = await client.db("cps731project");
    }

    return db;
}

async function createCourse(courseTitle, description, date, prof, preReq, requirements) {
    var conn = await connect();

    var existingCourse = await conn.collection('courses').findOne({ courseTitle });
    if (existingCourse != null) {
        throw new Error('Course already exists!');
    }

    conn.collection('courses').insertOne({ courseTitle, description, date, prof, preReq, requirements });
}

async function createCourseManager(firstName, lastName, dateOfBirth, gender, phoneNumber, emailAddress, userName, password, empId, position, dept, joinDate) {
    var conn = await connect();

    var existingCourse = await conn.collection('courseManager').findOne({ firstName });
    if (existingCourse != null) {
        throw new Error('CouseManager already exists!');
    }

    conn.collection('courseManager').insertOne({ firstName, lastName, dateOfBirth, gender, phoneNumber, emailAddress, userName, password,empId, position, dept, joinDate });
}

//createCourseManager("John","Doe","09-09-91","Male","123456789","john.doe@gmail.com","johnd","","1","HOD","CS","01-01-2020");


async function getCourseManager(empId) {
    var conn = await connect();
    var course = await conn.collection('courseManager').findOne({ empId });

    return [firstName, lastName, phoneNumber, emailAddress,empId, position, dept];

}

//getCourseManager("1");

async function createStudent(firstName, lastName, dateOfBirth, gender, phoneNumber, emailAddress, userName, password, studentNumber, program, programArea, enrolledDate, gradDate) {
    var conn = await connect();

    var existingCourse = await conn.collection('Student').findOne({ studentNumber });
    if (existingCourse != null) {
        throw new Error('Student already exists!');
    }

    conn.collection('Student').insertOne({ firstName, lastName, dateOfBirth, gender, phoneNumber, emailAddress, userName, password, studentNumber, program, programArea, enrolledDate, gradDate });
}


async function getStudent(studentNumber) {
    var conn = await connect();
    var course = await conn.collection('student').findOne({ studentNumber });

    return [firstName, lastName, phoneNumber, emailAddress,studentNumber, program, enrolledDate, gradDate];


}

async function createStudentInformation(studentNumber, courseId, programArea,enrolledDate,completedDate, semesterTerm, gradeReceived, courseStatus) {
    var conn = await connect();

    var existingCourse = await conn.collection('StudentInformation').findOne({ studentNumber });
    if (existingCourse != null) {
        throw new Error('StudentInformation already exists!');
    }

    conn.collection('studentInformation').insertOne({studentNumber, courseId, programArea,enrolledDate,completedDate, semesterTerm, gradeReceived, courseStatus});
}

async function getStudentInformation(studentNumber) {
    var conn = await connect();
    var course = await conn.collection('studentInformation').findOne({ studentNumber });

    return [studentNumber, courseId, programArea,enrolledDate,completedDate, semesterTerm, gradeReceived, courseStatus];

}


async function login(courseTitle, description, date) {
    var conn = await connect();
    var course = await conn.collection('courses').findOne({ courseTitle });

    if (course == null) {
        throw new Error('User does not exist!');
    }

    if (course.date != date) {
        throw new Error('Wrong date!');
    }
}

async function addNewAntiReq(courseTitle, antiReq) {
    var conn = await connect();

    await conn.collection('courses').updateOne(
        { courseTitle },
        {
            $push: {
                antiReq: antiReq,
            },
        },
    );
}

async function getCourseDetails(courseTitle) {
    var conn = await connect();
    var course = await conn.collection('courses').findOne({ courseTitle });

    return [course.courseTitle, course.description, course.date, course.antiReq];

}

async function test() {
   console.log(await getCourseDetails('CPS700')); 
}

async function deleteCourseAntiReq(courseTitle, antiReq) {
    var conn = await connect();

    await conn.collection('courses').updateOne(
        { courseTitle },
        {
            $pull: {
                antiReq: antiReq,
            },
        },
    )
}

async function test2() {
    console.log(await getCourseDetails('CPS700')); 
    await deleteCourseAntiReq('CPS700', 'CPS400');
    console.log(await getCourseDetails('CPS700')); 
}


module.exports = {
    createCourse,
    login,
    addNewAntiReq,
    getCourseDetails,
    deleteCourseAntiReq,
    createCourseManager, 
    createStudent, 
    createStudentInformation, 
    getCourseManager, 
    getStudent, 
    getStudentInformation

}

// createCourse(
//     'CPS700', 
//     'This course will explore topics in web development.',
//     'Winter 2022',
//     'Professor H. Smith',
//     'CPS600',
//     'none'
//     )
