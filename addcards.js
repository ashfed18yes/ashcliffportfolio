// Helper script reflecting Ankit Sharma's projects
const portfolioData = require("./portfolio-data.json");
const oM = portfolioData.projects;

if (typeof module !== "undefined" && module.exports) {
  module.exports = { oM };
}