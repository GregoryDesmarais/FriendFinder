var friends = require("../data/friends.js");

module.exports = function(app) {

    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function(req, res) {
        var newFriend = req.body;
        for (x in newFriend.scores) {
            newFriend.scores[x] = parseInt(newFriend.scores[x]);
        }
        friends.push({
            name: newFriend.name,
            photo: newFriend.photo,
            scores: newFriend.scores
        })
        console.log(newFriend);
        res.json(newFriend);
    });
}