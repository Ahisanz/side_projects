module.exports = {
  ENV: process.env.NODE_ENV || "development",
  PORT: process.env.PORT || 3000,
  URL: process.env.BASE_URL || "http://localhost:3000",
  MONOGODB_URI:
    process.env.MONGODB_URI ||
    "mongodb+srv://ahisanz:ana123@cluster0.hp7dg.mongodb.net/<dbname>?retryWrites=true&w=majority",
  JWT_SECRET: process.env.JWT_SECRET || "secret1",
};
