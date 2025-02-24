const getColorClass = (tech) => {
    switch (tech) {
      case "#Bash":
        return "bash";
      case "#Cryptography":
        return "cryptography";
      case "#C++":
      return "cplus";
      case "#JavaScript":
        return "javascript";
      case "#TypeScript":
        return "typescript";
      case "#HTML":
        return "html";
      case "#CSS":
        return "css";
      case "#Git":
        return "git";
      case "#Node.js":
        return "nodejs";
      case "#Express.js":
        return "expressjs";
      case "#MongoDB":
        return "mongodb";
      case "#PostgreSQL":
        return "postgresql";
      case "#Next.js":
        return "nextjs";
      case "#Firebase":
        return "firebase";
      case "#Python":
        return "python";
      case "#CI/CD":
        return "cicd";
      case "#AdobeXD":
        return "adobe-xd";
      case "#React.js":
        return "reactjs";
      case "#JWT":
        return "jwt";
      case "#Strapi":
        return "strapi";
      case "#MUI":
        return "mui";
      case "#Figma":
        return "figma";
      case "#ReadyMag":
        return "readymag";
      default:
        return "";
    }
  };
  
  export default getColorClass;