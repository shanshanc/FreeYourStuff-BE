const port = process.env.PORT || 5000;
const app = require('./app');

const server = app.listen(port, () => {
  console.log(`🚀 Listening on port ${port}`);
});

module.exports = server;
