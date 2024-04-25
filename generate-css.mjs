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
.projects-view-container:has(input[value="${tech}"]:checked)
+ .projects-container
.project-card.${tech} {
  animation: card-in 0.5s ease-in-out forwards;
  pointer-events: auto;
}
`,
  )
  .join("")

const mediaPrefersReducedMotion =
  "@media (prefers-reduced-motion: reduce) {" +
  techs
    .map(
      (tech) => `
  .projects-view-container:has(input[value="${tech}"]:checked)
+ .projects-container
.project-card.${tech} {
    animation: none !important;
      opacity: 1;
    transform: translateY(0);
    height: fit-content;
    height: -moz-fit-content;
    width: 100%;
    border: 1px solid var(--card-border);
    margin-bottom: var(--spaces-4);
    position: relative;
    pointer-events: none;
  }`,
    )
    .join("") +
  "}"

// Path to the CSS file
const cssFilePath = path.join(
  process.cwd(),
  "./src/components/projects/card.css",
)

// Write the generated CSS to the file
fs.writeFileSync(cssFilePath, cssRules + mediaPrefersReducedMotion, "utf8")

console.log("CSS rules written to ./src/components/projects/card.css")
