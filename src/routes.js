const Users = require("./usersController");
const Posts = require("./postsController");

const routes = async (req, res) => {
  if (req.method === "GET") {
    if (req.url === "/users") {
      const users = await Users.findAll();
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(users));
    } else if (req.url.match(/\/users\/([a-z A-Z 0-9]+)/)) {
      try {
        const id = req.url.split("/")[2];
        const user = await Users.findById(id);
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(user));
      } catch (error) {
        res.writeHead(404, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "User not found!" }));
      }
    }
    

    else if (req.url === "/posts") {
      const posts = await Posts.findAll();
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(posts));
    } else if (req.url.match(/\/posts\/([a-z A-Z 0-9]+)/)) {
      try {
        const id = req.url.split("/")[2];
        const post = await Posts.findById(id);
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(post));
      } catch (error) {
        res.writeHead(404, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "User not found!" }));
      }
    }

    else {
      res.writeHead(404, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ error: "Resource not found" }));
    }
  }
};

module.exports = routes;
