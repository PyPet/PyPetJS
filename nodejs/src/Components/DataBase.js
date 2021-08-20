const mongoose = require("mongoose");
mongoose.connect(process.env.REACT_APP_PYPET_DBURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

export default getPetConfig;
