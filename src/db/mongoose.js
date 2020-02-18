const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://" +
    process.env.MONGODB_USER +
    ":" +
    process.env.MONGODB_PASSWORD +
    process.env.MONGODB_CLUSTER +
    "/test?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  }
);
