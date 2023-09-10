const fs = require("fs");
const { v4 } = require("uuid");
const serialize = require("serialize-javascript");

/**
 * Replaces a value within a string with another string
 * @param {string} htmlContent - The HTML content
 * @param {string} value - The value to replace
 * @param {string} content - The content to replace the value with
 */
const replace = (htmlContent, value, content) => {
  const regex = new RegExp(`{${value}}`, "gi");
  return htmlContent.replaceAll(regex, content);
};

/**
 * Parses the request body and returns it as JSON
 * @param {object} req - The request object
 */
const getBody = (req) => {
  return new Promise((resolve, reject) => {
    let data = "";

    req.on("data", (chunk) => {
      data += chunk;
    });

    req.on("end", () => {
      try {
        const body = JSON.parse(data);
        resolve(body);
      } catch (error) {
        reject(error);
      }
    });
  });
};

const sessionDir = "./data/sessions";

if (!fs.existsSync(sessionDir)) fs.mkdirSync(sessionDir);

/**
 * Returns the current date and time in a human-readable format
 */
function now() {
  return new Date().toLocaleString();
}

/**
 * Creates a new session and returns its ID
 */
function createSession() {
  const sessionId = v4();
  const sessionData = {
    token: sessionId,
    lastAccessed: now(),
    data: {},
  };
  const sessionPath = `${sessionDir}/${sessionId}.json`;
  fs.writeFileSync(sessionPath, serialize(sessionData));
  return sessionId;
}

/**
 * Reads a session from the file system and returns it
 * @param {string} sessionId - The session ID
 */
function readSession(sessionId) {
  const sessionPath = `${sessionDir}/${sessionId}.json`;
  try {
    const sessionData = fs.readFileSync(sessionPath, "utf-8");
    const session = JSON.parse(sessionData);
    session.lastAccessed = now();
    fs.writeFileSync(sessionPath, serialize(session));
    return session;
  } catch (error) {
    return {};
  }
}
/**
 * Destroys a session by deleting its file
 * @param {string} sessionId - The session ID
 * @param {object} res - The response object
 */
function destroySession(sessionId, res) {
  const sessionPath = `${sessionDir}/${sessionId}.json`;
  if (fs.existsSync(sessionPath)) {
    fs.unlinkSync(sessionPath);
  }
  res.setHeader("Set-Cookie", `sessionId=;`);
}
function checkSession(sessionId, res) {
  if (!fs.existsSync(`${sessionDir}/${sessionId}.json`)) {
    return false;
  }
  return true;
}

module.exports = {
  getBody,
  replace,
  createSession,
  readSession,
  destroySession,
  checkSession,
};
