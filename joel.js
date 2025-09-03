const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files
app.use("/css", express.static(path.join(__dirname, "css")));
app.use("/js", express.static(path.join(__dirname, "js")));
app.use("/images", express.static(path.join(__dirname, "images")));

// Routes
app.get("/", (req, res) => res.sendFile(path.join(__dirname, "src/main.html")));
app.get("/about", (req, res) => res.sendFile(path.join(__dirname, "src/about.html")));
app.get("/news", (req, res) => res.sendFile(path.join(__dirname, "src/news.html")));
app.get("/students", (req, res) => res.sendFile(path.join(__dirname, "src/students.html")));
app.get("/teachers", (req, res) => res.sendFile(path.join(__dirname, "src/teachers.html")));
app.get("/gallery", (req, res) => res.sendFile(path.join(__dirname, "src/gallery.html")));
app.get("/contact", (req, res) => res.sendFile(path.join(__dirname, "src/contact.html")));

// Start server
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
