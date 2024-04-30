import algo from "../images/projects/Algorithm.png";
import breadth from "../images/projects/Breadth.png";
import sudoku from "../images/projects/Sudoku.png";
import marico from "../images/projects/marico.png";
import digit from "../images/projects/digit.png";
import sbrc from "../images/projects/sbrc.png";
import cancer from "../images/projects/cancer.png";
import localization from "../images/projects/localization.png";

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
    github: "",
    link: "",
  },
  {
    title: "Algorithm to Code Converter",
    description:
      "Based on a prompt or sequence of algorithms given by a user, the corresponding code in a variety of languages will be generated",
    skills: ["ReactJS", "Django", "RestAPI"],
    image: algo,
    github: "",
    link: "",
  },
  {
    title: "Sudoku Solver",
    description:
      "Implemented a pipeline combining perspective transform and CNN for Sudoku grid digit extraction, followed by Constraint Programming with CPLEX in Python for solving Sudoku puzzles.",
    skills: ["ReactJS", "Django", "CNN", "OpenCV", "CPLEX"],
    image: sudoku,
    github: "",
    link: "",
  },
  {
    title: "Marico Market Analysis",
    description:
      "Leveraged Python pipelines for comprehensive data analyses, automated data tagging with Labelbox and SuperAnnotate for precision, and developed a ReactJS and Firebase frontend with D3JS for dynamic data visualization.",
    skills: ["ReactJS", "D3JS", "Firebase", "Python", "Web Scraping"],
    image: marico,
    github: "",
    link: "",
  },
  {
    title: "Drone Localization",
    description:
      "The project utilizes YOLOv8 for real-time drone detection in images and videos, featuring evaluation metrics like precision-recall curves and a real-time tracking system, alongside visualization tools for result analysis.",
    skills: ["YOLOv8", "OpenCV", "Python"],
    image: localization,
    github: "",
    link: "",
  },
  {
    title: "Handwritten Digit Recognition",
    description:
      "Developed and trained a CNN model achieving over 98% accuracy on MNIST for handwritten digit recognition. Deployed the model via Streamlit, enabling users to draw digits for real-time predictions.",
    skills: ["Streamlit", "Neural Networks", "CNN", "Python"],
    image: digit,
    github: "",
    link: "",
  },
  {
    title: "SBRC Website",
    description:
      "Collaboratively crafted the official website with ReactJS, Framer Motion, and Bootstrap in a four-member team, complemented by Figma wireframes for an engaging UI/UX design.",
    skills: ["ReactJS", "Bootstrap", "Framer Motion", "Python"],
    image: sbrc,
    github: "",
    link: "",
  },
  {
    title: "Cancer Prediction Model",
    description:
      "Created a classification model distinguishing benign and malicious samples, integrated with Streamlit for dynamic parameter adjustment and real-time result retrieval.",
    skills: ["Streamlit", "Logistic Regression", "Python"],
    image: cancer,
    github: "",
    link: "",
  },
];

export default projects;
