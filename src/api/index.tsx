import axios from "axios";

// const axios = require('axios');
const oauth = require("axios-oauth-client");
const getOwnerCredentials = oauth.client(axios.create(), {
  url: "https://apis.indeed.com/oauth/v2/tokens",
  grant_type: "client_credentials",
  client_id: process.env.REACT_APP_CLIENT_ID,
  client_secret: process.env.REACT_APP_CLIENT_SECRET,
  email: "abubakar.yahaya@amalitech.org",
  password: process.env.REACT_APP_PASSWORD,
  scope: "employer_access",
});

export const auth = getOwnerCredentials();
