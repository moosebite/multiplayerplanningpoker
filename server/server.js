/* eslint-disable no-use-before-define */
// Variable Instantiations
const io = require("socket.io")();

const PORT = 8080;
// This Map contains objects with usernames, votes and whether or not the user is a Game Master and
// the object's key is the socket.id
// eslint-disable-next-line prefer-const
let userMap = {};
let activeStory;

// on Connection
io.sockets.on("connection", socket => {
  socket.on("addUser", newUsername => {
    userMap[socket.id] = {
      username: newUsername,
      GM: !Object.keys(userMap).length,
      vote: null
    };
    upDate();
  });

  socket.on("updateVote", vote => {
    if (userMap[socket.id]) {
      userMap[socket.id].vote = vote;
      upDate();
    }
  });

  socket.on("updateStory", story => {
    activeStory = story;
    console.log(JSON.stringify(activeStory));
  });

  socket.on("clearVotes", () => {
    io.emit("hideVotes");
    Object.keys(userMap).forEach(key => {
      userMap[key].vote = null;
    });
    upDate();
  });

  socket.on("requestUpdate", () => {
    upDate();
  });

  socket.on("changeGM", () => {
    Object.keys(userMap).forEach(key => {
      userMap[key].GM = false;
    });
    userMap[socket.id].GM = true;
    upDate();
  });

  socket.on("displayVotes", () => {
    io.emit("showVotes");
  });

  socket.on("obscureVotes", () => {
    io.emit("hideVotes");
  });

  socket.on("disconnect", () => {
    if (userMap[socket.id]) {
      const userWasGM = userMap[socket.id].GM;

      delete userMap[socket.id];
      // If the deleted user was a Game Master then set new Game Master
      if (userWasGM) {
        const keys = Object.keys(userMap);
        if (keys.length) {
          userMap[keys[0]].GM = true;
        }
      }
      upDate();
    }
  });

  function upDate() {
    io.emit("updateUserList", userMap);
    //Put something in here to show active story?
    io.emit("updateActiveStory", activeStory);
    //Maybe make it similar to updateUserList

    let allVotesIn = true;

    Object.keys(userMap).forEach(key => {
      if (userMap[key].vote === null) {
        allVotesIn = false;
      }
    });
    if (allVotesIn) {
      io.emit("showVotes");
    }
  }
});
// listening on port 8080
io.listen(PORT);
// eslint-disable-next-line no-console
console.log(`Listening on port ${PORT}.`);
