import algo from "../images/projects/Algorithm.png";
import breadth from "../images/projects/Breadth.png";
import sudoku from "../images/projects/Sudoku.png";
import marico from "../images/projects/marico.png";
import digit from "../images/projects/digit.png";
import sbrc from "../images/projects/sbrc.png";
import cancer from "../images/projects/cancer.png";
import localization from "../images/projects/localization.png";
import solar from "../images/projects/solar.png";

const projects = [
  {
    title: "Breadth Selection Tool",
    description:
      "Created a Full Stack app merging ReactJS, Firebase, and Django to recommend optimal breadth courses, employing collaborative filtering and search algorithms, and offering interactive UI for weighted preferences.",
    skills: [
      "ReactJS",
      "Django",
      "RestAPI",
      "Firebase",
      "D3JS",
      "Collaborative Filtering",
    ],
    image: breadth,
    github: "https://github.com/benab04/Breadth-Selection-Frontend",
    link: "https://breadth-selection.netlify.app/",
  },
  {
    title: "Algorithm to Code Converter",
    description:
      "Based on a prompt or sequence of algorithms given by a user, the corresponding code in a variety of languages will be generated",
    skills: ["ReactJS", "Django", "RestAPI"],
    image: algo,
    github: "https://github.com/benab04/Algorithm-Code-Generator-Frontend",
    link: "https://algorithm-code.netlify.app/",
  },
  {
    title: "Sudoku Solver",
    description:
      "Implemented a pipeline combining perspective transform and CNN for Sudoku grid digit extraction, followed by Constraint Programming with CPLEX in Python for solving Sudoku puzzles.",
    skills: ["ReactJS", "Django", "CNN", "OpenCV", "CPLEX"],
    image: sudoku,
    github: "https://github.com/benab04/Sudoku-Solver-Frontend",
    link: "https://sudoku-solver-benab04.netlify.app/",
  },
  {
    title: "Marico Market Analysis",
    description:
      "Leveraged Python pipelines for comprehensive data analyses, automated data tagging with Labelbox and SuperAnnotate for precision, and developed a ReactJS and Firebase frontend with D3JS for dynamic data visualization.",
    skills: ["ReactJS", "D3JS", "Firebase", "Python", "Web Scraping"],
    image: marico,
    github: "",
    link: "https://drive.google.com/file/d/1fQC2tuFctDg9fmcKDokZjuFKAjMJDvdj/view",
  },
  {
    title: "Drone Localization",
    description:
      "The project utilizes YOLOv8 for real-time drone detection in images and videos, featuring evaluation metrics like precision-recall curves and a real-time tracking system, alongside visualization tools for result analysis.",
    skills: ["YOLOv8", "OpenCV", "Python"],
    image: localization,
    github: "https://github.com/benab04/Drone-Localization",
    link: "https://colab.research.google.com/drive/1QKrzUchqZYSHeToXNfTdFUv3wskLRMjs?usp=sharing",
  },
  {
    title: "Handwritten Digit Recognition",
    description:
      "Developed and trained a CNN model achieving over 98% accuracy on MNIST for handwritten digit recognition. Deployed the model via Streamlit, enabling users to draw digits for real-time predictions.",
    skills: ["Streamlit", "Neural Networks", "CNN", "Python"],
    image: digit,
    github: "https://github.com/benab04/digit-recognition-streamlit",
    link: "https://digit-recognition-benab04.streamlit.app/",
  },
  {
    title: "SBRC Website",
    description:
      "Collaboratively crafted the official website with ReactJS, Framer Motion, and Bootstrap in a four-member team, complemented by Figma wireframes for an engaging UI/UX design.",
    skills: ["ReactJS", "Bootstrap", "Framer Motion", "Python"],
    image: sbrc,
    github: "https://github.com/benab04/SBRC-website",
    link: "https://sbrc.netlify.app/",
  },
  {
    title: "Cancer Prediction Model",
    description:
      "Created a classification model distinguishing benign and malicious samples, integrated with Streamlit for dynamic parameter adjustment and real-time result retrieval.",
    skills: ["Streamlit", "Logistic Regression", "Python"],
    image: cancer,
    github: "https://github.com/benab04/cancer-predict-streamlit",
    link: "https://cancer-predict-benab04.streamlit.app/",
  },
  // {
  //   title: "To Do App",
  //   description:
  //     "Developed a to-do application with ReactJS frontend and Node.js backend, utilizing MongoDB for data storage, enabling efficient task management and organization.",
  //   skills: ["ReactJS", "ExpressJS", "NodeJS", "MongoDB"],
  //   image: solar,
  //   github: "https://github.com/benab04/FullStack-To-Do-frontend",
  //   link: "https://to-do-benab04.netlify.app/",
  // },
  {
    title: "Dual Axis Solar Tracker",
    description:
      "The dual-axis solar tracker project optimizes solar energy intake by accurately following the Sun's movement using 4 LDRs and an Arduino Uno, offering real-time tracking with the option to incorporate time delays for enhanced energy efficiency.",
    skills: ["Arduino C", "DIY"],
    image: solar,
    github: "",
    link: "https://drive.google.com/file/d/11Dm_58JEql_6SJAI_dEFuUuqarM5Sum8/view",
  },
];

export default projects;
