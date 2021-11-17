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
}

// createCourse(
//     'CPS700', 
//     'This course will explore topics in web development.',
//     'Winter 2022',
//     'Professor H. Smith',
//     'CPS600',
//     'none'
//     )
