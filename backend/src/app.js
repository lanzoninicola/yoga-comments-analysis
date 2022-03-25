import express from "express";
import routes from "./api/routes/index.js";

// TODO: Synk recommendation

/*

Disable X - Powered - By header for your Express app(consider using Helmet middleware), 
because it exposes information about the used framework to potential attackers.
Snyk Code Security app.js(4, 13): Express app
Consider using csurf middleware for your Express app to protect against CSRF attacks.
Snyk Code Security app.js(4, 13): Express app
 */
const app = express();
app.use("/", routes);

export default app;
