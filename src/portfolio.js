/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Maida Kosser",
  title: "Hi, I'm Maida Kosser",
  subTitle: emoji(
    "Aspiring Web & Mobile Developer | Building Seamless Digital Experiences with a Focus on Clean Code & Clear Documentation"
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/MaidaKosser",
  linkedin: "https://www.linkedin.com/in/maida-kosser-556597269",
  gmail: "maidabutt2004@gmail.com",
  twitter: "https://x.com/maidabutt01",
  instagram: "https://www.instagram.com/maida_butt01/",
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "Aspiring Developer exploring the world of Web & Mobile Technologies",
  skills: [
    emoji(
      "⚡ Creating responsive and user-friendly websites using HTML, CSS, JavaScript, and PHP"
    ),
    emoji(
      "⚡ Exploring React, Node.js & React Native to build modern web and mobile apps"
    ),
    emoji(
      "⚡ Learning Firebase integration and improving UI/UX through real-world practice projects"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "PHP",
      fontAwesomeClassname: "fab fa-php"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "MySQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "NodeJS",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "Figma",
      fontAwesomeClassname: "fab fa-figma"
    },
    {
      skillName: "React Native",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Behance",
      fontAwesomeClassname: "fab fa-behance"
    },
    {
      skillName: "Bootstrap",
      fontAwesomeClassname: "fab fa-bootstrap"
    },

    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "WordPress",
      fontAwesomeClassname: "fab fa-wordpress"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "GIFT University",
      logo: require("./assets/images/giftlogo.png"),
      subHeader: "Bachelor of Science in Software Engineering",
      duration: "Dec 2022 - Present",
      desc: "Pursuing a Bachelor's degree with a strong focus on building scalable web and mobile applications, exploring software design, and understanding real-world development processes.",
      descBullets: [
        "Working on multiple real-time projects involving full-stack development",
        "Gained experience in Java, PHP, React, Node.js, and Firebase",
        "Learning through self-driven projects and staying updated with industry trends",
        "Consistently maintaining strong academic performance"
      ]
    },
     {
      schoolName: "Punjab Group of Colleges",
      logo: require("./assets/images/punjab.png"),
      subHeader: "Intermediate in FSc - Pre-Medical",
      duration: "October 2020 - June 2022",
      desc: "Completed FSc Pre-Medical with 85% marks.",
      descBullets: [
        "While pursuing medical studies, I discovered a deep interest in technology and computers.",
        "Spent my free time exploring programming, problem-solving, and understanding how computers work.",
        "This passion led me to transition into the software engineering field to follow my true calling."
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};
// Work experience section
const workExperiences = {
  display: true,
  experience: [
    {
      role: "Technical Project Mentor",
      company: "GIFT University",
      companylogo: require("./assets/images/giftlogo.png"),
      date: "2023 – Present",
      desc: "Mentored students on academic project development using clean code principles, agile collaboration, and complete documentation lifecycle.",
      descBullets: [
        "Guided software engineering teams for systems like Bus Ticket Booking System, Point of Sale System, And Hotel Managemnet System",
        "Managed UI/UX in Figma, backend in PHP/MySQL,using Firebase, Node.js and produced full documentation (SRS, DFDs, ERD, etc.)."
      ]
    },
    {
      role: "Peer Project Help",
      company: "Self-employed",
      companylogo: require("./assets/images/selfemployee.jpg"), // replace with your freelance logo or a default one
      date: "Ongoing",
      desc: "Offering expert consulting in full-stack web development, database management, DSA, and academic project support.",
      descBullets: [
        "Developed and supported projects using HTML, Tailwind CSS, PHP, MySQL, and Java",
        "Led backend and UI/UX design using Figma, PHP, MySQL",
        "Managed full project cycles including documentation and implementation",
        "Boosted team efficiency by applying software engineering principles"
      ]
    },
    {
      role: "Project Leader – Course Projects",
      company: "GIFT University",
      companylogo: require("./assets/images/projectlead.jpg"), // replace with your project leader logo or a default one
      date: "2023 – Present",
      desc: "Major university course projects like Point of Sale System, Matchmaking Website, and UI/UX Documentation Project.",
      descBullets: [
        "Managed both frontend and backend development",
        "Produced detailed software documentation covering architecture, flow, and system usage",
        "Designed UI mockups in Figma and implemented responsive interfaces"
      ]
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on
const bigProjects = {
  title: "My Projects ",
  subtitle:
    "Here are some of the cool and meaningful projects I've worked on recently.",
  projects: [
    {
      image: require("./assets/images/pos.jpg"),
      projectName: "POS",
      projectDesc:
        "A responsive and dynamic POS system with figma and code, for inventory and sales management. Built using modern front-end with PHP/MySQL backend.",
      footerLink: [
        {
          name: "View Project",
          url: "https://github.com/MaidaKosser/Point-of-Sale-System.git"
        }
      ]
    },
    {
      image: require("./assets/images/logo12.png"),
      projectName: "Lab Link App",
      projectDesc:
        "React Native & Firebase based file sharing platform built for the Mobile Computing course. Supports file upload and real-time database sync.",
      footerLink: [
        {
          name: "View Github Repository",
          url: "https://github.com/MaidaKosser/Lab-Link-Medical-Lab-Test-Booking-App.git"
        }
      ]
    },
    {
      image: require("./assets/images/logo.png"),
      projectName: "Matchmaking Website",
      projectDesc:
        "A matchmaking platform with free and premium profile management, built using PHP, MySQL, and dynamic front-end logic.",
      footerLink: [
        {
          name: "View Project",
          url: "https://github.com/MaidaKosser/Matchmaking-Web.git"
        }
      ]
    },
     {
      image: require("./assets/images/snapchatlogo.jpg"),
      projectName: "Snapchat (SQE) Testing Project",
      projectDesc:
        "Detailed testing on the Snapchat application to evaluate the app’s behavior under various conditions.",
      footerLink: [
        {
          name: "View documentation",
          url: "https://github.com/MaidaKosser/Snapchat-TestCasesDesign.git"
        }
      ]
    },
    {
      image: require("./assets/images/ciscologo.png"),
      projectName: "University Networking System Cisco Packet Tracer",
      projectDesc:
        "Design a scalable and optimized network that demonstrates real-world concepts such as subnetting, routing protocols, and logical topology design.",
      footerLink: [
        {
          name: "View Github Repository",
          url: "University-Networking-System-Cisco-Packet-Tracer"
        }
      ]
    }
    ,
    {
      image: require("./assets/images/hotellogo.png"),
      projectName: "Hotel Management System",
      projectDesc:
        "A console-based Hotel Management System developed using Object-Oriented Programming (OOP) concepts in Java.",
      footerLink: [
        {
          name: "View github Repository",
          url: "https://github.com/MaidaKosser/Hotel-Management-System.git"
        }
      ]
    },
    {
      image: require("./assets/images/document.jpg"),
      projectName: "Point Of Sale System (Documentation)",
      projectDesc:
        "Designed to streamline sales operations for small-scale businesses such as retail shops, grocery stores, and service-based outlets.",
      footerLink: [
        {
          name: "View Documentation",
          url: "https://github.com/MaidaKosser/Point-of-Sale-System-Documentation-.git"
        }
      ]
    },
    {
      image: require("./assets/images/bus.png"),
      projectName: "Bus Ticket Booking System",
      projectDesc:
        "Developed a comprehensive documentation set for a Bus Ticket Booking System that automates ticket reservations for intercity and local travel.",
      footerLink: [
        {
          name: "View Documentation",
          url: "https://github.com/MaidaKosser/Bus-Ticket-Booking-System.git"
        }
      ]
    },
    {
      image: require("./assets/images/document.jpg"),
      projectName: "HMS Documentation Project",
      projectDesc:
        "Document a Hotel Management System that streamlines basic hotel operations using core OOP concepts.",
      footerLink: [
        {
          name: "View Documentation",
          url: "https://github.com/MaidaKosser/HMS-Documentation.git"
        }
      ]
    },
    {
      image: require("./assets/images/busr.png"),
      projectName: " University Smart Bus and Route Management System",
      projectDesc:
        "This project models a university’s Smart Bus and Route Management System using formal methods to ensure correctness, clarity, and system reliability.",
      footerLink: [
        {
          name: "View Github Repository",
          url: "https://github.com/MaidaKosser/University-Smart-Bus-and-Route-Management-System.git"
        }
      ]
    }
  ],
  display: true
};
// Achievement Section
// Include certificates, talks etc
const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Certifications, Projects, and Learning Milestones that reflect my journey!",

  achievementsCards: [
    {
      title: "UI/UX Design Certificate",
      subtitle:
        "Completed a certified UI/UX design course from Coursera, Covered key areas like responsive design, accessibility, and user-centered interface development.",
      image: require("./assets/images/uiux.avif"),
      imageAlt: "FreeCodeCamp Logo",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://coursera.org/share/bea06b8444a2558fc9672c05ec4ef234"
        }
      ]
    },
    {
      title: "WordPress Development",
      subtitle:
        "Developed multiple WordPress plugins and themes, enhancing the functionality and user experience of various websites.",
      image: require("./assets/images/wordpress.png"),
      imageAlt: "WordPress Logo",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://coursera.org/share/48295418d1b1d604a8ec1d7f294daab8"
        }
      ]
    },
    {
      title: "Python Programming",
      subtitle:
        "Completed a beginner-level course covering Python fundamentals including variables, data types, loops, conditionals, functions, and basic file handling.",
      image: require("./assets/images/python.webp"),
      imageAlt: "Python Logo",
      footerLink: [
        {
          name: "Live Certificate",
          url: "https://www.udemy.com/certificate/UC-cba4c3d0-a5c8-4b35-a702-689c00405111/"
        }
      ]
    }
  ],
  display: true
};

// Blogs Section
const blogSection = {
  title: "Blogs",
  subtitle:
    "I love putting my thoughts into words—especially when it comes to tech, growth, and real experiences that matter.",
  displayMediumBlogs: "false", // Keep this false if you want to show your own blogs instead of Medium auto-fetch
  blogs: [
    {
      url: "https://medium.com/@yourusername/matchmaking-in-tech-beyond-the-dating-apps-xyz123",
      title: "Matchmaking in Tech: Beyond the Dating Apps",
      description:
        "Exploring how matchmaking algorithms are changing industries—from HR to social platforms—and how you can build one."
    },
    {
      url: "https://medium.com/@yourusername/from-code-to-connections-building-digital-relationships-fb9810",
      title: "From Code to Connections: Building Digital Relationships",
      description:
        "A deep dive into how user behavior data can be used to form meaningful digital matches. A must-read for devs building communities."
    }
  ],
  display: false
};

// Talks Sections

const talkSection = {
  title: "Talks",
  subtitle: emoji("Sharing what I know is how I grow 💬"),

  talks: [
    {
      title: "Point Of Sale Systems on small Scale using PHP & MySQL",
      subtitle: "Guest Lecture at WomenInTech Conf 2025",
      slides_url: "https://yourdomain.com/slides/smart-matching",
      event_url: "https://yourdomain.com/events/womenintech2025"
    }
  ],
  display: false
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-317-8105371",
  email_address: "maidabutt2004@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "maidabutt01", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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
