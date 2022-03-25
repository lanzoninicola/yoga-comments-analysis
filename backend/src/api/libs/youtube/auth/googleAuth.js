import { google } from "googleapis";
import "dotenv/config";

// TODO: Refactor this with class

// config information, such as client ID and secret adn redirect uri
const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;
const GOOGLE_REDIRECT_URI = process.env.GOOGLE_REDIRECT_URI;

// google SDK
const OAuth2 = google.auth.OAuth2;
const oauth2Client = new OAuth2(
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
  GOOGLE_REDIRECT_URI
);

/**
 * @description Returns the url that the user needs to visit to authenticated with google
 *
 * @returns Promise with type {string}
 */
export function getGoogleAuthURL() {
  const scopes = [
    "https://www.googleapis.com/auth/userinfo.email",
    //"https://www.googleapis.com/auth/youtube.force-ssl",
  ];

  const url = oauth2Client.generateAuthUrl({
    access_type: "online",
    scope: scopes,
  });

  // TODO: make response better
  return new Promise((result, reject) => {
    if (url) {
      result(url);
    } else reject(console.log("url not defined"));
  });
}

/**
 *
 * @description Obtain an access token from the Google Authorization Server
 *              https://developers.google.com/identity/protocols/oauth2
 *
 * @param code string After the user has authorized your application, Google will redirect the user back to your application.
 *           The code parameter will be passed to your application via the redirect URL.
 *           The code parameter is used to obtain an access token.
 * @returns Promise with type {string}
 */
export function getGoogleToken(code) {
  return oauth2Client.getToken(code).then((response) => {
    oauth2Client.setCredentials(response.tokens);

    // storeToken(response.tokens)

    return new Promise((result, reject) => {
      if (response.tokens.access_token) {
        result(response.tokens.access_token);
      } else reject(console.log("token rejected"));
    });
  });
}
