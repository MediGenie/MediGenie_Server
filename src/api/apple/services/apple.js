"use strict";

/**
 * apple service
 */
const qs = require("querystring");
const axios = require("axios");
const jwt = require("jsonwebtoken");
const fs = require("fs");
const jwksClient = require("jwks-rsa");

const signWithApplePrivateKey = process.env.APPLE_SECRET_KEY ?? "";

module.exports = ({ strapi }) => ({
  async key(kid) {
    const client = jwksClient({
      jwksUri: "https://appleid.apple.com/auth/keys",
      timeout: 30000,
    });

    return await client.getSigningKey(kid);
  },
  createSignWithAppleSecret() {
    try {
      console.log(
        "signWithApplePrivateKey :>> ",
        signWithApplePrivateKey.replace(/\\n/g, "\n")
      );
      return jwt.sign({}, signWithApplePrivateKey.replace(/\\n/g, "\n"), {
        algorithm: "ES256",
        expiresIn: "1h",
        audience: "https://appleid.apple.com",
        issuer: process.env.APPLE_TEAM_ID, // TEAM_ID
        subject: process.env.APPLE_SERVICE_ID, // Service ID
        keyid: process.env.APPLE_KEY_ID, // KEY_ID
      });
    } catch (err) {
      console.log("err :>> ", err);
    }
  },
  async getAppleToken(code) {
    const appleSecret = this.createSignWithAppleSecret();
    console.log("appleSecret :>> ", appleSecret);
    return axios.post(
      "https://appleid.apple.com/auth/token",
      qs.stringify({
        grant_type: "authorization_code",
        code,
        client_secret: appleSecret,
        client_id: process.env.APPLE_SERVICE_ID,
        redirect_uri: process.env.APPLE_REDIRECT_URI,
      }),
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
  },
});
