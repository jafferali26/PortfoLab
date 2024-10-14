import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT ="I am a passionate software developer with a strong foundation in Java and web technologies, including React.js and Spring Boot. With hands-on experience in data engineering and web development, I have honed my skills in managing data pipelines on Azure and utilizing SQL databases. My goal is to leverage my expertise in crafting robust and scalable applications to create innovative solutions that drive business growth and deliver exceptional user experiences.";

export const ABOUT_TEXT = "I am a dedicated and versatile software developer with a passion for creating efficient and user-friendly web applications. With hands-on experience in Java, React.js, and Spring Boot, I have developed skills in managing data pipelines on Azure and utilizing SQL databases, including MySQL and PostgreSQL. My journey in software development began with a deep curiosity for how things work, evolving into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I stay active, explore new technologies, and contribute to open-source projects.";

export const EXPERIENCES = [
  {
    year: " june 2024 - Present",
    role: "DATA ENGINEER INTERN",
    company: "GeakMinds",
    description: `Managing data pipelines in Azure, monitoring and
learning about Azure services, and MySQL Server, and
utilizing SQL for data management tasks.`,
    technologies: ["Azure", "MySQL"],
  },
  {
    year: "june 2023 - july ",
    role: "Frontend Developer",
    company: "NSIC",
    description: `Worked on projects involving HTML, CSS, and
JavaScript to enhance web development skills and
gain hands-on experience in building user interfaces.`,
    technologies: ["HTML", "CSS", "Javascript"],
  }
];

export const PROJECTS = [
  {
    title: "Library Management System",
    image: project1, // replace with your actual image variable
    description:
      "A web-based application for managing library operations, including book inventory, member management, and lending processes. It features user authentication, CRUD operations for books and members, and transaction tracking.",
    technologies: ["Spring Boot", "React", "REST APIs", "MySQL"],
  },
  {
    title: "E-commerce Web Application",
    image: project2, // replace with your actual image variable
    description:
      "A comprehensive web application for online shopping that allows users to browse products, add them to a cart, and complete purchases. The system includes user authentication, product management, and order processing, leveraging Object-Oriented Programming principles for modularity and maintainability.",
    technologies: ["Spring Boot", "React", "REST APIs", "MySQL"],
  },
  {
    title: "Portfolio Website",
    image: project3, // replace with your actual image variable
    description:
      "A personal portfolio website showcasing my projects, skills, and experience. The site features a responsive design, smooth navigation, and an aesthetically pleasing layout, built using React for dynamic rendering and Tailwind CSS for customizable styling.",
    technologies: ["React", "Tailwind CSS"],
  },
  {
    title: "Weather Website",
    image: project4, // replace with your actual image variable
    description:
      "A weather forecasting web application that utilizes a Weather API to display current weather conditions and forecasts for different locations, developed with React.",
    technologies: ["React", "Weather API", "CSS"],
  },
  
  
  

];

export const CONTACT = {
  address: "Tenkasi,Tamilnadu ",
  phoneNo: "6381730775",
  email: "jafferali2605@gmail.com",
};
