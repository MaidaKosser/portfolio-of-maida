// portfolio.js — CLEANED & FIXED

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000
};

const illustration = {
  animated: true
};

const greeting = {
  username: "Mdewhdehdhewdhei",
  title: "Hi, I'm Maida Kjjkk",
  subTitle: emoji(
    "A passionate Full Stack Developer 🚀 experienced in building Web and Mobile apps using JavaScript / ReactJS / NodeJS / React Native and other modern tools."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing",
  displayGreeting: true
};

const socialMediaLinks = {
  github: "https://github.com/MaidaKosser",
  linkedin: "https://www.linkedin.com/in/maidakosser/",
  gmail: "maidakosser@gmail.com",
  gitlab: "",
  facebook: "",
  medium: "https://medium.com/@MaidaKosser",
  stackoverflow: "",
  display: true
};

const skillsSection = {
  title: "What I Do",
  subTitle: "PASSIONATE FULL STACK DEVELOPER WHO LOVES TO EXPLORE TECH",
  skills: [
    emoji("⚡ Build interactive UIs for web and mobile"),
    emoji("⚡ Create Progressive Web Apps (PWAs)"),
    emoji("⚡ Integrate Firebase, AWS, and other 3rd-party APIs")
  ],
  softwareSkills: [
    { skillName: "HTML5", fontAwesomeClassname: "fab fa-html5" },
    { skillName: "CSS3", fontAwesomeClassname: "fab fa-css3-alt" },
    { skillName: "Sass", fontAwesomeClassname: "fab fa-sass" },
    { skillName: "JavaScript", fontAwesomeClassname: "fab fa-js" },
    { skillName: "ReactJS", fontAwesomeClassname: "fab fa-react" },
    { skillName: "NodeJS", fontAwesomeClassname: "fab fa-node" },
    { skillName: "Swift", fontAwesomeClassname: "fab fa-swift" },
    { skillName: "NPM", fontAwesomeClassname: "fab fa-npm" },
    { skillName: "SQL", fontAwesomeClassname: "fas fa-database" },
    { skillName: "AWS", fontAwesomeClassname: "fab fa-aws" },
    { skillName: "Firebase", fontAwesomeClassname: "fas fa-fire" },
    { skillName: "Python", fontAwesomeClassname: "fab fa-python" },
    { skillName: "Docker", fontAwesomeClassname: "fab fa-docker" }
  ],
  display: true
};

const educationInfo = {
  display: false, // Hide dummy data for now
  schools: []
};

const techStack = {
  viewSkillBars: true,
  experience: [
    { Stack: "Frontend/Design", progressPercentage: "90%" },
    { Stack: "Backend", progressPercentage: "70%" },
    { Stack: "Programming", progressPercentage: "60%" }
  ],
  displayCodersrank: false
};

const workExperiences = {
  display: false,
  experience: []
};

const openSource = {
  showGithubProfile: true,
  display: true
};

const bigProjects = {
  title: "Projects",
  subtitle: "A Few Things I’ve Worked On",
  projects: [],
  display: true
};

const achievementSection = {
  title: emoji("Achievements & Certifications 🏆"),
  subtitle: "Awards, certs and cool stuff",
  achievementsCards: [],
  display: false
};

const blogSection = {
  title: "Blogs",
  subtitle: "Sharing thoughts & tutorials.",
  displayMediumBlogs: true,
  blogs: [],
  display: true
};

const talkSection = {
  title: "Talks",
  subtitle: emoji("I LOVE SHARING KNOWLEDGE 😅"),
  talks: [],
  display: false
};

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "Tech talks and life chats.",
  podcast: [],
  display: false
};

const resumeSection = {
  title: "Resume",
  subtitle: "Download my updated resume.",
  display: true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Let's connect or work together!",
  number: "+92-0000000000",
  email_address: "maidakosser@gmail.com"
};

const twitterDetails = {
  userName: "", // Add later if needed
  display: false
};

const isHireable = true;

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
