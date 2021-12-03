var { MongoClient } = require('mongodb');

//var url = 'mongodb+srv://admin:admin@cluster0.j5utg.mongodb.net/cps731project?retryWrites=true&w=majority';
var url = 'mongodb+srv://testUser:731project@cluster0.tyvwx.mongodb.net/cps731project?retryWrites=true&w=majority';

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


// QUERIES-----------------------------------------------------------------------------------------------

//---------------------------------
// Course Table Queries
//---------------------------------
async function Course(courseId, courseTitle, courseCode, courseSection, courseDescription, courseCredits, durationHours, department, semester, year)    {
    var conn = await connect();

    var existingCourse = await conn.collection('Course').findOne({courseId});
    if (existingCourse != null) {
        throw new Error('Course already exists!');
    }
    conn.collection('Course').insertOne({courseId, courseTitle, courseCode, courseSection, courseDescription, courseCredits, durationHours, department, semester, year});
}
//Course("101", "Introduction to Computer Science", "CS101", "AA0", "This is an introduction to the Science of Computer and history of how it evolved after its invention.", "1", "60", "Computer Science", "Fall", "2021");
//Course("102a", "Introduction to Computer Science", "CS102", "AA0", "This is an introduction to the Science of Computer and history of how it evolved after its invention.", "1", "60", "Computer Science", "Winter", "2022");
//Course("103a", "Software Engineering: Concepts", "CS103", "SE1", "An understanding of Software Engineering and its approach to developing software", "1", "60", "Computer Science", "Winter", "2022");
//Course("103b", "Software Engineering: Concepts", "CS103", "SE2", "An understanding of Software Engineering and its approach to developing software", "1", "60", "Computer Science", "Winter", "2022");
//Course("301a", "Web Development", "CS700", "WD1", "This course will cover concepts of Web development", "1", "60", "Computer Science", "Spring", "2022");
//Course("301b", "Web Development", "CS700", "WD1", "This course will cover concepts of Web development", "1", "60", "Computer Science", "Fall", "2022");

async function getAllCourses() {
    var conn = await connect();
    var course = await conn.collection('Course').find().sort({"year":-1, "semester":1, "courseId":1}).toArray();
    console.log(course);
}
//getAllCourses();

async function getAllCoursesKeyword(keyword) {
    var conn = await connect();
    var course = await conn.collection('Course').find( { $text: { $search: keyword } }).toArray();
    console.log(course);
}
//getAllCoursesKeyword("102");




//---------------------------------
// FulfilledCourses Table Queries
//---------------------------------
async function createFulfilledCourse(studentNumber, courseId, programArea, enrolledDate, completedDate, semesterTerm, gradeReceived, courseStatus) {
    var conn = await connect();

    var existingCourse = await conn.collection('FulfilledCourses').findOne({ studentNumber });
    if (existingCourse != null) {
        throw new Error('Fulfilled Course already exists!');
    }

    conn.collection('FulfilledCourses').insertOne({studentNumber, courseId, programArea, enrolledDate,completedDate, semesterTerm, gradeReceived, courseStatus});
}
//createFulfilledCourse("123456","101","Computer Science", "14-01-2022","20-05-2022","Winter2022", "", "Enrolled");

async function getFulfilledCourses(studentNumber) {
    var conn = await connect();
    var course = await conn.collection('FulfilledCourses').find({ studentNumber }).toArray();
    console.log(course);
}
//getFulfilledCourses("123456");




//---------------------------------
// SavedCourses Table Queries
//---------------------------------
async function createSavedCourse(studentNumber, courseId, courseCode, courseSection, savedDate, semesterTerm)    {
    var conn = await connect();

    var existingSavedCourse = await conn.collection('SavedCourses').findOne({courseId});
    if (existingSavedCourse != null) {
        throw new Error('Course is already Saved!');

    }
    conn.collection('SavedCourses').insertOne({studentNumber, courseId, courseCode, courseSection, savedDate, semesterTerm});
}
//createSavedCourse("123456", "101","CPS101", "AA0", "10-11-20", "Winter 2021");

async function getSavedCourses(studentNumber) {
    var conn = await connect();
    var course = await conn.collection('SavedCourses').find({ studentNumber }).toArray();
    console.log(course);
}
//getSavedCourses("123456");




//---------------------------------
// NonRelatedCourse Table Queries
//---------------------------------
async function NonRelatedCourse(courseId, studentNumber, courseCode, courseSection, startDate, endDate, grade, type)   {
    var conn = await connect();

    var existingNonRelatedCourse = await conn.collection('NonRelatedCourse').findOne({courseId});
    if (existingNonRelatedCourse != null) {
        throw new Error('Course already exists!');
    }
    conn.collection('NonRelatedCourse').insertOne({courseId, studentNumber, courseCode, courseSection, startDate, endDate, grade, type});
}
//NonRelatedCourse("909", "123456", "MUS", "MU1", "07-01-2019","30-04-2019", "A", "Lower Level Liberal");

async function getNonRelatedCourse(studentNumber) {
    var conn = await connect();
    var course = await conn.collection('NonRelatedCourse').find({studentNumber:studentNumber}).toArray();
    console.log(course);
}
//getNonRelatedCourse("123456");




//---------------------------------
// CourseRequirement Table Queries
//---------------------------------
async function CourseRequirement(courseId, preReq, antiReq, coReq)   {
    var conn = await connect();

    var existingCourseRequirement = await conn.collection('CourseRequirement').findOne({courseId});
    if (existingCourseRequirement != null) {
        throw new Error('Course already exists!');
    }
    conn.collection('CourseRequirement').insertOne({courseId, preReq, antiReq, coReq});
}
//CourseRequirement("101", "none", "none", "none");
//CourseRequirement("102", "none", "none", "none");




//---------------------------------
// CourseCalendar Table Queries 
//---------------------------------
async function CourseCalendar(courseId, studentNumber, courseStart, courseEnd, semesterTerm, courseCredits, Professor, deliveryMode)   {
    var conn = await connect();

    var existingCourseCalendar = await conn.collection('CourseCalendar').findOne({courseId});
    if (existingCourseCalendar != null) {
        throw new Error('Course already exists!');
    }
    conn.collection('CourseCalendar').insertOne({courseId, studentNumber, courseStart, courseEnd, semesterTerm, courseCredits, Professor, deliveryMode});
}
//CourseCalendar("101", "123456","14-01-2022", "20-05-2022", "Winter2022", "1","John Doe", "Lecture in class + Lab");
//CourseCalendar("103a", "123456","14-01-2022", "20-05-2022", "Winter2022", "1","Gorge Kram", "Lecture in class + Lab");




//---------------------------------
// Transfer Credits Table Queries
//---------------------------------
async function addTransferCredits(studentNumber, courseId, university, programArea, enrolledDate, completedDate, semesterTerm, gradeReceived, creditsReceived, courseStatus) {
    var conn = await connect();

    var existingTransferCredits = await conn.collection('TransferCredits').findOne({ studentNumber:studentNumber, courseId:courseId});
    if (existingTransferCredits != null) {
        throw new Error('Transfer Credits for this course already exists!');
    }

    conn.collection('TransferCredits').insertOne({studentNumber, courseId, university, programArea, enrolledDate, completedDate, semesterTerm, gradeReceived, creditsReceived, courseStatus});
}
//addTransferCredits("123456", "101", "XXX", "Computer Science", "07-01-2018", "20-05-2018","Winter2018", "A","1","Pass" );


async function getTransferCredits(studentNumber) {
    var conn = await connect();
    var TransferCredits = await conn.collection('TransferCredits').findOne({studentNumber:studentNumber});
    console.log(TransferCredits);
}
//getTransferCredits("123456");




//---------------------------------
// Student Table Queries
//---------------------------------
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
    var course = await conn.collection('Student').findOne({ studentNumber });
    return [firstName, lastName, phoneNumber, emailAddress,studentNumber, program, enrolledDate, gradDate];
}




//---------------------------------
// CourseManager Table Queries
//---------------------------------
async function createCourseManager(firstName, lastName, dateOfBirth, gender, phoneNumber, emailAddress, userName, password, empId, position, dept, joinDate) {
    var conn = await connect();

    var existingCourseManager = await conn.collection('courseManager').findOne({ empId });
    if (existingCourseManager != null) {
        throw new Error('CouseManager already exists!');
    }

    conn.collection('courseManager').insertOne({ firstName, lastName, dateOfBirth, gender, phoneNumber, emailAddress, userName, password,empId, position, dept, joinDate });
}
//createCourseManager("John","Doe","09-09-71","Male","1234567890","john.doe@gmail.com","johndoe","","1","HOD","CS","01-01-2010");
//createCourseManager("John","Dq","10-09-91","Male","1234566789","john.dq@gmail.com","johndq","","2","Prof","CS","01-01-2020");

async function getCourseManager(empId) {
    var conn = await connect();
    var courseManager = await conn.collection('courseManager').findOne({empId:empId});
    console.log(courseManager);
    //console.log(courseManager);
    //return(empId);
}

async function test(){
    console.log(await getCourseManager("1"));
}

//getCourseManager("2");
//test();




module.exports = {
    createCourseManager, 
    createStudent, 
    createFulfilledCourse, 
    getCourseManager, 
    getStudent, 
    getFulfilledCourses,
    createSavedCourse
}





// Old queries ------------------------

// async function login(courseTitle, description, date) {
//     var conn = await connect();
//     var course = await conn.collection('courses').findOne({ courseTitle });

//     if (course == null) {
//         throw new Error('User does not exist!');
//     }

//     if (course.date != date) {
//         throw new Error('Wrong date!');
//     }
// }

// async function addNewAntiReq(courseTitle, antiReq) {
//     var conn = await connect();

//     await conn.collection('courses').updateOne(
//         { courseTitle },
//         {
//             $push: {
//                 antiReq: antiReq,
//             },
//         },
//     );
// }

// async function getCourseDetails(courseTitle) {
//     var conn = await connect();
//     var course = await conn.collection('courses').findOne({ courseTitle });

//     return [course.courseTitle, course.description, course.date, course.antiReq];

// }