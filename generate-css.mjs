import fs from "fs"
import path from "path"

const techs = [
  "nextjs",
  "javascript",
  "typescript",
  "chrome",
  "unity",
  "cs",
  "flask",
  "sqlite3",
]

const cssRules = techs
  .map(
    (tech) => `
form#projects-view:has(input[value="${tech}"]:checked)
+ .projects-container
.project-card.${tech} {
  display: flex;
  visibility: visible;
}
`,
  )
  .join("")

// Path to the CSS file
const cssFilePath = path.join(
  process.cwd(),
  "./src/components/projects/card.css",
)

// Append the generated CSS to the file
fs.writeFileSync(cssFilePath, cssRules, "utf8")

console.log("CSS rules appended to ./src/components/projects/card.css")
