const dotenv = require("dotenv");
const app = require("./app");

dotenv.config({ path: "/home/josh/environment-variables/config.env" }); // Linux Server Path//
// dotenv.config({ path: "./config.env" }); //Local Testing Path
const port = process.env.PORT;
const env = process.env.NODE_ENV;

app.listen(port, () => {
  console.log(`Environment: ${env}`);
  console.log(`App running on port ${port}!`);
});
