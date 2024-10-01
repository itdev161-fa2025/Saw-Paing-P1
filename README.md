# Saw-Paing-P1 To Do List

Project Description
The To-Do List project is a web-based application that allows users to manage their tasks efficiently. Users can create, read, update, and delete tasks. Each task has a title and a completion status, enabling users to track their progress. The project utilizes a Node.js backend with an Express server and MongoDB for data storage, providing a RESTful API for task management.

Feature List

Task Management:

Users can create a new task with a title.
Users can view all tasks.
Users can update the completion status of a task.
Users can delete a task.

Validation:

Ensure that the title is provided when creating a task.
Validate task IDs when updating or deleting tasks.

Error Handling:

Handle errors for invalid input and server errors gracefully.

List of Technical Tasks for Each Feature

1. Task Management

Create Task:
-Implement the POST endpoint.
-Use express-validator to validate the task title.
-Save the new task to the MongoDB database.

View All Tasks:
-Implement the GET endpoint.
-Retrieve tasks from the MongoDB database.

Update Task Completion Status:
-Implement the PUT endpoint.
-Validate the task ID using express-validator.
-Toggle the completion status of the specified task and save it to the database.

Delete Task:
-Implement the DELETE endpoint.
-Validate the task ID.
-Remove the specified task from the database.

2. Validation

Implement validation for:
-Task title in the POST endpoint.
-Task ID in the PUT and DELETE endpoints.

3. Error Handling

Implement try-catch blocks in all API endpoints.

Return appropriate error messages for:
-Missing or invalid input.
-Server errors.