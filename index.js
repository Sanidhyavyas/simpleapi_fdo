const express = require("express");

const app = express();
app.use(express.json());

let users = [
    { id: 1, name: "John" },
    { id: 2, name: "Alice" }
];

// GET endpoint
app.get("/users", (req, res) => {
    res.json(users);
});

// GET by ID
app.get("/users/:id", (req, res) => {
    const user = users.find(u => u.id == req.params.id);
    res.json(user);
});

// POST endpoint
app.post("/users", (req, res) => {
    const newUser = {
        id: users.length + 1,
        name: req.body.name
    };

    users.push(newUser);
    res.status(201).json(newUser);
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});