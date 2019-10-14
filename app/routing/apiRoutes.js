var friends = require("../data/friends.js");

//Adding method to easily find lowest value of an array.  Adopted from https://johnresig.com/blog/fast-javascript-maxmin/
Array.min = function(array) {
    return Math.min.apply(Math, array);
}

module.exports = function(app) {

    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function(req, res) {
        var newFriend = req.body;
        for (x in newFriend.scores) {
            newFriend.scores[x] = parseInt(newFriend.scores[x]);
        }
        const compareFriend = [];
        let sum = 0;
        for (x in friends) {
            // console.log(newFriend.scores + "\n" + friends[x].scores)
            for (y in friends[x].scores) {
                sum += Math.abs(newFriend.scores[y] - friends[x].scores[y]);
                // console.log((Math.abs(newFriend.scores[y] - friends[x].scores[y])) + "\nsum: " + sum);
            }
            compareFriend.push(sum)
            sum = 0;
        }
        // console.log(compareFriend);
        let match = compareFriend.indexOf(Array.min(compareFriend));
        console.log(friends[match].name + " | " + friends[match].photo)
        res.json({
            name: friends[match].name,
            photo: friends[match].photo
        });
        friends.push({
            name: newFriend.name,
            photo: newFriend.photo,
            scores: newFriend.scores
        })
    });
}