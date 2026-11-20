import { advancedPython, advancedWebDevelopment, aiCertificate, basicWebDevelopment, dataAnalytics, introToCoding, introToPython, introToWebDevelopment, pythonAi } from "@/lib/site-assets";

export const GITHUB = "https://github.com/ginedou0315";
export const TABLEAU = "https://public.tableau.com/app/profile/ginelle.doubek/vizzes";
export const SHECODES = "https://www.shecodes.io/graduates/77662-ginelle-doubek";
export const NETLIFY = "https://app.netlify.com/teams/ginedou0315/sites";
export const ORIGINAL_SITE_SOURCE = "https://github.com/ginedou0315/ginelle_doubek_resume";

export const certifications = [
  {
    id: "data-analytics",
    title: "Professional Certificate Program in Data Analytics",
    issuer: "Simplilearn · Purdue University",
    url: "https://success.simplilearn.com/85031165",
    image: dataAnalytics.url,
    width: 1164,
    height: 900,
  },
  {
    id: "intro-to-coding",
    title: "Introduction to Coding",
    issuer: "SheCodes",
    url: "https://www.shecodes.io/certificates/de2014f35ca3fe08c5c7c16516f5a395",
    image: introToCoding.url,
    width: 1200,
    height: 848,
  },
  {
    id: "intro-to-web-development",
    title: "Introduction to Web Development",
    issuer: "SheCodes",
    url: "https://www.shecodes.io/certificates/715be762a8e8843700a9fac7b5b7b59c",
    image: introToWebDevelopment.url,
    width: 1200,
    height: 848,
  },
  {
    id: "web-development",
    title: "Web Development",
    issuer: "SheCodes Plus",
    url: "https://www.shecodes.io/certificates/b0534a8f0535df32b6c802e5f86bea49",
    image: basicWebDevelopment.url,
    width: 1200,
    height: 848,
  },
  {
    id: "advanced-web-development",
    title: "Advanced Web Development",
    issuer: "SheCodes Plus Add-on",
    url: "https://www.shecodes.io/certificates/df9eb683b193f826c8f87542c6e77c24",
    image: advancedWebDevelopment.url,
    width: 1200,
    height: 848,
  },
  {
    id: "intro-to-python",
    title: "Introduction to Python Development",
    issuer: "SheCodes Python Basics",
    url: "https://www.shecodes.io/certificates/1119cee0dc00bd7dd2353acf51d5169c",
    image: introToPython.url,
    width: 1200,
    height: 848,
  },
  {
    id: "advanced-python",
    title: "Advanced Python Development",
    issuer: "SheCodes Python Advanced",
    url: "https://www.shecodes.io/certificates/84540bb96675e7184be2f2c182e74734",
    image: advancedPython.url,
    width: 1200,
    height: 848,
  },
  {
    id: "introduction-to-ai",
    title: "Introduction to Artificial Intelligence",
    issuer: "SheCodes AI Add-on",
    url: "https://www.shecodes.io/certificates/b5a7bc9b07de4a74170541d6f8c2f538",
    image: aiCertificate.url,
    width: 1200,
    height: 848,
  },
  {
    id: "python-ai",
    title: "Introduction to AI with Python",
    issuer: "SheCodes Python AI",
    url: "https://www.shecodes.io/certificates/f4657c695ebf4c8ea523e4e2d9c9094e",
    image: pythonAi.url,
    width: 1200,
    height: 848,
  },
] as const;

export const projectLinks = [
  { id: "world-clock", url: "https://ephemeral-pasca-7021d5.netlify.app/" },
  { id: "weather-app", url: "https://ginnys-weather-app.netlify.app/" },
  { id: "weather-forecast", url: "https://ginnys-weather-forecast-project.netlify.app/" },
  { id: "recipe-ai", url: "https://ginnysrecipegenerator.netlify.app/" },
  { id: "travel-website", url: "https://travel-prague-website.netlify.app/" },
  { id: "puzzle-peg-cross", url: "https://fascinating-jelly-9525db.netlify.app/" },
] as const;

export const otherProjectLinks = [
  {
    id: "basic-web",
    title: "Basic Web Development Project",
    url: "https://www.shecodes.io/cohorts/2212/projects/2468393",
  },
  {
    id: "python",
    title: "Python Project",
    url: "https://replit.com/@giballesfin/Python-Advanced-Final-Project",
  },
  {
    id: "python-ai",
    title: "Python AI Project",
    url: "https://colab.research.google.com/drive/19p6SMy2vq8Bqj_rkM9ZbZNbbu7trh1CQ?usp=sharing",
  },
] as const;

export const technicalSkills = [
  "Salesforce",
  "Power BI",
  "Tableau",
  "Excel",
  "SQL",
  "Python",
  "R",
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Bootstrap",
  "Responsive design",
  "API",
  "Axios",
  "Git",
  "GitHub",
  "VSCode",
  "Hosting",
  "SEO",
  "Data structures",
  "OOP",
  "File manipulation",
  "Data visualization",
  "Data manipulation",
  "AI",
  "Microsoft Windows",
] as const;
