import { Github, Linkedin, Mail, Twitter, ArrowUp, Brain, Code, Award, Briefcase, Book, Send } from "lucide-react";

import jsIcon from "../assets/JavaScript.svg";
import ReactIcon from "../assets/React-Light.svg";
import HtmlIcon from "../assets/HTML.svg";
import cppIcon from "../assets/CPP.svg";
import RIcon from "../assets/R-Light.svg";
import PyIcon from "../assets/Python-Light.svg";
import FIcon from "../assets/Flutter-Light.svg";
import AngIcon from "../assets/Angular-Light.svg";
import PmanIcon from "../assets/Postman.svg";
import FbIcon from "../assets/Firebase-Light.svg";

import DjIcon from "../assets/Django.svg";
import FkIcon from "../assets/Flask-Light.svg";
import SpIcon from "../assets/Spring-Light.svg";
import KfIcon from "../assets/Kafka.svg";
import NjIcon from "../assets/NodeJS-Light.svg";
import BashIcon from "../assets/Bash-Light.svg";
import ScalaIcon from "../assets/Scala-Light.svg";
import HbIcon from "../assets/Hibernate-Light.svg";
import DIcon from "../assets/Docker.svg";
import sqlIcon from "../assets/MySQL-Light.svg";
import tableauIcon from "../assets/tableau-icon.svg";
import mongoIcon from "../assets/MongoDB.svg";

import gitIcon from "../assets/Github-Light.svg";
import VsIcon from "../assets/VSCode-Light.svg";
import EcIcon from "../assets/Eclipse-Light.svg";
import PcIcon from "../assets/PyCharm-Light.svg";
import AnIcon from "../assets/Anaconda-Light.svg";
import TfIcon from "../assets/TensorFlow-Light.svg";
import OcIcon from "../assets/OpenCV-Light.svg";
import PtIcon from "../assets/PyTorch-Light.svg";
import GcpIcon from "../assets/GCP-Light.svg";
import AWsIcon from "../assets/AWS-Dark.svg";
import AzIcon from "../assets/Azure-Light.svg";
import RasIcon from "../assets/RaspberryPi-Light.svg";
import LIcon from "../assets/Linux-Light.svg";
import Resume from "../assets/KODI_VARUN.pdf";
import scikitLearn from "../assets/SciKitLearn-Light.svg";
import numpy from "../assets/numpy.svg";
import pandas from "../assets/Pandas.svg";

import displayPic from "/IMG_4479.jpg";
import uta from "/University_of_Texas_at_Arlington_seal.png";
import mit from "/MITADT.png";
import codon from "/Codontech.jpeg";
import project1 from "/customer.png.webp";
import project2 from "/defect.webp";
import project3 from "/parkinson.jpg";
import project4 from "/Knowledge.png.webp";
import azure from "/micro.png";
import udemy from "/udemy.png";
import hobby1 from "/read.jpg";
import hobby2 from "/ig1.jpg";
import hobby3 from "/ig2.jpg";
import hobby4 from "/gym.jpg";
import hobby5 from "/medi.jpg";
import hobby6 from "/photo.jpg";

const dataScienceSkills = [
  { name: "Python", icon: PyIcon },
  { name: "Flask", icon: FkIcon },
  { name: "TensorFlow", icon: TfIcon },
  { name: "OpenCV", icon: OcIcon },
  { name: "PyTorch", icon: PtIcon },
  { name: "PyCharm", icon: PcIcon },
  { name: "SciKit", icon: scikitLearn },
  { name: "Numpy", icon: numpy },
  { name: "Pandas", icon: pandas },
  // { name: "JavaScript", icon: jsIcon },
  // { name: "React", icon: ReactIcon },
  // { name: "HTML", icon: HtmlIcon },
  // { name: "Flutter", icon: FIcon },
  // { name: "Angular", icon: AngIcon },
  // { name: "Postman", icon: PmanIcon },
  // { name: "Firebase", icon: FbIcon },
];

const visualizationSkills = [
  { name: "Tableau", icon: tableauIcon},
  // { name: "MongoDB", icon: mongoIcon },
  // { name: "MySQL", icon: sqlIcon },
  // { name: "C++", icon: cppIcon },
  { name: "R", icon: RIcon },
  { name: "Spring", icon: SpIcon },
  { name: "Kafka", icon: KfIcon },
  { name: "NodeJs", icon: NjIcon },
  { name: "Bash", icon: BashIcon },
  { name: "Scala", icon: ScalaIcon },
  { name: "Hibernate", icon: HbIcon },
  { name: "Docker", icon: DIcon },
];

const otherSkills = [
  { name: "Django", icon: DjIcon },
  { name: "Github", icon: gitIcon },
  { name: "VsCode", icon: VsIcon },
  { name: "Eclipse", icon: EcIcon },
  { name: "PyCharm", icon: PcIcon },

  { name: "Anaconda", icon: AnIcon },
  { name: "TensorFlow", icon: TfIcon },
  { name: "OpenCV", icon: OcIcon },
  { name: "PyTorch", icon: PcIcon },
  { name: "GCP", icon: GcpIcon },
  { name: "AWS", icon: AWsIcon },
  { name: "Azure", icon: AzIcon },
  { name: "PyTorch", icon: PtIcon },
  { name: "RasberryPi", icon: RasIcon },
  { name: "Linux", icon: LIcon },
];

function SkillsSection() {
  return (
    <div className="mb-16">
      {/* Title */}

      {/* Skills Container */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Front-end Skills */}
        <div className="bg-white p-6 rounded-xl shadow-2xl">
          <h4 className="text-xl font-semibold mb-4">Data Science</h4>
          <div className="flex flex-wrap gap-4 justify-center">
            {dataScienceSkills.map((skill) => (
              <div key={skill.name} className="flex flex-col items-center w-20">
                <img src={skill.icon} alt={skill.name} className="w-12 h-12 object-contain mb-2" />
                <p className="text-sm text-gray-700">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Back-end Skills */}
        <div className="bg-white p-6 rounded-xl shadow-2xl">
          <h4 className="text-xl font-semibold mb-4">Data Visualization</h4>
          <div className="flex flex-wrap gap-4 justify-center">
            {visualizationSkills.map((skill) => (
              <div key={skill.name} className="flex flex-col items-center w-20">
                <img src={skill.icon} alt={skill.name} className="w-12 h-12 object-contain mb-2" />
                <p className="text-sm text-gray-700">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Other Skills */}
        <div className="bg-white p-6 rounded-xl shadow-2xl">
          <h4 className="text-xl font-semibold mb-4">Others</h4>
          <div className="flex flex-wrap gap-4 justify-center">
            {otherSkills.map((skill) => (
              <div key={skill.name} className="flex flex-col items-center w-20">
                <img src={skill.icon} alt={skill.name} className="w-12 h-12 object-contain mb-2" />
                <p className="text-sm text-gray-700">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="text-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Heading */}
        <h2 className="text-4xl font-bold text-center mb-6 flex items-center justify-center">
          <Send className="mr-4 text-blue-500" size={32} />
          Get In Touch
        </h2>

        <div className="flex justify-around">
          {/* LEFT SIDE: Contact Info */}
          <div className="flex flex-col justify-center align-middle">
            <h3 className="text-2xl font-semibold">Let’s Connect</h3>
            <p className="text-gray-600 leading-relaxed">Feel free to reach out for collaborations...</p>
          </div>
          {/* Contact Details */}
          <div className="flex flex-col justify-around space-y-4">
            <div className="flex items-center">
              <Mail className="text-blue-500 mr-2" />
              <span className="text-blue-500 hover:underline">sarthakhatwar1606@gmail.com</span>
            </div>

            <div className="flex items-center">
              <Linkedin className="text-blue-500 mr-2" />
              <a
                href="https://linkedin.com/in/sarthakhatwar1606"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline">
                linkedin.com/in/sarthakhatwar1606
              </a>
            </div>
            <div className="flex items-center">
              <Github className="text-blue-500 mr-2" />
              <a
                href="https://github.com/Sarthakhatwar1606"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline">
                github.com/Sarthakhatwar1606
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function App() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 custom-font">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/80 backdrop-blur-sm z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="text-2xl font-semibold text-gray-800">
              <span className="font-light">&lt;</span>
              Sarthak Hatwar
              <span className="font-light">/&gt;</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-600 hover:text-gray-900">
                Home
              </a>
              <a href="#education" className="text-gray-600 hover:text-gray-900">
                Education
              </a>
              <a href="#experience" className="text-gray-600 hover:text-gray-900">
                Experience
              </a>
              <a href="#project" className="text-gray-600 hover:text-gray-900">
                Projects
              </a>

              <a href="#skills" className="text-gray-600 hover:text-gray-900">
                Skills & Certifications
              </a>
              <a href="#contact" className="text-gray-600 hover:text-gray-900">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-around">
            <div className="md:w-1/2">
              <h1 className="text-5xl font-bold text-gray-900 mb-6">Hi, I'm Sarthak Hatwar</h1>
              <p className="text-xl text-gray-600 mb-8">
                A dedicated Data Science professional with a strong foundation in Machine Learning, Deep Learning, and Data Analysis.
                Passionate about leveraging data-driven insights to solve complex problems and drive innovation. Currently pursuing a
                Masters in Data Science at UTA, committed to continuous learning and impactful contributions.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/Sarthakhatwar1606"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition">
                  <Github size={24} />
                </a>
                <a
                  href="https://linkedin.com/in/sarthakhatwar1606"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-500 transition">
                  <Linkedin size={24} />
                </a>
                <a
                  href="mailto:sarthakhatwar1606@gmail.com"
                  className="p-2 bg-red-600 text-white rounded-full hover:bg-red-500 transition">
                  <Mail size={24} />
                </a>
              </div>
              {/* TODO: replace resume in assets */}
              <a href={Resume} download="my_resume" target="_blank">
                <button className="bg-blue-400 hover:bg-blue-500 text-gray-800 font-bold mt-6 py-2 px-4 rounded inline-flex items-center">
                  <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
                  </svg>
                  <span>Download CV</span>
                </button>
              </a>
            </div>
            <div className="md:w-1/3 mt-12 md:mt-0">
              <img src={displayPic} alt="Data Science Illustration" className="rounded-lg shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 flex items-center justify-center">
            <Book className="mr-4 text-blue-500" />
            Education
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-2xl flex justify-around">
              <div className="flex-col">
                <h3 className="text-2xl font-semibold mb-2">Master of Science</h3>
                <p className="text-gray-600 mb-2 text-lg">Data Science</p>
                <p className="text-gray-500">University of Texas at Arlington, 2023–2025</p>
                <p className="text-gray-500">CGPA: 3.67/4</p>
              </div>
              <div className="p-4 rounded-md">
                <img src={uta} alt="data_science" className="h-12 " />
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-2xl flex justify-around">
              <div className="flex-col">
                <h3 className="text-2xl font-semibold mb-2">Bachelor of Technology</h3>
                <p className="text-gray-600 mb-2 text-lg">Computer Science </p>
                <p className="text-gray-500">MIT ADT University, Pune, 2019-2023</p>
                <p className="text-gray-500">CGPA: 8/10 </p>
              </div>
              <div className="p-4 rounded-md">
                <img src={mit} alt="computer_science" className="h-12" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 flex items-center justify-center">
            <Briefcase className="mr-4 text-green-500" />
            Experience
          </h2>
          <div className="bg-white p-6 rounded-xl shadow-2xl">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-2xl font-semibold mb-2">Data Engineer Intern</h3>
                <p className="text-gray-600">CODON Tech </p>
                <p className="text-gray-500">August 2022 - July 2022</p>
              </div>
              <img src={codon} alt="Codon" className="h-8" />
            </div>
            <ul className="mt-4 ml-4 space-y-2 list-disc list-outside text-gray-600 text-justify">
              <li>
                Engineered an automated tumor detection solution leveraging OpenCV and OCR, achieving 74.31% precision in real-time
                detection while streamlining data analytics for informed decision-making.
              </li>

              <li>
                Processed and analyzed over 5,000 MRI and CT scan images, establishing robust data pipelines that supported early
                detection and actionable treatment insights.
              </li>
              <li>
                Optimized data quality by implementing image preprocessing techniques such as contrast enhancement and noise reduction,
                improving image clarity by 30% and enhancing overall data accuracy for statistical process controls.
              </li>

              <li>
                Automated extraction of 5 key tumor features (shape, size, density, texture, location) using a CNN, furnishing
                clinicians with standardized, objective data to support trend analysis and Excel report building.
              </li>
              <li>
                Enhanced computational efficiency through GPU acceleration, reducing processing time by 40% and enabling real-time data
                analytics and visualization.
              </li>
            </ul>
            <h1 className="mt-4 text-xl font-bold text-center flex items-center">
              <Code className="mr-2 text-green-500" />
              Skills Acquired
            </h1>

            <div className="flex mt-2 flex-wrap gap-3 bg-gray-100 p-4 rounded-lg">
              {["Python", "CNN", "TensorFlow", "Keras", "Machine Learning", "Data Visualization", "MySQL"].map((skill, index) => (
                <span key={index} className="bg-gray-700 text-gray-200 text-bold text-sm px-4 py-1 rounded-full">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Project Section */}
      <section id="project" className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 flex items-center justify-center">
            <Code className="mr-4 text-green-500" />
            Projects
          </h2>
          <div className="bg-white p-6 rounded-xl shadow-2xl">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-2xl font-semibold mb-2">Customer Churn Prediction</h3>

                <p className="text-gray-500">Spetember 2024 - Januray 2025</p>
              </div>
              <img src={project1} className="h-8" />
            </div>
            <ul className="mt-4 ml-4 space-y-2 list-disc list-outside text-gray-600 text-justify">
              <li>
                Built a predictive model leveraging a fine-tuned XGBoost classifier to detect potential customer churn in a large
                telecom dataset, achieving 92% accuracy. Performed data preprocessing, feature engineering, and exploratory data
                analysis (EDA) to identify critical churn drivers such as contract length, monthly charges, and customer service
                interactions.
              </li>

              <li>
                Implemented SMOTE (Synthetic Minority Over-sampling Technique) to address class imbalance, improving model sensitivity
                for churn detection by 15%.
              </li>

              <li>
                Designed an interactive Tableau dashboard to analyze churn patterns, built a real-time prediction model with Flask and
                AWS integrated into the company’s CRM, and delivered data-driven retention strategies,potentially reducing churn by
                20%.
              </li>
            </ul>
            <h1 className="mt-4 text-xl font-bold text-center flex items-center">
              <Code className="mr-2 text-green-500" />
              Tools Used
            </h1>

            <div className="flex mt-2 flex-wrap gap-3 bg-gray-100 p-4 rounded-lg">
              {[
                "Python",
                "Pytorch",
                "TensorFlow",
                "Keras",
                "Machine Learning",
                "Data Visualization",
                "MySQL",
                "OpenCV",
                "EDA",
                "Tableau",
                "Flask",
              ].map((skill, index) => (
                <span key={index} className="bg-gray-700 text-gray-200 text-bold text-sm px-4 py-1 rounded-full">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-2xl mt-6">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-2xl font-semibold mb-2">Defect detection on metallic components using object detection models</h3>

                <p className="text-gray-500">Janurary 2024 - April 2024</p>
              </div>
              <img src={project2} className="h-8" />
            </div>
            <ul className="mt-4 ml-4 space-y-2 list-disc list-outside text-gray-600 text-justify">
              <li>
                Enhanced defect detection accuracy by implementing PyTorch-based models, achieving 48% validation accuracy using mAP
                (mean average precision) as a performance metric across varied defect types.{" "}
              </li>

              <li>
                Improved data variability and feature extraction by 30% through OpenCV-based image augmentation, including rotation and
                scaling, ensuring robust model performance on diverse samples.
              </li>

              <li>
                Benchmarked Faster R-CNN, YOLO-5, and YOLO-8 models, with YOLO-8 emerging as the best-performing model for defect
                identification on metallic surfaces.
              </li>
            </ul>
            <h1 className="mt-4 text-xl font-bold text-center flex items-center">
              <Code className="mr-2 text-green-500" />
              Tools Used
            </h1>

            <div className="flex mt-2 flex-wrap gap-3 bg-gray-100 p-4 rounded-lg">
              {["Python", "CNN", "TensorFlow", "Keras", "Machine Learning", "MySQL", "OpenCV", "PyTorch"].map((skill, index) => (
                <span key={index} className="bg-gray-700 text-gray-200 text-bold text-sm px-4 py-1 rounded-full">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-2xl mt-6">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-2xl font-semibold mb-2">Parkinson’s Disease Detection using Handwriting</h3>

                <p className="text-gray-500">September 2022 - May 2023</p>
              </div>
              <img src={project3} className="h-8" />
            </div>
            <ul className="mt-4 ml-4 space-y-2 list-disc list-outside text-gray-600 text-justify">
              <li>
                Designed a diagnostic system utilizing a custom dataset of 2,000+ handwriting samples, achieving 98.5% accuracy with
                VGG16 for early Parkinson’s detection.
              </li>

              <li>
                Incorporated features such as pen pressure, writing speed, and spiral patterns, leading to an 87.5% accuracy rate with
                a multimodel detection model.
              </li>
              <li>
                Developed a non-invasive handwriting analysis method, integrating machine learning and deep learning techniques to
                improve early diagnosis rates.
              </li>
            </ul>
            <h1 className="mt-4 text-xl font-bold text-center flex items-center">
              <Code className="mr-2 text-green-500" />
              Tools Used
            </h1>

            <div className="flex mt-2 flex-wrap gap-3 bg-gray-100 p-4 rounded-lg">
              {["Python", "CNN", "Data Visualization", "MySQL", "Flask", "Tableau", "TensorFlow", "Keras", "Machine Learning"].map(
                (skill, index) => (
                  <span key={index} className="bg-gray-700 text-gray-200 text-bold text-sm px-4 py-1 rounded-full">
                    {skill}
                  </span>
                )
              )}
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-2xl mt-6">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-2xl font-semibold mb-2">Knowledge Distillation</h3>

                <p className="text-gray-500">February 2022 - May 2022</p>
              </div>
              <img src={project4} className="h-8" />
            </div>
            <ul className="mt-4 ml-4 space-y-2 list-disc list-outside text-gray-600 text-justify">
              <li>
                Transferred knowledge from a large instructor model to MobileNetV2, reducing the model size by 60% while maintaining
                functionality for real-world applications.
              </li>

              <li>
                Applied NETB4 methodology to refine training, decreasing MobileNetV2 parameters by 50% while preserving performance
                compa- rable to the original model.
              </li>
              <li>
                Created a lightweight model optimized for deployment in resource-constrained environments, maintaining a balance
                between com- pactness and accuracy. This ensured efficient performance without sacrificing reliability.
              </li>
            </ul>
            <h1 className="mt-4 text-xl font-bold text-center flex items-center">
              <Code className="mr-2 text-green-500" />
              Tools Used
            </h1>

            <div className="flex mt-2 flex-wrap gap-3 bg-gray-100 p-4 rounded-lg">
              {["Python", "CNN", "TensorFlow", "Keras", "Machine Learning", "Data Visualization", "MySQL"].map((skill, index) => (
                <span key={index} className="bg-gray-700 text-gray-200 text-bold text-sm px-4 py-1 rounded-full">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills & Certifications Section */}
      <section id="skills" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 flex items-center justify-center">
            <Code className="mr-4 text-purple-500" />
            Skills & Certifications
          </h2>

          {/* Skills */}
          <div className="mb-8">
            <div className="md:grid-cols-2 gap-8">
              <SkillsSection />
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 flex items-center">
              <Award className="mr-2 text-yellow-500" />
              Certifications
            </h3>
            <div className="bg-white p-6 rounded-xl shadow-2xl mt-6">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-2xl font-semibold mb-2">AWS Certified Data Engineer - Associate</h3>
                  <a
                    href="https://cp.certmetrics.com/amazon/en/public/verify/credential/b1092b03cfd746bd8dac44d1aa6c0b4c"
                    target="_blank" className="text-blue-600 underline">
                    Link
                  </a>
                </div>
                <div className=" p-4 rounded-md">
                  <img src={AWsIcon} alt="AWS" className="h-12" />
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-white p-6 rounded-xl shadow-2xl mt-6">
              <div className="flex items-start justify-between">
                <h3 className="text-2xl font-semibold mb-2">Microsoft Azure AZ-900</h3>
                <div className=" p-4 rounded-md">
                  <img src={azure} alt="Azure" className="h-12" />
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-white p-6 rounded-xl shadow-2xl mt-6">
              <div className="flex items-start justify-between">
                <h3 className="text-2xl font-semibold mb-2">AI/ML with python</h3>
                <div className=" p-4 rounded-md">
                  <img src={udemy} alt="AI/ML" className="h-12" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Hobbies Section */}
      <section id="hobbies" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 flex items-center justify-center">
            <span className="mr-4 text-pink-500">🎯</span>
            Hobbies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 border rounded-lg bg-white shadow-2xl">
              <div className="flex items-center mb-2">
                <img src={hobby1} alt="i1" className="h-15" />
              </div>
              <h1 className="text-xl font-semibold text-center">Reading Tech Blogs</h1>
            </div>
            <div className="p-6 border rounded-lg bg-white shadow-2xl">
              <div className="flex items-center mb-2">
                <img src={hobby2} alt="i2" className="h-15" />
              </div>
              <h1 className="text-xl font-semibold text-center">Basketball</h1>
            </div>
            <div className="p-6 border rounded-lg bg-white shadow-2xl">
              <div className="flex items-center mb-2 ">
                <img src={hobby3} alt="i3" className="h-15" />
              </div>
              <h1 className="text-xl font-semibold text-center">Traveling</h1>
            </div>

            <div className="p-6 border rounded-lg bg-white shadow-2xl">
              <div className="flex items-center mb-2">
                <img src={hobby4} alt="i4" className="h-15" />
              </div>
              <h1 className="text-xl font-semibold text-center">Fitness & Gym</h1>
            </div>

            <div className="p-6 border rounded-lg bg-white shadow-2xl">
              <div className="flex items-center mb-2">
                <img src={hobby5} alt="i4" className="h-15" />
              </div>
              <h1 className="text-xl font-semibold text-center">Meditation</h1>
            </div>

            <div className="p-6 border rounded-lg bg-white shadow-2xl">
              <div className="flex items-center mb-2">
                <img src={hobby6} alt="i4" className="h-15" />
              </div>
              <h1 className="text-xl font-semibold text-center">Photography</h1>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="pt-10 pb-24">
        <div className="max-w-7xl mx-auto px-4">
          <ContactSection />
        </div>
      </section>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-5 p-2 bg-gray-800 text-white rounded-full shadow-2xl hover:bg-gray-700 transition">
        <ArrowUp size={24} />
      </button>
    </div>
  );
}

export default App;
