var fs = require("fs");

app.get("/api/friends", function(req, res) {
    res.sendFile(path.join(__dirname, "data", "friends.js"));
});

app.post("/api/friends", function(req, res) {
    var newFriend = req.body;

    console.log(newFriend);
    fs.readFile(path.join(__dirname, "data", "friends.js"), function(data) {
        let array = data;
        console.log(array);
    });
});