import type { ui } from "../../i18n/ui"
import { getTranslations } from "../../i18n/utils"
import appPyImage from "../../assets/projects/app_py.webp"
import chatImage from "../../assets/projects/chat.webp"
import connect4Image from "../../assets/projects/connect-4.webp"
import hideTwitterBotsImage from "../../assets/projects/hide-twitter-bots.webp"
import portfolioImage from "../../assets/projects/portfolio.webp"
import reversiImage from "../../assets/projects/reversi.webp"
import saveTwitterLinksImage from "../../assets/projects/save-twitter-links.webp"
import typingGameImage from "../../assets/projects/typing-game.webp"
import unityTypingGameImage from "../../assets/projects/unity-typing.webp"

export const projectsArray = (lang: keyof typeof ui) => {
  const { projects } = getTranslations(lang)
  return [
    {
      title: projects.portfolio.title,
      description: projects.portfolio.description,
      thumbnail: portfolioImage,
      lang: "JavaScript/Typescript",
      framework: "Next.js",
      link: "https://taroj.vercel.app",
      githubLink: "https://github.com/taroj1205/portfolio",
    },
    {
      title: projects.saveTwitterLinks.title,
      description: projects.saveTwitterLinks.description,
      thumbnail: saveTwitterLinksImage,
      lang: "JavaScript/Typescript",
      framework: "Chrome",
      link: "https://github.com/taroj1205/chrome-twitter-link/releases/latest",
      githubLink: "https://github.com/taroj1205/chrome-twitter-link",
    },
    {
      title: projects.hideTwitterBots.title,
      description: projects.hideTwitterBots.description,
      thumbnail: hideTwitterBotsImage,
      lang: "JavaScript/Typescript",
      framework: "Chrome",
      link: "https://github.com/taroj1205/chrome-twitter-bots/releases/latest",
      githubLink: "https://github.com/taroj1205/chrome-twitter-bots",
    },
    {
      title: projects.typingGame.title,
      description: projects.typingGame.description,
      thumbnail: typingGameImage,
      lang: "JavaScript/TypeScript",
      framework: "Next.js",
      link: "https://typing-game-nextjs.vercel.app/",
      githubLink: "https://github.com/taroj1205/nextjs-typing-game",
    },
    {
      title: projects.connect4.title,
      description: projects.connect4.description,
      thumbnail: connect4Image,
      lang: "JavaScript/Typescript",
      framework: "Next.js",
      link: "https://connect4-taroj.vercel.app/",
      githubLink: "https://github.com/taroj1205/nextjs-connect4",
    },
    {
      title: projects.typingGameUnity.title,
      description: projects.typingGameUnity.description,
      thumbnail: unityTypingGameImage,
      lang: "C#",
      framework: "Unity",
      link: "https://github.com/taroj1205/Typing-Game",
      githubLink: "https://github.com/taroj1205/Typing-Game",
    },
    {
      title: projects.typingGameFlask.title,
      description: projects.typingGameFlask.description,
      thumbnail: appPyImage,
      lang: "JavaScript",
      framework: "Flask/SQLite3",
      link: "https://taroj1205.github.io/typing/",
      githubLink:
        "https://github.com/taroj1205/taroj1205.github.io/tree/main/typing",
    },
    {
      title: projects.reversi.title,
      description: projects.reversi.description,
      thumbnail: reversiImage,
      lang: "JavaScript/Typescript",
      framework: "Next.js",
      link: "https://nextjs-reversi.vercel.app/",
      githubLink: "https://github.com/taroj1205/nextjs-reversi",
    },
    {
      title: projects.chatApp.title,
      description: projects.chatApp.description,
      thumbnail: chatImage,
      lang: "JavaScript/TypeScript",
      framework: "Next.js",
      link: "https://chat-taroj.vercel.app/",
      githubLink: "https://github.com/taroj1205/chat",
    },
  ]
}