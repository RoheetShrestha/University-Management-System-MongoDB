// Step 1: Drop existing collections to ensure a clean state
db.Department.drop();
db.Person.drop();
db.Course.drop();
db.Classroom.drop();

// Step 2: Insert data into Department Collection
db.Department.insertMany([
    { department_id: 1, department_name: 'Computer Science', created_at: new Date() },
    { department_id: 2, department_name: 'Mathematics', created_at: new Date() },
    { department_id: 3, department_name: 'Physics', created_at: new Date() }
]);

// Step 3: Insert data into Person Collection with Embedded Enrollments and Attendance
const enrollmentDate = new Date();
enrollmentDate.setDate(enrollmentDate.getDate() - 45); // Subtract 45 days

db.Person.insertMany([
    {
        person_id: 1,
        first_name: 'Aayush',
        last_name: 'Shrestha',
        email: 'aayush.shrestha@example.com',
        date_of_birth: new Date('1995-03-15'),
        role: 'student',
        department_id: 1,
        grades: [
            { course_id: 1, grade: 'A' }, 
            { course_id: 2, grade: 'B' }
        ],
        enrollments: [
            { course_id: 1, enrollment_date: new Date(enrollmentDate) },
            { course_id: 2, enrollment_date: new Date(enrollmentDate) }
        ],
        attendance: [
            { timetable_id: 1, status: 'Present', attendance_date: new Date() },
            { timetable_id: 2, status: 'Absent', attendance_date: new Date() }
        ]
    },
    {
        person_id: 2,
        first_name: 'Anisha',
        last_name: 'Thapa',
        email: 'anisha.thapa@example.com',
        date_of_birth: new Date('1998-04-10'),
        role: 'student',
        department_id: 2,
        grades: [
            { course_id: 2, grade: 'A' }, 
            { course_id: 3, grade: 'B' }
        ],
        enrollments: [
            { course_id: 2, enrollment_date: new Date(enrollmentDate) },
            { course_id: 3, enrollment_date: new Date(enrollmentDate) }
        ],
        attendance: [
            { timetable_id: 2, status: 'Present', attendance_date: new Date() },
            { timetable_id: 3, status: 'Present', attendance_date: new Date() }
        ]
    },
    {
        person_id: 3,
        first_name: 'Rohit',
        last_name: 'Subedi',
        email: 'rohit.subedi@example.com',
        date_of_birth: new Date('1993-06-22'),
        role: 'student',
        department_id: 1,
        grades: [
            { course_id: 1, grade: 'B' }, 
            { course_id: 2, grade: 'B' }
        ],
        enrollments: [
            { course_id: 1, enrollment_date: new Date(enrollmentDate) },
            { course_id: 2, enrollment_date: new Date(enrollmentDate) }
        ],
        attendance: [
            { timetable_id: 1, status: 'Present', attendance_date: new Date() },
            { timetable_id: 2, status: 'Absent', attendance_date: new Date() }
        ]
    },
    {
        person_id: 4,
        first_name: 'Rachana',
        last_name: 'Adhikari',
        email: 'rachana.adhikari@example.com',
        date_of_birth: new Date('1999-11-12'),
        role: 'student',
        department_id: 3,
        grades: [
            { course_id: 3, grade: 'A' }
        ],
        enrollments: [
            { course_id: 3, enrollment_date: new Date(enrollmentDate) }
        ],
        attendance: [
            { timetable_id: 3, status: 'Present', attendance_date: new Date() }
        ]
    },
    {
        person_id: 5,
        first_name: 'Manoj',
        last_name: 'Sharma',
        email: 'manoj.sharma@example.com',
        date_of_birth: new Date('1987-05-25'),
        role: 'instructor',
        department_id: 1,
        salary: 85000,
        enrollments: [
            { course_id: 1, enrollment_date: new Date(enrollmentDate) }
        ],
        attendance: [
            { timetable_id: 1, status: 'Present', attendance_date: new Date() }
        ]
    },
    {
        person_id: 6,
        first_name: 'Sunita',
        last_name: 'Karki',
        email: 'sunita.karki@example.com',
        date_of_birth: new Date('1991-09-17'),
        role: 'instructor',
        department_id: 2,
        salary: 72000,
        enrollments: [
            { course_id: 2, enrollment_date: new Date(enrollmentDate) }
        ],
        attendance: [
            { timetable_id: 2, status: 'Present', attendance_date: new Date() }
        ]
    },
    {
        person_id: 7,
        first_name: 'Manju',
        last_name: 'Sharma',
        email: 'manju.sharma@example.com',
        date_of_birth: new Date('1988-05-25'),
        role: 'instructor',
        department_id: 3,
        salary: 62000,
        enrollments: [
            { course_id: 3, enrollment_date: new Date(enrollmentDate) }
        ],
        attendance: [
            { timetable_id: 3, status: 'Present', attendance_date: new Date() }
        ]
    }
]);
// Result
db.Person.find().pretty();

// Step 4: Insert data into Course Collection with Embedded Timetable
db.Course.insertMany([
    {
        course_id: 1,
        course_name: 'Data Structures',
        department_id: 1,
        timetable: [
            {
                timetable_id: 1,
                instructor_id: 5,
                classroom: { classroom_id: 1, name: 'Room 101', capacity: 30 },
                class_date: new Date('2024-10-15'),
                start_time: '09:00:00',
                end_time: '11:30:00'
            }
        ]
    },
    {
        course_id: 2,
        course_name: 'Calculus',
        department_id: 2,
        timetable: [
            {
                timetable_id: 2,
                instructor_id: 6,
                classroom: { classroom_id: 2, name: 'Room 102', capacity: 25 },
                class_date: new Date('2024-10-16'),
                start_time: '10:00:00',
                end_time: '12:00:00'
            }
        ]
    },
    {
        course_id: 3,
        course_name: 'Quantum Mechanics',
        department_id: 3,
        timetable: [
            {
                timetable_id: 3,
                instructor_id: 7,
                classroom: { classroom_id: 3, name: 'Room 103', capacity: 20 },
                class_date: new Date('2024-10-18'),
                start_time: '14:00:00',
                end_time: '16:20:00'
            }
        ]
    }
]);
// Result
db.Course.find().pretty();

// Step 5: Insert data into Classroom Collection
db.Classroom.insertMany([
    { classroom_id: 1, classroom_name: 'Room 101', capacity: 30 },
    { classroom_id: 2, classroom_name: 'Room 102', capacity: 25 },
    { classroom_id: 3, classroom_name: 'Room 103', capacity: 20 }
]);
// Result
db.Classroom.find().pretty();


//Query 1
db.Person.aggregate([
    // Step 1: Match students and instructors enrolled in the "Data Structures" course
    {
        $match: {
            'enrollments.course_id': 1 // Assuming course_id 1 is for "Data Structures"
        }
    },
    // Step 2: Perform a lookup to get course details including timetable information
    {
        $lookup: {
            from: 'Course',
            localField: 'enrollments.course_id',
            foreignField: 'course_id',
            as: 'course_details'
        }
    },
    // Step 3: Perform a lookup to get department details
    {
        $lookup: {
            from: 'Department',
            localField: 'department_id',
            foreignField: 'department_id',
            as: 'department_details'
        }
    },
    // Step 4: Unwind the course_details array to access the timetable information
    {
        $unwind: "$course_details"
    },
    {
        $unwind: "$course_details.timetable"
    },
    // Step 5: Unwind the department_details array to bring the department information out of the array
    {
        $unwind: "$department_details"
    },
    // Step 6: Group by person to remove duplicates
    {
        $group: {
            _id: "$person_id",
            first_name: { $first: "$first_name" },
            last_name: { $first: "$last_name" },
            role: { $first: "$role" },
            department: { $first: "$department_details.department_name" },
            enrollment_date: { $first: { $arrayElemAt: ["$enrollments.enrollment_date", 0] } },
            course_name: { $first: "$course_details.course_name" },
            class_date: { $first: "$course_details.timetable.class_date" }, // Extract class date directly
            attendance_status: { $first: { $arrayElemAt: ["$attendance.status", 0] } }
        }
    },
    // Step 7: Project the required fields for direct document output
    {
        $project: {
            _id: 0,
            first_name: 1,
            last_name: 1,
            role: 1,
            department: 1,
            course_name: 1,
            class_date: 1,
            enrollment_date: 1,
            attendance_status: 1
        }
    }
])



//Query 2
db.Person.aggregate([
    {
        // Step 1: Separate the enrollments by role (students and instructors)
        $facet: {
            studentEnrollments: [
                { 
                    $match: { role: "student" } // Filter for students
                },
                { 
                    $unwind: "$enrollments" // Unwind the enrollments embedded field 
                },
                {
                    $lookup: {
                        from: "Course",
                        localField: "enrollments.course_id",
                        foreignField: "course_id",
                        as: "courseData"
                    }
                },
                { $unwind: "$courseData" }, // Unwind course data
                {
                    $project: {
                        _id: 0,
                        first_name: 1,
                        last_name: 1,
                        course_name: "$courseData.course_name",
                        role: { $literal: "Student" }
                    }
                }
            ],
            instructorAssignments: [
                {
                    $match: { role: "instructor" } // Filter for instructors
                },
                { 
                    $unwind: "$enrollments" // Unwind the enrollments embedded field 
                },
                {
                    $lookup: {
                        from: "Course",
                        localField: "enrollments.course_id",
                        foreignField: "course_id",
                        as: "courseData"
                    }
                },
                { $unwind: "$courseData" }, // Unwind course data
                {
                    $project: {
                        _id: 0,
                        first_name: 1,
                        last_name: 1,
                        course_name: "$courseData.course_name",
                        role: { $literal: "Instructor" }
                    }
                }
            ]
        }
    },
    {
        // Step 2: Combine the student and instructor results into one array
        $project: {
            combinedResults: {
                $concatArrays: ["$studentEnrollments", "$instructorAssignments"]
            }
        }
    },
    { 
        // Step 3: Unwind the combined array for individual records
        $unwind: "$combinedResults" 
    },
    {
        // Step 4: Project the final output fields
        $project: {
            _id: 0,
            first_name: "$combinedResults.first_name",
            last_name: "$combinedResults.last_name",
            course_name: "$combinedResults.course_name",
            role: "$combinedResults.role"
        }
    },
    {
        // Step 5: Sort the results by first name and last name
        $sort: {
            first_name: 1,
            last_name: 1
        }
    }
]);

//Query 3
db.Person.aggregate([
    {
        // Step 1: Filter for students (role = 'student')
        $match: { role: "student" }
    },
    {
        // Step 2: Unwind the 'grades' array to get each course's grade separately
        $unwind: "$grades"
    },
    {
        // Step 3: Lookup to join with Course collection to get course details
        $lookup: {
            from: "Course",
            localField: "grades.course_id",
            foreignField: "course_id",
            as: "courseDetails"
        }
    },
    { 
        // Unwind course details to get single course object
        $unwind: "$courseDetails"
    },
    {
        // Step 4: Project required fields including first name, last name, course name, and grade
        $project: {
            _id: 0,
            person_id: 1,
            first_name: 1,
            last_name: 1,
            course_name: "$courseDetails.course_name",
            grade: "$grades.grade",
            numeric_grade: {
                $switch: {
                    branches: [
                        { case: { $eq: ["$grades.grade", "A"] }, then: 4 },
                        { case: { $eq: ["$grades.grade", "B"] }, then: 3 },
                        { case: { $eq: ["$grades.grade", "C"] }, then: 2 },
                        { case: { $eq: ["$grades.grade", "D"] }, then: 1 }
                    ],
                    default: 0
                }
            }
        }
    },
    {
        // Step 5: Group by person to calculate the total average across all courses
        $group: {
            _id: {
                person_id: "$person_id",
                first_name: "$first_name",
                last_name: "$last_name"
            },
            courses: {
                $push: {
                    course_name: "$course_name",
                    grade: "$grade"
                }
            },
            total_courses: { $sum: 1 }, // Count total courses the student is in
            total_grade_points: { $sum: "$numeric_grade" } // Sum up the grade points
        }
    },
    {
        // Step 6: Calculate the average grade across all courses
        $addFields: {
            average_grade: {
                $cond: {
                    if: { $gt: ["$total_courses", 0] },
                    then: { $divide: ["$total_grade_points", "$total_courses"] },
                    else: null
                }
            }
        }
    },
    {
        // Step 7: Unwind the courses array to display each course and grade
        $unwind: "$courses"
    },
    {
        // Step 8: Sort by last name, first name, and course name
        $sort: {
            "_id.last_name": 1,
            "_id.first_name": 1,
            "courses.course_name": 1
        }
    },
    {
        // Step 9: Project final output fields
        $project: {
            _id: 0,
            first_name: "$_id.first_name",
            last_name: "$_id.last_name",
            course_name: "$courses.course_name",
            grade: "$courses.grade",
            average_grade: 1
        }
    }
]);

//Query 4
db.Person.aggregate([
    {
        // Step 1: Filter for students or instructors
        $match: { role: { $in: ["student", "instructor"] } }
    },
    {
        // Step 2: Unwind the enrollments array to get each enrollment separately
        $unwind: "$enrollments"
    },
    {
        // Step 3: Unwind the attendance array to get each attendance record separately
        $unwind: {
            path: "$attendance",
            preserveNullAndEmptyArrays: true // Keep records with no attendance
        }
    },
    {
        // Step 4: Lookup to join with Course to get timetable and classroom data
        $lookup: {
            from: "Course",
            localField: "enrollments.course_id",
            foreignField: "course_id",
            as: "courseData"
        }
    },
    {
        $unwind: "$courseData"
    },
    {
        $unwind: "$courseData.timetable"
    },
    {
        // Step 5: Group by person_id and course_id to remove duplication
        $group: {
            _id: {
                person_id: "$person_id",
                course_id: "$enrollments.course_id"
            },
            first_name: { $first: "$first_name" },
            last_name: { $first: "$last_name" },
            enrollment_timestamp: { $first: "$enrollments.enrollment_date" }, // Enrollment date
            first_attendance_timestamp: { $first: "$courseData.timetable.class_date" }, // First class date
            class_start_time: { $first: "$courseData.timetable.start_time" }, // Class start time
            class_end_time: { $first: "$courseData.timetable.end_time" } // Class end time
        }
    },
    {
        // Step 6: Add calculated fields for duration and time differences
        $addFields: {
            class_duration_hours: {
                $subtract: [
                    { $toInt: { $substr: ["$class_end_time", 0, 2] } },
                    { $toInt: { $substr: ["$class_start_time", 0, 2] } }
                ]
            },
            class_duration_minutes: {
                $subtract: [
                    { $toInt: { $substr: ["$class_end_time", 3, 2] } },
                    { $toInt: { $substr: ["$class_start_time", 3, 2] } }
                ]
            },
            days_until_first_attendance: {
                $floor: {
                    $divide: [
                        { $subtract: ["$first_attendance_timestamp", "$enrollment_timestamp"] },
                        1000 * 60 * 60 * 24 // milliseconds to days
                    ]
                }
            },
            weeks_until_first_attendance: {
                $floor: {
                    $divide: [
                        { $subtract: ["$first_attendance_timestamp", "$enrollment_timestamp"] },
                        1000 * 60 * 60 * 24 * 7 // milliseconds to weeks
                    ]
                }
            },
            months_until_first_attendance: {
                $divide: [
                    { $subtract: [{ $month: "$first_attendance_timestamp" }, { $month: "$enrollment_timestamp" }] },
                    1
                ]
            }
        }
    },
    {
        // Step 7: Project the final fields, including the enrollment timestamp
        $project: {
            _id: 0,
            first_name: 1,
            last_name: 1,
            enrollment_timestamp: {
                $dateToString: { format: "%Y-%m-%d %H:%M:%S", date: "$enrollment_timestamp" }
            },
            first_attendance_timestamp: {
                $dateToString: { format: "%Y-%m-%d %H:%M:%S", date: "$first_attendance_timestamp" }
            },
            class_start_time: 1, // Keep as string
            class_end_time: 1, // Keep as string
            class_duration_hours: 1,
            class_duration_minutes: 1,
            days_until_first_attendance: 1,
            weeks_until_first_attendance: 1,
            months_until_first_attendance: 1
        }
    },
    {
        // Step 8: Sort by days until first attendance
        $sort: { days_until_first_attendance: 1 }
    }
]);

//Query 5
db.Person.aggregate([
    // Step 1: Unwind the grades array to get individual grades per course
    { $unwind: "$grades" },

    // Step 2: Lookup Course data based on course_id in the grades
    {
        $lookup: {
            from: "Course",
            localField: "grades.course_id",
            foreignField: "course_id",
            as: "courseData"
        }
    },
    { $unwind: "$courseData" },  // Unwind Course data

    // Step 3: Lookup Department based on the department_id in Course
    {
        $lookup: {
            from: "Department",
            localField: "courseData.department_id",
            foreignField: "department_id",
            as: "departmentData"
        }
    },
    { $unwind: "$departmentData" },  // Unwind Department data

    // Step 4: Convert grade into a numeric value
    {
        $addFields: {
            numeric_grade: {
                $switch: {
                    branches: [
                        { case: { $eq: ["$grades.grade", "A"] }, then: 4 },
                        { case: { $eq: ["$grades.grade", "B"] }, then: 3 },
                        { case: { $eq: ["$grades.grade", "C"] }, then: 2 },
                        { case: { $eq: ["$grades.grade", "D"] }, then: 1 }
                    ],
                    default: 0
                }
            }
        }
    },

    // Step 5: Group by department and course to calculate average grade and count students
    {
        $group: {
            _id: {
                department: "$departmentData.department_name",
                course: "$courseData.course_name",
                person_id: "$person_id"
            },
            first_name: { $first: "$first_name" },
            last_name: { $first: "$last_name" },
            grade: { $first: "$grades.grade" },
            numeric_grade: { $first: "$numeric_grade" }
        }
    },

    // Step 6: Use facet to calculate rank and average within partitions
    {
        $facet: {
            rankedStudents: [
                {
                    $group: {
                        _id: { department: "$_id.department", course: "$_id.course" },
                        students: {
                            $push: {
                                first_name: "$first_name",
                                last_name: "$last_name",
                                grade: "$grade",
                                numeric_grade: "$numeric_grade"
                            }
                        },
                        avg_grade_per_course: { $avg: "$numeric_grade" },
                        total_students: { $sum: 1 }
                    }
                }
            ]
        }
    },

    // Step 7: Unwind students array to project rank
    { $unwind: "$rankedStudents" },
    { $unwind: "$rankedStudents.students" },

    // Step 8: Sort and calculate rank for students manually
    {
        $sort: {
            "rankedStudents._id.department": 1,
            "rankedStudents._id.course": 1,
            "rankedStudents.students.numeric_grade": -1
        }
    },
    {
        $group: {
            _id: {
                department: "$rankedStudents._id.department",
                course: "$rankedStudents._id.course"
            },
            students: { $push: "$rankedStudents.students" },
            avg_grade_per_course: { $first: "$rankedStudents.avg_grade_per_course" },
            total_students: { $first: "$rankedStudents.total_students" }
        }
    },
    { $unwind: "$students" },

    // Step 9: Use $group to calculate and apply rank sequentially
    {
        $group: {
            _id: {
                department: "$_id.department",
                course: "$_id.course"
            },
            rankedStudents: {
                $push: {
                    first_name: "$students.first_name",
                    last_name: "$students.last_name",
                    grade: "$students.grade",
                    numeric_grade: "$students.numeric_grade"
                }
            },
            avg_grade_per_course: { $first: "$avg_grade_per_course" },
            total_students: { $first: "$total_students" }
        }
    },
    {
        $project: {
            _id: 0,
            department: "$_id.department",
            course: "$_id.course",
            avg_grade_per_course: 1,
            total_students: 1,
            rankedStudents: {
                $map: {
                    input: { $range: [0, { $size: "$rankedStudents" }] },
                    as: "idx",
                    in: {
                        $mergeObjects: [
                            { $arrayElemAt: ["$rankedStudents", "$$idx"] },
                            { rank: { $add: ["$$idx", 1] } } // Apply rank incrementally
                        ]
                    }
                }
            }
        }
    },
    { $unwind: "$rankedStudents" },

    // Final projection
    {
        $project: {
            "First Name": "$rankedStudents.first_name",
            "Last Name": "$rankedStudents.last_name",
            "Department": "$department",
            "Course": "$course",
            "Grade": "$rankedStudents.grade",
            "Average Grade Per Course": "$avg_grade_per_course",
            "Course Rank": "$rankedStudents.rank",
            "Total Students Per Course": "$total_students"
        }
    }
]);
