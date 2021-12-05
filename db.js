var { MongoClient } = require('mongodb');

//var url = 'mongodb+srv://admin:admin@cluster0.j5utg.mongodb.net/cps731project?retryWrites=true&w=majority';
var url = 'mongodb+srv://USER:PASS@cluster0.tyvwx.mongodb.net/cps731project?retryWrites=true&w=majority';

var db = null;
var client = null;
async function connect() {
    try {
        if (db == null) {
            var options = {
                useUnifiedTopology: true,
            };
    
            client = await MongoClient.connect(url, options);
            db = await client.db("cps731project");
        }
    } catch(err) {
        console.log(err)
    }

    return db;
}

// QUERIES-----------------------------------------------------------------------------------------------

//---------------------------------
// Course Table Queries
//---------------------------------
async function createCourse(courseId, courseTitle, courseCode, courseSection, courseDescription, courseCredits, durationHours, department, semester, year)    {
    var conn = await connect();

    var existingCourse = await conn.collection('Course').findOne({courseId});
    if (existingCourse != null) {
        throw new Error('Course already exists!');
    }
    conn.collection('Course').insertOne({courseId, courseTitle, courseCode, courseSection, courseDescription, courseCredits, durationHours, department, semester, year});
}
// createCourse("1000", "Computer Science I", "CPS101", "011", "This is an introduction to the basics of Computer Science", "1", "60", "Computer Science", "Fall", "2021");
// createCourse("1001", "Computer Organization I", "CPS213", "021", "This course introduces the students to the principles and fundamentals of digital system design.", "1", "60", "Computer Science", "Fall", "2021");
// createCourse("1002", "Discrete Mathematics I", "MTH110", "021", "This course covers the fundamentals of discrete mathematics with a focus on proof methods.", "1", "60", "Mathematics", "Fall", "2021");
// createCourse("1003", "Physics", "PCS110", "011", "Topics: Units and vectors. Motion - linear, projectile, circular and oscillatory motion.", "1", "60", "Physics", "Fall", "2021");
// createCourse("1004", "The Architecture of Music", "MUS106", "011", "this course will provide a range of technical tools for acquiring a thorough grasp of how music is organized and created.", "1", "60", "Music", "Fall", "2021");

// createCourse("1005", "Computer Science II", "CPS209", "011", "A continuation of CPS 109. Emphasis is placed on code structure, algorithm development, and Object Oriented design principles.", "1", "60", "Computer Science", "Winter", "2022");
// createCourse("1006", "Computer Organization II", "CPS310", "011", "A continuation of CPS 213. Memory; CPU architecture and instruction set; the instruction processing sequence.", "1", "60", "Computer Science", "Winter", "2022");
// createCourse("1007", "Social Issues, Ethics and Professionalism", "CPS412", "011", "This course will cover some of fundamental social, legal, and ethical issues inherent in the discipline of computing.", "1", "60", "Computer Science", "Winter", "2022");
// createCourse("1008", "Calculus and Computational Methods I", "MTH207", "011", "Calculus of functions of one variable and related numerical topics.", "1", "60", "Mathematics", "Winter", "2022");
// createCourse("1009", "U.S. History: 1877 to the Present", "HST210", "011", "This course surveys the period from industrialization and westward expansion in the late 19th century up to the political shifts of the present day.", "1", "60", "History", "Winter", "2022");

// createCourse("1010", "Communication in the Computer Industry", "CMN300", "011", "In this workshop course, students learn to present technical information to audiences with a range of technical knowledge.", "1", "60", "Computer Science", "Fall", "2021");
// createCourse("1011", "Data Structures", "CPS305", "011", "Introduction to data structures and algorithms.", "1", "60", "Computer Science", "Fall", "2021");
// createCourse("1012", "Introduction to UNIX, C and C++", "CPS393", "011", "The course introduces the UNIX operating system, and the C and C++ languages.", "1", "60", "Computer Science", "Fall", "2021");
// createCourse("1013", "Linear Algebra", "MTH108", "011", "Systems of linear equations, matrices determinants, vectors, geometry, linear transformations.", "1", "60", "Mathematics", "Fall", "2021");
// createCourse("1014", "Economic History", "ECN630", "011", "The central focus of this course is institutions and organization and how these impacted technological change and economic growth in different periods.", "1", "60", "Economics", "Fall", "2021");

// createCourse("1015", "Introduction to Software Engineering", "CPS406", "011", "This course introduces the study of Object-Oriented software engineering.", "1", "60", "Computer Science", "Winter", "2022");
// createCourse("1016", "Discrete Structures", "CPS420", "041", "Introduction to discrete structures and probability as they apply to design and analysis.", "1", "60", "Computer Science", "Winter", "2022");
// createCourse("1017", "Comparative Programming Languages", "CPS506", "021", "A survey of major programming paradigms, with emphasis on the functional paradigm.", "1", "60", "Computer Science", "Winter", "2022");
// createCourse("1018", "Operating Systems I", "CPS590", "031", "Introduction to O/S (system calls, interrupts, synchronous and asynchronous traps, O/S structure), using processes.", "1", "60", "Computer Science", "Winter", "2022");
// createCourse("1019", "Introduction to Business French", "FRE515", "011", "This course introduces students to business French while continuing to develop their general competence in French.", "1", "60", "French", "Winter", "2022");

// createCourse("1020", "Database Systems I", "CPS510", "011", "Advanced file management techniques involving fundamentals of database organization, design and management. ", "1", "60", "Computer Science", "Fall", "2021");
// createCourse("1021", "Computer Security", "CPS633", "021", "History and examples of computer crime. Security policies and mechanisms.", "1", "60", "Computer Science", "Fall", "2021");
// createCourse("1022", "Artificial Intelligence I", "CPS721", "011", "This course provides introduction to several important AI problems and techniques.", "1", "60", "Computer Science", "Fall", "2021");
// createCourse("1023", "Web Systems Development", "CPS530", "011", "This course presents the concepts and applications of the technologies to design and develop creative and successful web services.", "1", "60", "Computer Science", "Fall", "2021");
// createCourse("1024", "Myth and Literature", "ENG201", "011", "This course examines how plays, poems, novels, and/or other texts engage with myth.", "1", "60", "English", "Fall", "2021");

// createCourse("1025", "Algorithms", "CPS616", "011", "Complexity analysis and order notations, recurrence equations, brute force, divide-and-conquer techniques.", "1", "60", "Computer Science", "Winter", "2022");
// createCourse("1026", "Computer Networks I", "CPS706", "031", "Internet, the network edge, the network core, delay, loss and throughput, protocol layers.", "1", "60", "Computer Science", "Winter", "2022");
// createCourse("1027", "Web Applications", "CPS630", "011", "This course is a continuation of CPS 530. Students will learn advanced techniques for designing and building web applications using modern technologies.", "1", "60", "Computer Science", "Winter", "2022");
// createCourse("1028", "Computer Graphics", "CPS511", "011", "Software and hardware considerations in computer graphics.", "1", "60", "Computer Science", "Winter", "2022");
// createCourse("1029", "Creative Writing", "ENG505", "011", "This upper-level course offers students the opportunity both to study models of good writing and to develop their own creative abilities. ", "1", "60", "English", "Winter", "2022");

// createCourse("1030", "Software Verification and Validation", "CPS707", "011", "This course introduces the topics of verification and validation of computer software.", "1", "60", "Computer Science", "Fall", "2021");
// createCourse("1031", "Software Project Management", "CPS714", "011", "Introduction to issues involved in managing large, complex software projects. ", "1", "60", "Computer Science", "Fall", "2021");
// createCourse("1032", "Machine Learning", "CPS803", "011", "This course develops an aptitude for applying machine learning algorithms to different problem domains.", "1", "60", "Computer Science", "Fall", "2021");
// createCourse("1033", "Energy, Earth and Ecosystems", "GEO131", "011", "This course takes a systems-based approach to understanding the dynamics of Planet Earth and how humans interact with it.", "1", "60", "Geography", "Fall", "2021");
// createCourse("1034", "Philosophy and Literature", "PHL648", "011", "This course explores some of the rich points of intersection between philosophy and literature.", "1", "60", "Philosophy", "Fall", "2021");

// createCourse("1035", "Software Tools for Startups", "CPS847", "011", "This course will discuss core tools, frameworks, and packages used by modern startups.", "1", "60", "Computer Science", "Winter", "2022");
// createCourse("1036", "Principles of Marketing", "MKT100", "011", "This course introduces students to the fundamental building blocks of marketing.", "1", "60", "Marketing", "Winter", "2022");
// createCourse("1037", "Geometry", "MTH540", "021", "Projective plane and 3-space. Cross-ratio, perspectivity, conics and quadrics, poles and polars.", "1", "60", "Mathematics", "Winter", "2022");
// createCourse("1038", "Music and Film", "RTA180", "011", "This course explores the relationship between music and film.", "1", "60", "Media", "Winter", "2022");
// createCourse("1039", "The Geography of Toronto", "GEO793", "021", "This course provides students with an understanding of Toronto, by examining interrelated historical, social, cultural, political, and environmental issues.", "1", "60", "Geography", "Winter", "2022");

async function getAllCourses() {
    var conn = await connect();
    var course = await conn.collection('Course').find().sort({"year":-1, "semester":1, "courseId":1}).toArray();
    // console.log(course);
    return course;
}
//getAllCourses();

async function getCourseByCode(courseCode) {
    var conn = await connect();
    var course = await conn.collection('Course').find({courseCode:courseCode}).toArray();
    console.log(course);
}
//getCourseByCode('MUS106')


async function getAllCoursesKeyword(keyword) {
    var conn = await connect();
    var course = await conn.collection('Course').find( { $text: { $search: keyword } }).toArray();
    console.log(course);
}
//getAllCoursesKeyword("1001");

//---------------------------------
// FulfilledCourses Table Queries
//---------------------------------
async function createFulfilledCourse(studentNumber, courseId, programArea, enrolledDate, completedDate, semesterTerm, gradeReceived, courseStatus) {
    var conn = await connect();

    var existingCourse = await conn.collection('FulfilledCourses').findOne({ studentNumber, courseId });
    if (existingCourse != null) {
        throw new Error('Fulfilled Course already exists!');
    }

    conn.collection('FulfilledCourses').insertOne({studentNumber, courseId, programArea, enrolledDate,completedDate, semesterTerm, gradeReceived, courseStatus});
}
// createFulfilledCourse("123456", "1000", "Computer Science", "01-09-2020","01-12-2020", "Fall 2020", "B+", "Completed");
// createFulfilledCourse("123456", "1001", "Computer Science", "01-09-2020","01-12-2020", "Fall 2020", "A", "Completed");
// createFulfilledCourse("123456", "1005", "Computer Science", "14-01-2021","20-05-2021", "Winter 2021", "C-", "Completed");
// createFulfilledCourse("123456", "1006", "Computer Science", "14-01-2021","20-05-2021", "Winter 2021", "B", "Completed");
// createFulfilledCourse("123456", "1007", "Computer Science", "14-01-2021","20-05-2021", "Winter 2021", "B-", "Completed");
// createFulfilledCourse("123456", "1008", "Computer Science", "01-09-2020","01-12-2020", "Fall 2020", "B", "Completed");

//Transfer courses (completed)
// createFulfilledCourse("123456", "1003", "Computer Science", "01-09-2019", "01-12-2019", "Fall 2019", "A", "Completed" );
// createFulfilledCourse("123456", "1002", "Computer Science", "01-09-2019", "01-12-2019", "Fall 2019", "B+", "Completed" );
// createFulfilledCourse("123456", "1015", "Computer Science", "01-01-2020", "20-04-2020", "Winter 2020", "C+", "Completed" );
// createFulfilledCourse("123456", "1016", "Computer Science", "01-01-2020", "20-04-2020", "Winter 2020", "B", "Completed" );

// createFulfilledCourse("123456", "1004", "Music", "01-09-2020","01-12-2020", "Fall 2020", "C+", "Completed");
// createFulfilledCourse("123456", "1018", "Computer Science", "01-09-2020","01-12-2020", "Fall 2020", "A-", "Completed");
// createFulfilledCourse("123456", "1019", "French", "14-01-2021","20-05-2021", "Winter 2021", "A-", "Completed");
// createFulfilledCourse("123456", "1013", "Mathematics", "14-01-2021","20-05-2021", "Winter 2021", "B", "Completed");
// createFulfilledCourse("123456", "1011", "Computer Science", "01-09-2020","01-12-2020", "Fall 2020", "B+", "Completed");

async function getFulfilledCourses(studentNumber) {
    var conn = await connect();
    var course = await conn.collection('FulfilledCourses').find({ studentNumber }).toArray();
    // console.log(course);
    return(course);
}
getFulfilledCourses("123456");

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
// createSavedCourse("123456", "1020", "CPS510", "031", "10-11-20", "Winter 2022");
// createSavedCourse("123456", "1019", "FRE515", "021", "10-11-20", "Winter 2022");
// createSavedCourse("123456", "1027", "CPS630", "011", "10-11-20", "Winter 2022");
// createSavedCourse("123456", "1013", "MTH108", "011", "10-11-20", "Fall 2021");
// createSavedCourse("123456", "1029", "ENG505", "011", "10-11-20", "Fall 2021");

async function getSavedCourses(studentNumber) {
    var conn = await connect();
    var course = await conn.collection('SavedCourses').find({ studentNumber }).toArray();
    console.log(course);
}
//getSavedCourses("123456");

//---------------------------------
// NonRelatedCourse Table Queries
//---------------------------------
async function createNonRelatedCourse(courseId, studentNumber, courseCode, courseSection, startDate, endDate, grade, type)   {
    var conn = await connect();

    var existingNonRelatedCourse = await conn.collection('NonRelatedCourse').findOne({courseId});
    if (existingNonRelatedCourse != null) {
        throw new Error('Course already exists!');
    }
    conn.collection('NonRelatedCourse').insertOne({courseId, studentNumber, courseCode, courseSection, startDate, endDate, grade, type});
}
// createNonRelatedCourse("1004", "123456", "MUS106", "011", "01-09-2020","01-12-2020", "A", "Lower Level Liberal");
// createNonRelatedCourse("1009", "123456", "HST210", "011", "01-09-2020","01-12-2020", "B", "Lower Level Liberal");
// createNonRelatedCourse("1014", "123456", "ECN630", "011", "14-01-2021","20-05-2021", "B+", "Upper Level Liberal");

async function getNonRelatedCourse(studentNumber) {
    var conn = await connect();
    var course = await conn.collection('NonRelatedCourse').find({studentNumber:studentNumber}).toArray();
    console.log(course);
    //return course;
}
//getNonRelatedCourse("123456");

// const printNonCourse = async () => {
//     const a = await getNonRelatedCourse("123456");
//     console.log(a);
//   };
//   printNonCourse();
//var nonrelated = getNonRelatedCourse("123456");
//console.log(nonrelated);


//---------------------------------
// CourseRequirement Table Queries
//---------------------------------
async function createCourseRequirement(courseId, preReq, antiReq, coReq)   {
    var conn = await connect();

    var existingCourseRequirement = await conn.collection('CourseRequirement').findOne({courseId});
    if (existingCourseRequirement != null) {
        throw new Error('Course already exists!');
    }
    conn.collection('CourseRequirement').insertOne({courseId, preReq, antiReq, coReq});
}
// createCourseRequirement("1005", "CPS109", "none", "none");
// createCourseRequirement("1006", "CPS213", "none", "none");
// createCourseRequirement("1027", "CPS530", "none", "none");
// createCourseRequirement("1016", "CPS305", "MTH210", "none");
// createCourseRequirement("1025", "CPS420", "none", "none");

async function getCourseRequirement(courseId) {
    var conn = await connect();
    var course = await conn.collection('CourseRequirement').find({courseId:courseId}).toArray();
    console.log(course);
}
//getCourseRequirement("1016");

//---------------------------------
// CourseCalendar Table Queries 
//---------------------------------
async function addCourseToCalendar(courseId, studentNumber, calendarPlanName, courseStart, courseEnd, semesterTerm, courseCredits, Professor, deliveryMode)   {
    var conn = await connect();

    var existingCourse = await conn.collection('CourseCalendar').findOne({courseId, calendarPlanName});
    if (existingCourse != null) {
        throw new Error('Course already exists in this course plan!');
    }
    conn.collection('CourseCalendar').insertOne({courseId, studentNumber, calendarPlanName, courseStart, courseEnd, semesterTerm, courseCredits, Professor, deliveryMode});
}
// addCourseToCalendar("1020", "123456", "Plan 1", "14-01-2022", "20-05-2022", "Winter 2022", "1", "John Doe", "Lecture + Lab");
// addCourseToCalendar("1019", "123456", "Plan 1", "14-01-2022", "20-05-2022", "Winter 2022", "1", "Gorge Kram", "Lecture");
// addCourseToCalendar("1027", "123456", "Plan 1", "14-01-2022", "20-05-2022", "Winter 2022", "1", "Jane Smith", "Lecture + Lab");
// addCourseToCalendar("1013", "123456", "Plan 1", "01-09-2021", "01-12-2021", "Fall 2021", "1", "Susan Brown", "Lecture");
// addCourseToCalendar("1029", "123456", "Plan 1", "01-09-2021", "01-12-2021", "Fall 2021", "1", "James Miller", "Lecture + Lab");

async function getCourseCalendarCourses(studentNumber, calendarPlanName) {
    var conn = await connect();
    var course = await conn.collection('CourseCalendar').find({studentNumber:studentNumber, calendarPlanName:calendarPlanName}).toArray();
    console.log(course);
}
//getCourseCalendarCourses("123456", "Plan 1");

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
// addTransferCredits("123456", "1003", "York University", "Computer Science", "01-09-2019", "01-12-2019", "Fall 2019", "A", "1", "Completed" );
// addTransferCredits("123456", "1002", "York University", "Computer Science", "01-09-2019", "01-12-2019", "Fall 2019", "B+", "1", "Completed" );
// addTransferCredits("123456", "1015", "York University", "Computer Science", "01-01-2020", "20-04-2020", "Winter 2020", "C+", "1", "Completed" );
// addTransferCredits("123456", "1016", "York University", "Computer Science", "01-01-2020", "20-04-2020", "Winter 2020", "B", "1", "Completed" );

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
//createCourseManager("John","Doe","10-09-91","Male","1234566789","john.dq@gmail.com","johndq","","2","Prof","CS","01-01-2020");

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
    getAllCourses,
    getCourseByCode,
    getAllCoursesKeyword,
    getFulfilledCourses,
    createSavedCourse,
    getSavedCourses,
    getNonRelatedCourse,
    getCourseRequirement,
    addCourseToCalendar,
    getCourseCalendarCourses,
    getTransferCredits,    
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
