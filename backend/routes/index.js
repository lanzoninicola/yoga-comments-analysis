// https://github.com/Autodesk-Forge/forge-view.googledrive.models/blob/dc4598c68d3365f848f359f223b61fe8506462e5/routes/google.drive.tree.js#L52
import "dotenv/config";

import express from "express";

import { getGoogleAuthURL, getGoogleToken } from "../src/googleAuth.js";
import { Store } from "../src/store.js";

const store = new Store();
const GAPI_ACCESS_TOKEN_KEY = "GAPI_ACCESS_TOKEN_KEY";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("It works!");
});

router.get("/api", (req, res) => {
  console.log(process.env.API_KEY);
  res.send("Inside api route");
});

/**
 * @description Returns the url that the user needs to visit to authenticated with google
 */
router.get("/api/google/auth", async (req, res) => {
  const url = await getGoogleAuthURL();
  res.redirect(url);
});

/**
 * @description This route is consumed after the user has authenticated with google
 *            and redirected back to your application.
 *            The redirect URL is defined in the Google "OAuth 2.0 Client IDs" configuration.
 *
 * This route must be the same as the one defined .env file.
 */
router.get("/api/google/callback/oauth", async (req, res) => {
  const code = req.query.code;

  const access_token = await getGoogleToken(code);

  console.log(access_token);

  store.set(GAPI_ACCESS_TOKEN_KEY, access_token);

  res.redirect("/");
});

export default router;
