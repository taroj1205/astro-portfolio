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
  animation: card-in 0.5s ease-in-out forwards;
  pointer-events: auto;
}
`,
  )
  .join("")

// Path to the CSS file
const cssFilePath = path.join(
  process.cwd(),
  "./src/components/projects/card.css",
)

// Write the generated CSS to the file
fs.writeFileSync(cssFilePath, cssRules, "utf8")

console.log("CSS rules written to ./src/components/projects/card.css")
