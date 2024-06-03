const mysql = require("mysql2");
const http = require("http");
const url = require("url");
const querystring = require("querystring");

const port = 3000;

//Database config
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "naresh",
  database: "crud",
});

// Database connection
db.connect((err) => {
  if (err) {
    console.error("Error connecting to the database:", err);
    return;
  }
  console.log("Connected to the MySQL database.");
});

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const { pathname } = parsedUrl;
  const method = req.method;

  if (pathname === "/" && method === "GET") {
    const query = "SELECT * FROM courses";
    db.query(query, (err, results) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("Error fetching courses");
        return;
      }
      res.writeHead(200, { "Content-Type": "text/html" });
      let coursesHtml = "<h1>Courses</h1><ul>";
      results.forEach((course) => {
        coursesHtml += `<li>${course.title} -<a href="/update-course/${course.id}">Update</a> - <a href="/delete-course?id=${course.id}" onclick="return confirm('Are you sure you want to delete this course?');">Delete</a></li>`;
      });
      coursesHtml += "</ul>";
      coursesHtml += '<a href="/create-course">Create a New Course</a>';
      res.end(coursesHtml);
    });
  }
  //Create Courses # GET   (CREATE-FORM)
  else if (pathname === "/create-course" && method === "GET") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(`<!DOCTYPE html>
            <html>
            <head>
            <title>Create Course</title>
            </head>
                <body>
                    <h1>Create a New Course</h1>
                        <form action="/create-course" method="POST">
                        <label for="title">Title:</label>
                        <input type="text" id="title" name="title" required><br><br> 
                        <label for="description">Description:</label>
                        <textarea id="description" name="description"></textarea><br><br>
                        <label for="duration">Duration (hours):</label>
                        <input type="number" id="duration" name="duration" required><br><br> 
                        <button type="submit">Create Course</button>
                    </form>
                </body>
            </html>
            <br/>
            <a href="/">Go To Home</a>
            `);
  }
  //Create Course  # POST
  else if (pathname === "/create-course" && method === "POST") {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString();
    });
    req.on("end", () => {
      const { title, description, duration } = querystring.parse(body);
      const query =
        "INSERT INTO courses (title, description, duration) VALUES (?, ?, ?)";
      db.query(query, [title, description, duration], (err, result) => {
        if (err) {
          res.writeHead(500, { "Content-Type": "text/plain" });
          res.end("Error creating course");
          return;
        }
        res.writeHead(302, { Location: "/" });
        res.end();
      });
    });
  }
  //Update course   # GET   (Update-Form)
  else if (pathname.startsWith("/update-course/") && method === "GET") {
    const courseId = pathname.split("/")[2];
    const query = "SELECT * FROM courses WHERE id = ?";
    db.query(query, [courseId], (err, results) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("Error fetching course details");
        return;
      }
      if (results.length === 0) {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("Course not found");
        return;
      }
      const course = results[0];
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(`<!DOCTYPE html>
<html>
<head>
<title>Update Course</title>
</head>
<body>
<h1>Update Course</h1>
<form action="/update-course" method="POST">
    <input type="hidden" name="id" value="${course.id}">
    <label for="title">Title:</label>
    <input type="text" id="title" name="title" value="${course.title}" required><br><br>
    
    <label for="description">Description:</label>
    <textarea id="description" name="description">${course.description}</textarea><br><br>
    
    <label for="duration">Duration (hours):</label>
    <input type="number" id="duration" name="duration" value="${course.duration}" required><br><br>
    
    <button type="submit">Update Course</button>
    <br><br/>
    <a href="/">Go To Home</a>
</form>
</body>
</html>`);
    });
  }
  //Update-course  #POST
  else if (pathname === "/update-course" && method === "POST") {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString();
    });
    req.on("end", () => {
      const { id, title, description, duration } = querystring.parse(body);
      const query =
        "UPDATE courses SET title = ?, description = ?, duration = ? WHERE id = ?";
      db.query(query, [title, description, duration, id], (err, result) => {
        if (err) {
          res.writeHead(500, { "Content-Type": "text/plain" });
          res.end("Error updating course");
          return;
        }
        res.writeHead(302, { Location: "/" });
        res.end();
      });
    });
  }
  //Delete course  #GET
  else if (pathname === "/delete-course" && method === "GET") {
    const courseId = parsedUrl.query.id;
    const query = "DELETE FROM courses WHERE id = ?";
    db.query(query, [courseId], (err, result) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("Error deleting course");
        return;
      }
      res.writeHead(302, { Location: "/" });
      res.end();
    });
  }
  //handling unknown route
  else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Not Found");
  }
});

server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
