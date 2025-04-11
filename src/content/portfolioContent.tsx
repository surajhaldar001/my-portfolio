// This file contains content for Suraj Haldar's portfolio website

const portfolioContent = {
    name: "Suraj Haldar",
    title: "Full Stack Developer | React • Angular • ASP.NET",
    location: "Chandrapur, Maharashtra",
    email: "surajhaldar001@gmail.com",
    phone: "8805280126",
    linkedin: "https://www.linkedin.com/in/surajhaldar",
    resumeLink: "/Suraj_SDE.pdf",
  
    about: `
      Versatile Software Development Engineer (SDE 1) with 2 years of expertise in Full Stack Development.
      Proficient in HTML, CSS, JavaScript, Angular, React, and skilled in building robust APIs using ASP.NET.
      Committed to delivering seamless user experiences and contributing innovative solutions across the full development stack.
    `,
  
    skills: [
      "HTML", "CSS", "Bootstrap", "JavaScript", "AngularJS", "Angular", "jQuery", "AJAX", "React.js",
      "TypeScript", "Python", "Node.js", "Express", ".NET", "MS SQL Server", "SQLite3", "Git", "Azure DevOps", "CI/CD", "Kendo UI"
    ],
  
    experience: [
      {
        role: "SDE 1 (Software Development Engineer)",
        company: "iGuru Portal Services Pvt Ltd",
        location: "Hyderabad",
        period: "June 2024 - Present",
        responsibilities: [
          "Led front-end development using Angular, React and Bootstrap for responsive web applications",
          "Designed and implemented RESTful APIs using ASP.NET to support seamless front-end integration",
          "Enhanced API security through JWT-based authentication and role-based authorization",
          "Optimized API performance with asynchronous operations and caching",
          "Integrated microservices and databases via cross-functional team collaboration",
          "Conducted code reviews and mentored junior developers"
        ]
      },
      {
        role: "Frontend Developer",
        company: "iGuru Portal Services Pvt Ltd",
        location: "Hyderabad",
        period: "April 2023 - May 2024",
        responsibilities: [
          "Developed responsive UI using AngularJS, Angular, React and jQuery",
          "Integrated third-party payment gateways securely",
          "Implemented features based on project goals and cross-team planning",
          "Conducted testing and debugging for performance and UX",
          "Maintained version control with Git and Azure DevOps"
        ]
      }
    ],
  
    projects: [
      {
        name: "IPL Dashboard",
        description: "React-based dashboard to view IPL teams, match details, and 404 fallback routes.",
        tech: ["React", "React Router", "REST API", "CSS", "Bootstrap"],
        link: "https://surajipldash.ccbp.tech/"
      },
      {
        name: "Emoji Game",
        description: "Memory-based React game using conditional rendering and state management.",
        tech: ["React", "CSS"],
        link: "https://surajhemoji.ccbp.tech/"
      },
      {
        name: "Food Munch",
        description: "Responsive food catalog site with video previews and search functionality.",
        tech: ["HTML", "CSS", "Bootstrap"],
        link: "https://surajfoodmunch.ccbp.tech/"
      }
    ],
  
    education: [
      {
        degree: "B.E. Mechanical Engineering",
        institution: "Ballarpur Institute of Technology",
        year: "2016 - 2020"
      },
      {
        degree: "HSC (12th)",
        institution: "Indira Jr. College",
        year: "2014 - 2016"
      },
      {
        degree: "SSC (10th)",
        institution: "Chandrapur Public High School",
        year: "2013 - 2014"
      }
    ]
  };
  
  export default portfolioContent;
  