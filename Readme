MongoDB Script: University Management System with Embedded Documents and Aggregation Queries
Overview
This MongoDB script defines a university management system to manage students, instructors, courses, departments, classrooms, and related data. It leverages MongoDB's flexible schema, using embedded documents and arrays to store related data within collections. The script also includes advanced aggregation queries to retrieve complex data from multiple collections.

Script Structure
The script is structured into several parts:

1. Drop Existing Collections
To ensure a clean database state, the script starts by dropping the following collections:

Department
Person
Course
Classroom
2. Insert Data into the Department Collection
Inserts predefined departments with unique IDs:

Computer Science
Mathematics
Physics
3. Insert Data into the Person Collection
The Person collection stores both students and instructors, with embedded documents for enrollments, grades, and attendance. Each person object includes:

Personal information (name, email, birth date)
Role (student or instructor)
Department affiliation
Grades (for students)
Enrollments (course IDs and dates)
Attendance records (timetable ID, status, and date)
4. Insert Data into the Course Collection
The Course collection stores information about each course, including an embedded timetable array containing:

Timetable ID
Instructor ID
Classroom details (ID, name, capacity)
Class date and time (start and end)
5. Insert Data into the Classroom Collection
Stores details for each classroom, including:

Classroom ID
Classroom name
Capacity
Query Implementation
The script includes five advanced MongoDB aggregation queries to demonstrate retrieving meaningful information using MongoDB’s powerful aggregation framework.

Queries
Query 1: Retrieve Enrollments and Attendance for Students and Instructors
Objective: Fetch students and instructors enrolled in the "Data Structures" course, including course and department details, class date, enrollment date, and attendance status.
Steps:
Match enrollments.course_id for "Data Structures."
Use $lookup to join the Course and Department collections.
Unwind embedded fields to access nested data such as timetable and department.
Group the results by person, removing duplicates.
Project the necessary fields such as name, role, course name, and attendance status.
Query 2: Display Student Enrollments and Instructor Assignments
Objective: Retrieve all students and instructors with their corresponding courses, separating them by role.
Steps:
Use $facet to handle both student and instructor enrollments in separate stages.
For each facet, unwind the enrollments and use $lookup to join with the Course collection.
Combine the results using $concatArrays and unwind the final output for individual records.
Project the final output fields and sort the results alphabetically by first and last names.
Query 3: Calculate Average Grades for Each Student
Objective: Retrieve student grades for all courses and calculate the average grade across all enrolled courses.
Steps:
Match students (role = 'student') and unwind their grades array.
Use $lookup to join with the Course collection to get course details.
Group by student, aggregating grades and calculating the total grade points and average grade.
Project the average grade alongside each course’s grade, and sort the output by student names and course names.
Query 4: Analyze Enrollment and Attendance Timelines
Objective: Calculate the duration between enrollment and first attendance, and retrieve class start and end times.
Steps:
Match students and instructors, then unwind enrollments and attendance.
Use $lookup to join the Course collection to get timetable data.
Group by person and course to calculate class timings and attendance.
Add fields to compute the class duration and time differences between enrollment and first attendance in days, weeks, and months.
Query 5: Rank Students by Course Grade and Calculate Average Grade per Course
Objective: Rank students within each course by their grades and calculate the average grade per course.
Steps:
Unwind grades and join with the Course and Department collections.
Group by department and course to calculate average grades and count the number of students per course.
Use $facet to calculate student rank within each course and return the ranked list.
Project the final output with the student's rank, department, course, and grade.
How to Use
Environment Setup: Ensure that MongoDB is installed and running. Import the script into the MongoDB shell or run it from a script file.
Execution: The script will:
Drop existing collections.
Insert predefined data into the collections.
Run the aggregation queries to retrieve specific data as per the requirements.
Query Results: After running the queries, examine the output to see the results for each query in the context of university management data (enrollments, attendance, grades, etc.).
Notes
The script is designed for MongoDB and uses embedded documents for enrollments, attendance, and timetables.
Aggregation queries make use of MongoDB’s flexible schema to perform complex operations like joining collections, unwinding arrays, and computing aggregate values.
The data and queries are designed to reflect a realistic university scenario, with students enrolled in courses, grades recorded, attendance tracked, and instructors assigned to courses.
