exports.DATABASE_URL =
  process.env.DATABASE_URL ||
  global.DATABASE_URL ||
  "mongodb+srv://michaelzalik:michael123@sales-email-assistant.jp106.mongodb.net/<dbname>?retryWrites=true&w=majority";

exports.JWT_SECRET = process.env.JWT_SECRET || "secret";

exports.PORT = process.env.PORT || 3000;
