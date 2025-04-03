import type { TechCategory } from '../types';

export const techCategories: TechCategory[] = [
  {
    name: "Frontend Development",
    description: "Building responsive and interactive user interfaces",
    skills: [
      {
        name: "HTML5/CSS3",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        proficiency: 95,
        description: "Modern semantic HTML and CSS3 with responsive design"
      },
      {
        name: "JavaScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        proficiency: 90,
        description: "ES6+ features, async programming, and DOM manipulation"
      },
      {
        name: "React.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        proficiency: 92,
        description: "Component-based architecture with React hooks and context"
      },
      {
        name: "Next.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
        proficiency: 85,
        description: "Server-side rendering and static site generation"
      },
      {
        name: "Tailwind CSS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
        proficiency: 88,
        description: "Utility-first CSS framework for rapid UI development"
      }
    ]
  },
  {
    name: "Backend Development",
    description: "Creating scalable server-side applications and APIs",
    skills: [
      {
        name: "Node.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        proficiency: 88,
        description: "Server-side JavaScript runtime environment"
      },
      {
        name: "Express.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
        proficiency: 85,
        description: "Web application framework for Node.js"
      },
      {
        name: "PostgreSQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
        proficiency: 82,
        description: "Open-source relational database"
      },
      {
        name: "MongoDB",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
        proficiency: 80,
        description: "NoSQL database for modern applications"
      },
      {
        name: "Firebase",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
        proficiency: 85,
        description: "Backend-as-a-Service platform by Google"
      }
    ]
  },
  {
    name: "Machine Learning & AI",
    description: "Developing intelligent systems and data analysis",
    skills: [
      {
        name: "Python",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
        proficiency: 90,
        description: "Primary language for ML and data science"
      },
      {
        name: "TensorFlow",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
        proficiency: 82,
        description: "Open-source ML framework by Google"
      },
      {
        name: "PyTorch",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg",
        proficiency: 78,
        description: "Deep learning framework with dynamic computation"
      },
      {
        name: "NumPy",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg",
        proficiency: 85,
        description: "Fundamental package for scientific computing"
      }
    ]
  },
  {
    name: "Tools & DevOps",
    description: "Version control, deployment, and development tools",
    skills: [
      {
        name: "Git",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
        proficiency: 92,
        description: "Distributed version control system"
      },
      {
        name: "Docker",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
        proficiency: 80,
        description: "Containerization platform for applications"
      },
      {
        name: "AWS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",
        proficiency: 75,
        description: "Cloud computing services platform"
      },
      {
        name: "GitHub Actions",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
        proficiency: 85,
        description: "CI/CD automation and workflows"
      }
    ]
  }
];