const about = {
    //title: "Hi, I'm Ri!",
    description: "Hi there!\n\n I'm a recent Computer Science graduate passionate about building innovative software.\nMy focus is on full stack development, where I combine strong problem-solving skills with a keen eye for design and user experience. \nI love turning ideas into robust, scalable, and user-friendly applications.",
    /*meInfo: "More: ", 
                      image: "/images/rimma.jpg",*/
    github: "https://github.com/rmmshv",
    linkedin: "https://www.linkedin.com/in/rmmshv",
    cv: "https://docs.google.com/document/d/1NFkfWrjMVGPZtFe382nWzs3kSr0QNT9R6ZC3qyMSVzE/edit?pli=1&tab=t.0",
};

const projects = {
    title: "Projects",
    personalProjects: [{
            title: "FONTer",
            short: "Curated font & color collection",
            description: "FONTer was build to organize and store fonts and color palettes to use in development for easy visual reference and access.",
            technologies: ["#React.js", "#JavaScript", "#HTML", "#CSS"],
            github: "https://github.com/rmmshv/FONTer",
            demo: "https://fonter.vercel.app/#",
            gifPreview: "/gifs/fonter.gif",
        },
        {
            title: "Taskflow",
            short: "Curated font & color collection",
            description: "MERN, full-stack task tracker app that helps you organize your daily tasks with ease. You can add, edit, complete, and delete your tasks, all in a clean and responsive interface.",
            technologies: [
                "#React.js",
                "#Axios",
                "#MongoDB",
                "#TailwindCSS",
                "#Node.js",
                "#Express.js",
            ],
            github: "https://github.com/rmmshv/Taskflow",
            demo: "https://mern-surge-aina-to-do.vercel.app",
            gifPreview: "/gifs/taskflow.gif",
        },
        {
            title: "Ann Naimark.com",
            short: "Personal website for a book author & psycotherapist",
            description: "Personal website for a book author and psychotherapist. Designed with Figma, built with React.js, HTML, CSS, and ReadyMag.",
            technologies: ["#Figma", "#React.js", "#HTML", "#CSS", "#ReadyMag"],
            //github: "#",
            demo: "https://annnaimark.com/",
            gifPreview: "./gifs/ANNwebsite.gif",
        },
        {
            title: "Hibi",
            short: "In-browser car racing game",
            description: "Hibi is an in-browser racing game that will take you on a journey through the early days of the internet! Hibi is inspired by the nostalgic graphics of the early web and two great games - Mario Cart and Rocket League.",
            technologies: ["#JavaScript", "#HTML", "#CSS"],
            github: "https://github.com/rmmshv/Hibi",
            demo: "https://hibi.vercel.app/",
            gifPreview: "/gifs/hibi.gif",
        },
        {
            title: "RSA encrypted wallet",
            short: "Message encryption, decryption, and signing based on the RSA asymmetric cryptography algorithm.",
            description: "Message encryption, decryption and signing based on the RSA asymmetric cryptography algorithm.",
            technologies: ["#JavaScript", "#Cryptography"],
            github: "https://github.com/rmmshv/encrypted-wallet",
            //demo: "#",
            gifPreview: "/gifs/fonter-preview.gif",
        },
    ],
};

const skills = {
    title: "Skills",
    mySkills: [{
            title: "Languages & Frameworks",
            skills: [
                "#React.js",
                "#HTML",
                "#CSS",
                "#JavaScript",
                "#Python",
                "#C++",
                "#Node.js",
                "#Bash",
            ],
        },
        {
            title: "Databases",
            skills: ["#MongoDB", "#Firebase"],
        },
        {
            title: "Others",
            skills: ["#Git", "#Rest APIs", "#GCP", "#Figma"],
        },
    ],
};

export { about, projects, skills };