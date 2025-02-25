const about = {
    /*title: 'Hi, my name is Rimma',
    description:
    'I am a computer science student with a dream of applying my software engineering skills toward positive societal and environmental change. \n',
    meInfo: "More: ", */
    github: 'https://github.com/rmmshv',
    linkedin: 'https://www.linkedin.com/in/rmmshv',
    cv: 'https://docs.google.com/document/d/1NFkfWrjMVGPZtFe382nWzs3kSr0QNT9R6ZC3qyMSVzE/edit?pli=1&tab=t.0',
};


const projects = {
    title: "Projects",
    personalProjects: [
      {
        title: "FONTer",
        short:
          "Curated font & color collection",
        description:
          "FONTer was build to organize and store fonts to use in development for easy visual reference and access.",
        technologies: [
          "#React.js","#JavaScript", "#HTML", "#CSS"
        ],
        github: "https://github.com/rmmshv/FONTer",
        demo: "https://fonter.vercel.app/#",
        gifPreview: "/gifs/fonter.gif",
      },
      {
        title: "Ann Naimark.com",
        short:
          "Personal website for a book author & psycotherapist",
        description:
          "Personal website for a book author and psychotherapist. Designed with Figma, built with React.js, HTML, CSS, and ReadyMag.",
        technologies: ["#Figma", "#React.js", "#HTML", "#CSS", "#ReadyMag"],
        //github: "#",
        demo: "https://annnaimark.com/",
        gifPreview: "./gifs/ANNwebsite.gif",
      },
      {
        title: "Hibi",
        short:
          "In-browser car racing game",
        description:
          "Hibi is an in-browser racing game that will take you on a journey through the early days of the internet! Hibi is inspired by the nostalgic graphics of the early web and two great games - Mario Cart and Rocket League.",
        technologies: ["#JavaScript", "#HTML", "#CSS"],
        github: "https://github.com/rmmshv/Hibi",
        demo: "https://hibi.vercel.app/",
        gifPreview: "/gifs/hibi.gif",
      },
      {
        title: "RSA encrypted wallet",
        short:
          "Message encryption, decryption, and signing based on the RSA asymmetric cryptography algorithm.",
        description:
          "Message encryption, decryption and signing based on the RSA asymmetric cryptography algorithm.",
        technologies: [
          "#JavaScript","#Cryptography"
        ],
        github: "https://github.com/rmmshv/encrypted-wallet",
        //demo: "#",
        gifPreview: "/gifs/fonter-preview.gif",
      },
    ],
  };
  
  
  const skills = {
    title: "Skills",
    mySkills: [
      {
        title: "Languages & Frameworks",
        skills: [
          "#React.js",
          "#HTML",
          "#CSS",
          "#JavaScript",
          "#Python",
          "#C++",
          "#Node.js"
        ],
      },
      {
        title: "Databases",
        skills: ["#MongoDB", "#Firebase"],
      },
      {
        title: "Others",
        skills: ["#Git", "#Figma", "#Bash"],
      },
    ],
  };
  
  export { about, projects, skills };