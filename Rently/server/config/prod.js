const { googleClientID, googleClientSecret, mongoURI } = require("./dev");

//production evironment keys
module.exports = {
 googleClientID: process.env.GOOGLE_CLIENT_ID,
 googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
 mongoURI: process.env.MONGO_URI,
    cookieKey: process.env.COOKIE_KEY,
    googleRedirectURI: process.env.GOOGLE_REDIRECT_URI,
}