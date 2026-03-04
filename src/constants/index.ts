// Portfolio constants — Fairoos Palakkal

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  python,
  html,
  css,
  reactjs,
  fastapi,
  tailwind,
  nodejs,
  swagger,
  git,
  docker,
  roboflow,
  yolo,
  tensorflow,
  excelr,
  togle_labs,
  emirates_id,
  face_recognition,
  number_plate,
  trade_license,
  github,
  linkedin,
} from "../assets";

// Navbar Links
export const NAV_LINKS = [
  {
    id: "about",
    title: "About",
    link: null,
  },
  {
    id: "work",
    title: "Work",
    link: null,
  },
  {
    id: "contact",
    title: "Contact",
    link: null,
  },
  {
    id: "source-code",
    title: "Source Code",
    link: "https://github.com/fairooos",
  },
] as const;

// Services
export const SERVICES = [
  {
    title: "AI Developer",
    icon: mobile,
  },
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
] as const;

// Technologies
export const TECHNOLOGIES = [
  {
    name: "Python",
    icon: python,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "FastAPI",
    icon: fastapi,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "YOLOv8",
    icon: yolo,
  },
  {
    name: "TensorFlow",
    icon: tensorflow,
  },
  {
    name: "Roboflow",
    icon: roboflow,
  },
  {
    name: "Swagger",
    icon: swagger,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Docker",
    icon: docker,
  },
] as const;

// Experiences
export const EXPERIENCES = [
  {
    title: "Data Scientist Intern",
    company_name: "EXCELR Edtech Pvt Ltd",
    icon: excelr,
    iconBg: "#0891B2",
    date: "Jul 2024 – Apr 2025",
    points: [
      "Built and optimized machine learning models for classification and predictive tasks.",
      "Processed large datasets, performed feature engineering, and conducted exploratory data analysis (EDA).",
      "Created and monitored AI workflows and data pipelines, ensuring high model performance and stability.",
      "Designed Python-based tools for data processing, feature engineering, and model evaluation.",
    ],
  },
  {
    title: "Backend Developer",
    company_name: "Togle Labs",
    icon: togle_labs,
    iconBg: "#4338CA",
    date: "Jul 2025 – Present",
    points: [
      "Developed high-performance REST APIs using FastAPI, leveraging async/await and Pydantic schemas.",
      "Designed and integrated Server-Sent Events (SSE) to stream real-time billing and system updates without client-side polling.",
      "Implemented robust request validation, error handling, and API documentation using OpenAPI/Swagger.",
      "Optimized backend services for scalability and reliability, structuring modular FastAPI applications for large-scale systems.",
    ],
  },
] as const;

// Projects
export const PROJECTS = [
  {
    name: "Trade License Detector",
    description:
      "Developed an OCR-based Trade License Detector to automatically extract and validate key business details from trade license documents.",
    tags: [
      { name: "python", color: "blue-text-gradient" },
      { name: "opencv", color: "green-text-gradient" },
      { name: "ocr", color: "pink-text-gradient" },
    ],
    image: trade_license,
    source_code_link:
      "https://github.com/Fairoos-palakkal/trade-license-ocr.git",
    live_site_link:
      "https://github.com/Fairoos-palakkal/trade-license-ocr.git",
  },
  {
    name: "Face Recognition for Retail Loyalty",
    description:
      "Developed a real-time face recognition based attendance system using Python and OpenCV for retail loyalty optimization.",
    tags: [
      { name: "python", color: "blue-text-gradient" },
      { name: "opencv", color: "green-text-gradient" },
      { name: "deep-learning", color: "pink-text-gradient" },
    ],
    image: face_recognition,
    source_code_link:
      "https://github.com/Fairoos-palakkal/Facebased-Attendence-Project.git",
    live_site_link:
      "https://github.com/Fairoos-palakkal/Facebased-Attendence-Project.git",
  },
  {
    name: "Number Plate Detection OCR",
    description:
      "Developed an OCR-based Number Plate Detection system to automatically extract and validate vehicle registration details from images.",
    tags: [
      { name: "python", color: "blue-text-gradient" },
      { name: "yolov8", color: "green-text-gradient" },
      { name: "easyocr", color: "pink-text-gradient" },
    ],
    image: number_plate,
    source_code_link:
      "https://github.com/Fairoos-palakkal/License-plate-recognition.git",
    live_site_link:
      "https://github.com/Fairoos-palakkal/License-plate-recognition.git",
  },
  {
    name: "Emirates ID & Passport API",
    description:
      "Built a full-stack OCR system to automatically extract structured data from Emirates ID and Passport documents using custom-trained deep learning models.",
    tags: [
      { name: "fastapi", color: "blue-text-gradient" },
      { name: "deep-learning", color: "green-text-gradient" },
      { name: "ocr", color: "pink-text-gradient" },
    ],
    image: emirates_id,
    source_code_link:
      "https://github.com/Fairoos-palakkal/License-plate-recognition.git",
    live_site_link:
      "https://github.com/Fairoos-palakkal/License-plate-recognition.git",
  },
] as const;

// Social Links
export const SOCIALS = [
  {
    name: "GitHub",
    icon: github,
    link: "https://github.com/fairooos",
  },
  {
    name: "LinkedIn",
    icon: linkedin,
    link: "https://linkedin.com/in/mohammed-fairoos",
  },
] as const;
