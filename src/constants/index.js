import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
} from "../../src/assets";

export const navigation = [
  {
    id: "0",
    title: "Services",
    url: "#services",
  },
  {
    id: "1",
    title: "Pricing",
    url: "#pricing",
  },
  {
    id: "2",
    title: "About",
    url: "#about",
  },
  {
    id: "3",
    title: "Projects",
    url: "#projects",
  },
  {
    id: "4",
    title: "New account",
    url: "#signup",
    onlyMobile: true,
  },
  {
    id: "5",
    title: "Sign in",
    url: "#login",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [
  "Photo generating",
  "Photo enhance",
  "Seamless Integration",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Chatbot",
    text: "a chatbot with various capabilities such as customer support, Information retrieval,Appointment Scheduling and Reservations,Personal Assistance, Entertainment ,Engagement and more",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Game Development",
    text: "An immersive space exploration game developed in C++ where players embark on a thrilling journey through the vast expanse of the galaxy. Players take on the role of a brave explorer tasked with uncovering the mystries of the cosmos .",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "System Development",
    text: "Enterprise Manager Pro is a comprehensive management system developed in C++ designed to streamline and optimize the operation of medium to large-scale enterprises.This robust system offers a wide range of features to help businesses manage their resources,processes and operations efficiently.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Integration with APIs",
    text: "API integration services are a crucial component of modern software development, enabling seamless communication and data exchange between different systems, applications and services.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap4,
  },
];

export const collabText =
  "With smart automation and top-notch security, it's the perfect solution for teams looking to work smarter.";

export const collabContent = [
  {
    id: "0",
    title: "Seamless Integration",
    text: collabText,
  },
  {
    id: "1",
    title: "Smart Automation",
  },
  {
    id: "2",
    title: "Top-notch Security",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Basic",
    description:
      "Our Basic Software Development Package is designed for startups and small businesses looking to build a custom softwear solution to streamline business operations, improve efficiency and enhance your cutomer experience",
    price: "20,000",
    features: [
      "Responsive Design, to look and functions flawlessly on all devices",
      "Database Intergration, a lightweight database to store and manage your application's data effectively",
      "Deployment Assistance, to a web server to make it accessible to your users",
      "Basic Testing and Quality Assurance",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description:
      "Our Premium Software Development Package is ideal for businesses looking for a comprehensive and high-quality custom software solution.This package includes advanced features and functionalities to help your business stand out and achieve its goal",
    price: "50,999",
    features: [
      "Comprehensive Testing and Quality Assurance",
      "Database Intergration and Management",
      "Deployment and Maintenance",
      "Scalability and Performance Optimization",
      "Integration with Third-party Services",
      "Advanced Security Features",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description:
      "Our Enterprise Softwear Development Package is designed for large corporations and organizations with complex requirements and high-performance expectations.This package includes advanced features to support your organization's growth and success.",
    price: null,
    features: [
      "Scalable Architecture",
      "Enterprise-Grade Security",
      "Integration with Enterprise Systems",
      "Advanced Analytics and Reporting",
      "Compliance and Regulatory Requirements",
      "Dedicated Support and Maintenance",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Custom Software Development",
    text: "Tailored softwear solutions designed to meet the specific requirements of clients, ranging from small business to large enterprises",
    backgroundUrl: "assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Web Development",
    text: "Development of custom websites, web applications and e-commerce platforms using various technologies and frameworks",
    backgroundUrl: "assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Software Consulting",
    text: "Providing expert advice on technology, architecture and best practices to help clients make informed decisions about their software projects",
    backgroundUrl: "assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Maintenance and Support",
    text: "Ongoing maintenance,updates and technical support services to ensure the smooth functioning of software applications post-launch",
    backgroundUrl: "assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "Big Data and Analytics",
    text: "Development of solutions for collecting, storing, processing and analyzing large volumes of data to derive valuable insights",
    backgroundUrl: "assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "Artificial Inteligence and Machine Learning",
    text: "Integration of AI and ML technologies into software applications to enable automation, predictive analysis and intelligent decision-making",
    backgroundUrl: "assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];
