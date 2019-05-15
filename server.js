const express = require("express");
const path = require("path");
const sqlite3 = require("sqlite3");
const app = express();
var cors = require("cors");
app.use(cors());
const port = process.env.PORT || 5000;

app.get('*.js', function (req, res, next) {
  req.url = req.url + '.gz';
  res.set('Content-Encoding', 'gzip');
  next();
});

// API calls
app.get("/api/hello", (req, res) => {
  res.send({ express: "Hello From Express" });
});

// API calls
app.get("/api/test", (req, res) => {
  var blogs = [];
  // open the database
  let db = new sqlite3.Database("./chinook.db", sqlite3.OPEN_READWRITE, err => {
    if (err) {
      console.error(err.message);
    }
    console.log("Connected to the chinook database.");
  });

  var test = db.serialize(() => {
    db.each(
      `SELECT PlaylistId as id,
                    Name as name
            FROM playlists`,
      (err, row) => {
        if (err) {
          console.error(err.message);
        }
        blogs.push(row.name);
      }
    );
  });
  db.close(err => {
    if (err) {
      console.error(err.message);
    }
    console.log("Close the database connection.");
    res.send({ blogs });
  });
});

app.get("/api/testblogs", (req, res) => {
  var blogs = [];
  // open the database
  let db = new sqlite3.Database("./chinook.db", sqlite3.OPEN_READWRITE, err => {
    if (err) {
      console.error(err.message);
    }
    console.log("Connected to the chinook database.");
  });

  var test = db.serialize(() => {
    db.each(
      `SELECT b.BlogId as BlogId, b.Title as Title, b.AuthorId as AuthorId, b.Body as Body, b.Snippet as Snippet,
       b.Date as Date, b.Tags as Tags, a.LastName as LastName, a.FirstName as FirstName, b.URL as URL       
       FROM blogs b
       JOIN authors a on b.AuthorId = b.AuthorId`,
      (err, row) => {
        if (err) {
          console.error(err.message);
        }
        var blog = {
          blogId: row.BlogId,
          title: row.Title,
          author: { LastName: row.LastName, FirstName: row.FirstName },
          body: row.Body,
          date: row.Date,
          tags: row.Tags,
          snippet: row.Snippet,
          url: row.URL
        };
        blogs.push(blog);
      }
    );
  });
  db.close(err => {
    if (err) {
      console.error(err.message);
    }
    console.log("Close the database connection.");
    // console.log(blogs);
    res.send({ blogs });
  });
});

app.get("/api/testblog/:url", (req, res) => {
  var blog = undefined;
  // open the database
  let db = new sqlite3.Database("./chinook.db", sqlite3.OPEN_READWRITE, err => {
    if (err) {
      console.error(err.message);
    }
    console.log("Connected to the chinook database.");
  });
  console.log(req.params);
  var test = db.serialize(() => {
    db.each(
      `SELECT b.BlogId as BlogId, b.Title as Title, b.AuthorId as AuthorId, b.Body as Body,
       b.Date as Date, b.Tags as Tags, a.LastName as LastName, a.FirstName as FirstName, b.Snippet as Snippet,       
       b.VideoURL as VideoURL, b.PodcastURL as PodcastURL 
       FROM blogs b
       JOIN authors a on b.AuthorId = b.AuthorId
       WHERE b.URL = '${req.params.url}';
       `,
      (err, row) => {
        if (err) {
          console.error(err.message);
        } else{
          var blogSingle = {
            blogId: row.BlogId,
            title: row.Title,
            lastName: row.LastName,
            firstName: row.FirstName,
            body: row.Body,
            date: row.Date,
            tags: row.Tags,
            snippet: row.Snippet,
            vid: row.VideoURL,
            pod: row.PodcastURL
          };
          blog = blogSingle;
        }
      }
    );
  });
  db.close(err => {
    if (err) {
      console.error(err.message);
    }
    console.log("Close the database connection.");
    // console.log(blogs);
    res.send({ blog });
  });
});

app.get("/api/testblogs/:category", (req, res) => {
  var blogs = [];
  // open the database
  let db = new sqlite3.Database("./chinook.db", sqlite3.OPEN_READWRITE, err => {
    if (err) {
      console.error(err.message);
    }
    console.log("Connected to the chinook database.");
  });

  var test = db.serialize(() => {
    db.each(
      `SELECT b.BlogId as BlogId, b.Title as Title, b.AuthorId as AuthorId, b.Body as Body,
       b.Date as Date, b.Tags as Tags, a.LastName as LastName, a.FirstName as FirstName, b.Snippet as Snippet, b.URL as URL       
       FROM blogs b
       JOIN authors a on b.AuthorId = b.AuthorId
       WHERE b.Tags LIKE "%${req.params.category}%";
       `,
      (err, row) => {
        if (err) {
          console.error(err.message);
        }

        if (!!row.BlogId)
          blogs.push({
            blogId: row.BlogId,
            title: row.Title,
            author: { LastName: row.LastName, FirstName: row.FirstName },
            body: row.Body,
            date: row.Date,
            tags: row.Tags,
            snippet: row.Snippet,
            url: row.URL
          });
      }
    );
  });
  db.close(err => {
    if (err) {
      console.error(err.message);
    }
    console.log("Close the database connection.");
    res.send({ blogs });
  });
});

app.get("/api/categories", (req, res) => {
  var categories = [];
  // open the database
  let db = new sqlite3.Database("./chinook.db", sqlite3.OPEN_READWRITE, err => {
    if (err) {
      console.error(err.message);
    }
    console.log("Connected to the chinook database.");
  });

  var test = db.serialize(() => {
    db.each(
      `SELECT b.Tags as Tags       
       FROM blogs b;`,
      (err, row) => {
        if (err) {
          console.error(err.message);
        }

        if (!!row.Tags) {
          row.Tags.split(",").map(category => categories.push(category));
        }
      }
    );
  });
  db.close(err => {
    if (err) {
      console.error(err.message);
    }
    console.log("Close the database connection.");
    res.send([...new Set(categories)]);
  });
});

if (process.env.NODE_ENV === "production") {
  // Serve any static files
  app.use(express.static(path.join(__dirname, "public")));

  // Handle React routing, return all requests to React app
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "public", "index.html"));
  });
}

app.listen(port, () => console.log(`Listening on port ${port}`));
