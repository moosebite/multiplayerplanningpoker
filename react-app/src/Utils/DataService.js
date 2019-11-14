import io from "socket.io-client";
import mockStories from "./MockStories";

class DataService {
  constructor(username) {
    this.socket = io("http://localhost:8080");
    this.addUser(username);
  }

  updateVote(vote) {
    this.socket.emit("updateVote", vote);
  }

  updateStory(story) {
    this.socket.emit("updateStory", story);
  }

  clearVotes() {
    this.socket.emit("clearVotes");
  }

  addUser(username) {
    this.socket.emit("addUser", username);
  }

  changeGM() {
    this.socket.emit("changeGM");
  }

  displayVotes() {
    this.socket.emit("displayVotes");
  }

  obscureVotes() {
    this.socket.emit("obscureVotes");
  }

  requestUpdate() {
    this.socket.emit("requestUpdate");
  }

  getStory() {
    return mockStories;
  }

  updateActiveStory(callback) {
    this.socket.on("updateActiveStory", newActiveStory => {
      callback(newActiveStory);
      console.log("Received new active story");
    });
  }

  updateUserList(callback) {
    this.socket.on("updateUserList", newUserList => {
      callback(newUserList);
      // eslint-disable-next-line no-console
      console.log("Received new userList.");
    });
  }

  userIsGM(callback) {
    this.socket.on("updateUserList", userMap => {
      const socketid = this.socket.id;
      const gm = userMap[socketid].GM;
      callback(gm);
    });
  }

  showVotes(callback) {
    this.socket.on("showVotes", () => callback());
  }

  hideVotes(callback) {
    this.socket.on("hideVotes", () => callback());
  }
}

export default DataService;
