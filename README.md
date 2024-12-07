
# Student Management App - Backend API

This is a simple backend application for managing users. It provides CRUD operations (Create, Read, Update, Delete) using **Node.js**, **Express**, and **MongoDB**. The application includes the following functionality:

- Retrieve all Students
- Add a new Student
- Update an existing Student
- Delete a Students



## Dependencies

**express:**
Web framework for Node.js

**cors:** Middleware for enabling Cross-Origin Resource Sharing (CORS)


**mongoose:** MongoDB object modeling for Node.js


## Endpoints

- `GET /`: Retrieve all students.
- `POST /create`: Add a new student.
- `PUT /update/:id`: Update an existing student's details.
- `DELETE /delete/:id`: Delete a student by their ID.
