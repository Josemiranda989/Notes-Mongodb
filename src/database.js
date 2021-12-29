const mongoose = require('mongoose');

mongoose
  .connect(process.env.MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
  })
  .then((db) => console.log("Db connectect to", db.connection.name))
  .catch((err) => console.log(err));
