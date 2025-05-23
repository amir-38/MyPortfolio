import icon2 from "../assets/icon2.webp";
import server from "../assets/server.webp";
import icon1 from "../assets/icon1.webp";
import searching from "../assets/searching.webp";

export const SKILLS = [
  {
    title: "Frontend",
    icon: icon2,
    skills: [
      { skill: "HTML5", percentage: "89%" },
      { skill: "CSS3(Sass/SCSS)", percentage: "81%" },
      { skill: "JavaScript", percentage: "62%" },
    ],
  },
  {
    title: "Libraries",
    icon: server,
    skills: [
      { skill: "React.js", percentage: "75%" },
      { skill: "Bootstrap", percentage: "84%" },
      { skill: "NPM", percentage: "67%" },
    ],
  },
  {
    title: "Tools",
    icon: icon1,
    skills: [
      { skill: "GitHub", percentage: "87%" },
      { skill: "Wisual Studio Code", percentage: "90%" },
      { skill: "Responsive Design", percentage: "73%" },
    ],
  },
  {
    title: "Soft Skills",
    icon: searching,
    skills: [
      { skill: "Problem-solving", percentage: "81%" },
      { skill: "Collaboration", percentage: "85%" },
      { skill: "Attention to Details", percentage: "96%" },
    ],
  },
];

export const WORK_EXPERIENCE = [
  {
    title: "Web Application Project 'EdVentureAI'",
    date: "https://github.com/amir-38/haccaton-edventureai",
    responsibilities: [
      "Leveraging the power of Python for backend development, this web application utilizes sophisticated algorithms to assist students in identifying their ideal career paths.",
      "Built with React.js, the front-end delivers a seamless and interactive user experience, perfectly complementing the intelligent Python-driven backend.",
      "The application's design is meticulously crafted using HTML and CSS, ensuring a responsive and visually appealing interface tailored for student engagement.",
      "Integrating various APIs for comprehensive data analysis and utilizing Node.js for scalable server-side operations, the application provides reliable and efficient career guidance based on AI-driven insights.",
    ],
  },
  {
    title: "React Portfolio Website",
    date: "https://github.com/amir-38/My-portfolio-website-react",
    responsibilities: [
      "I have implemented advanced front-end features using React.js, leveraging its component-based architecture to create efficient and interactive user interfaces.",
      "My projects consistently demonstrate a strong command of HTML and CSS, ensuring structured, accessible, and visually appealing web layouts.",
      "With a focus on responsive design, I utilize CSS and React.js to ensure that my websites are visually compelling and function seamlessly across all devices.",
    ],
  },
  {
    title: "ClockWidget",
    date: "https://github.com/amir-38/ClockWidget",
    responsibilities: [
      "Electron: ClockWidget is developed using Electron, a platform for building cross-platform applications using web technologies.",
      "HTML/CSS/JavaScript: Standard web technologies HTML, CSS, and JavaScript are used for developing the user interface and application logic.",
      "Node.js: Node.js is used for package management and application building.",
      "NSIS (Nullsoft Scriptable Install System): NSIS is used for creating the installation package for Windows.",
    ],
  },
  {
    title: "Online Food Market ",
    date: "https://github.com/amir-38/market-react",
    responsibilities: [
      "Our website blends the charm of a traditional pizzeria with the efficiency of modern web technologies, utilizing HTML, CSS, and React to create an inviting and visually appealing online space.",
      "At the core of our digital experience is a powerful combination of JavaScript and a JSON-based server, ensuring a fluid and responsive process for ordering your favorite pizzas online.",
      "Each element of our website is carefully crafted to mirror the warmth and authenticity of an Italian pizza kitchen, providing a user-friendly platform that enhances the joy of pizza ordering.",
      "From the intuitive interface to the seamless checkout process, our website leverages advanced web development techniques to bring the delightful experience of a pizzeria visit right to your fingertips.",
    ],
  },
];
