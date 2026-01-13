import { Code2, Database, Smartphone, Brain, Globe, Server } from 'lucide-react';

export const personalInfo = {
  name: "Pranali More",
  roles: ["Computer Science Student", "Web & Android Developer", "Machine Learning Enthusiast"],
  tagline: "Building intelligent solutions through code, curiosity, and continuous learning.",
  email: "pranalibhagwatmore@gmail.com",
  // phone: "+91 9876543210",
  location: "India",
  github: "https://github.com/pranaliBmore",
  linkedin: "https://www.linkedin.com/in/pranali-more/",
};

export const skills = [
  {
    category: "Programming Languages",
    icon: Code2,
    color: "primary",
    items: [
      { name: "Python", level: 90, description: "ML models, data analysis, automation scripts" },
      { name: "Java", level: 85, description: "Android development, OOP applications" },
      { name: "JavaScript", level: 80, description: "Full-stack web applications" },
      { name: "C/C++", level: 75, description: "Algorithms, data structures" },
    ],
  },
  {
    category: "Web Development",
    icon: Globe,
    color: "secondary",
    items: [
      {name: "HTML", level: 90, description: "Semantic markup and structured web content"},
      {name: "CSS", level: 90, description: "Responsive, accessible, and modern styling"},
      // { name: "React", level: 85, description: "Dynamic SPAs, component architecture" },
      // { name: "HTML/CSS", level: 90, description: "Responsive, accessible interfaces" },
      // { name: "Node.js", level: 75, description: "REST APIs, server-side logic" },
      // { name: "Tailwind CSS", level: 85, description: "Utility-first styling" },
      { name: "JavaScript", level: 80, description: "Full-stack web applications" },
    ],
  },
  {
    category: "Android Development",
    icon: Smartphone,
    color: "primary",
    items: [
      { name: "Android Studio", level: 80, description: "Native Android applications" },
      // { name: "Kotlin", level: 70, description: "Modern Android development" },
      { name: "Firebase", level: 75, description: "Backend services, authentication" },
      // { name: "Material UI", level: 80, description: "Android design patterns" },
    ],
  },
  {
    category: "Databases",
    icon: Database,
    color: "secondary",
    items: [
      { name: "MySQL", level: 85, description: "Relational database design" },
      { name: "MongoDB", level: 70, description: "NoSQL document databases" },
      // { name: "PostgreSQL", level: 65, description: "Advanced SQL operations" },
      { name: "SQLite", level: 75, description: "Mobile database solutions" },
    ],
  },
  {
    category: "Machine Learning & AI",
    icon: Brain,
    color: "primary",
    items: [
      { name: "Scikit-learn", level: 85, description: "Classification, regression, clustering" },
      { name: "Pandas/NumPy", level: 90, description: "Data manipulation, analysis" },
      { name: "TensorFlow", level: 65, description: "Deep learning models" },
      { name: "Data Visualization", level: 80, description: "Matplotlib, Seaborn insights" },
    ],
  },
  {
    category: "Tools & DevOps",
    icon: Server,
    color: "secondary",
    items: [
      { name: "Git/GitHub", level: 85, description: "Version control, collaboration" },
      { name: "VS Code", level: 90, description: "Development environment" },
      { name: "Jupyter", level: 85, description: "Data science notebooks" },
      { "name": "Kaggle", "level": 85, "description": "Platform for data science notebooks and competitions" },
      // { name: "Docker", level: 60, description: "Containerization basics" },
    ],
  },
];

export const experience = [
  {
    id: 1,
    role: "Data Analyst Intern",
    company: "MITU Skillologies",
    duration: "June 2024 - Jully 2024",
    type: "Internship",
    description: "Developed a Credit Card Fraud Detection system using machine learning techniques.",
    highlights: [
      "Preprocessed and cleaned 284,807+ transaction records",
      "Engineered features to improve model accuracy by 15%",
      "Implemented anomaly detection algorithms",
      "Achieved 99.2% accuracy with Random Forest classifier",
    ],
    technologies: ["Python", "Pandas", "Scikit-learn", "Matplotlib", "Seaborn"],
    project: {
      name: "Credit Card Fraud Detection",
      problem: "Identify fraudulent credit card transactions from a highly imbalanced dataset",
      approach: "Applied SMOTE for balancing, feature engineering, and ensemble methods",
      steps: [
        { title: "Data Collection", description: "Gathered anonymized transaction data with 492 frauds out of 284,807 transactions" },
        { title: "Preprocessing", description: "Handled missing values, normalized features, applied PCA for dimensionality" },
        { title: "Feature Engineering", description: "Created time-based features, transaction velocity, amount patterns" },
        { title: "Model Training", description: "Trained Logistic Regression, Random Forest, and XGBoost models" },
        { title: "Evaluation", description: "Used precision-recall curves, ROC-AUC, and confusion matrices" },
      ],
      results: "Achieved 99.2% accuracy with 94% precision on fraud detection",
    },
  },
];

export const projects = [
  {
    id: 1,
    title: "Credit Card Fraud Detection",
    category: "Machine Learning",
    thumbnail: "ml",
    description: "ML-powered system to identify fraudulent transactions in real-time using ensemble methods.",
    problem: "Credit card fraud causes billions in losses annually. Traditional rule-based systems miss sophisticated fraud patterns.",
    solution: "Developed a machine learning pipeline using Random Forest and XGBoost with SMOTE for handling class imbalance.",
    technologies: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
    features: [
      "Real-time fraud prediction API",
      "99.2% detection accuracy",
      "Handles highly imbalanced data",
      "Feature importance visualization",
    ],
    challenges: [
      "Extreme class imbalance (0.17% fraud rate)",
      "Avoiding false positives that harm user experience",
      "Processing large-scale transaction data efficiently",
    ],
    learnings: [
      "Advanced techniques for imbalanced classification",
      "Feature engineering for financial data",
      "Model interpretation and explainability",
    ],
    github: "https://github.com/pranaliBmore/CCFD-PROJECT.git",
    demo: null,
  },
  {
    id: 2,
    title: "Student Helpline Chatbot",
    category: "Web Application",
    thumbnail: "web",
    description: "AI-powered chatbot to assist students with academic queries, campus information, and support services.",
    problem: "Students often struggle to find quick answers to common questions about courses, schedules, and campus resources.",
    solution: "Built an intelligent chatbot using NLP techniques to understand and respond to student queries in real-time.",
    technologies: ["React", "Node.js", "MongoDB", "Natural Language Processing", "REST API"],
    features: [
      "Natural language understanding",
      "24/7 automated support",
      "Multi-topic query handling",
      "Conversation history tracking",
    ],
    challenges: [
      "Training the NLP model with limited data",
      "Handling ambiguous student queries",
      "Ensuring fast response times",
    ],
    learnings: [
      "Building conversational AI interfaces",
      "Full-stack web application development",
      "User experience design for chatbots",
    ],
    github: "https://github.com/pranaliBmore",
    demo: null,
  },
];

export const education = [
  {
    id: 1,
    degree: "B.Tech in Computer Science & Engineering",
    institution: "University Name",
    duration: "2025 - Present",
    status: "Pursuing",
    grade: null,
    highlights: ["Machine Learning", "Data Structures", "Web Development"],
  },
  {
    id: 2,
    degree: "Diploma in Information Technology",
    institution: "Polytechnic Institute",
    duration: "2022 - 2025",
    status: "Completed",
    // grade: "82%",
    highlights: ["Database Management", "Programming Fundamentals", "Networking"],
  },
  {
    id: 3,
    degree: "Secondary School Certificate (SSC)",
    institution: "High School",
    duration: "2014 - 2022",
    status: "Completed",
    // grade: "88.80%",
    highlights: ["Mathematics", "Science", "Computer Science"],
  },
];
