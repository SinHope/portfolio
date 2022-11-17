import logox from "./YouTube-Logo.wine.svg";
import logox1 from "./TikTok-Logo.wine.svg";
import logox2 from "./LinkedIn-Logo.wine.svg";
import logox3 from "./MyPProjectPortfolio2.jpg";
import logox4 from "./portprofilephoto.webp";
import logox5 from "./postmaniconsvg.svg";
import { Routes, Route, Link } from "react-router-dom";
import Contactme from "./Contactme";

const Profile = [
  {
    id: 1,
    logo: logox,
    title: "YouTube(FishingWithNas)",
    description: "Fishing is my hobby and passion. Truly enjoy this sports.",
    toclick: "Watch some of my juicy fishing content!",
    linker: "https://www.youtube.com/channel/UCe2iiKDlnL3Rr1N2K-eMQRA",
  },
  {
    id: 2,
    logo: logox1,
    title: "TikTok(TikTokWithNas)",
    description:
      "A platform for my short riding & fishing videos. Ah yes, riding motorcycle is also my love.",
    toclick: "If you love bikes and fishing, head on over!",
    linker: "https://www.tiktok.com/@tiktokwithnas",
  },
  {
    id: 3,
    logo: logox2,
    title: "LinkedIn",
    description:
      "A Purchaser in the marine industry for many years. but I found my new passion in coding",
    toclick:
      "Click on me to see my professional journey. Don't feel shy to chat with me *wink*",
    linker: "https://www.linkedin.com/in/nasmer-fontanilla-b0a010108/",
  },
  {
    id: 4,
    logo: logox3,
    title: "Personal Projects",
    description:
      "Some of my own personal projects. Start small and basic, and progress into beauty and complexity(I HAVE A BIG PROJECT IN MIND)",
    toclick: "Zap zap let's gooo!",
  },
  {
    id: 5,
    logo: logox4,
    title: "About me",
    description: "Of course, not forgetting about an introduction to myself",
    toclick: "Discover Nasmer's world!",
  },
  {
    id: 6,
    logo: logox5,
    title: "Contact Me",
    description: "Calling all my potential employers and parners",
    toclickemail:
      "Feeling shy is not going to make anything happen. Come on, let's communicate!",
  },
];

export default Profile;
