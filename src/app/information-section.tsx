"use client";
import { Typography } from "@material-tailwind/react";
import {
  AcademicCapIcon,
  BriefcaseIcon,
  FireIcon,
} from "@heroicons/react/24/solid";

import InfoCard from "@/components/info-card";

const EDUCATION = [
  {
    id: 1,
    icon: AcademicCapIcon,
    title: "Microsoft Certified: Azure Fundamentals",
    date: "2014",
    children:
      "This certification demonstrates the foundational level knowledge of cloud services and how those services and features are provided within Microsoft Azure to enhance the cloud experience.",
  },
  {
    id: 2,
    icon: AcademicCapIcon,
    title: "Microsoft Certified: Dynamics 365 Fundamentals",
    date: "2014-2016",
    children:
      "This certification demonstrate a functional understanding of Dynamics 365 customer engagement capabilities and Microsoft cloud computing technologies and products.",
  },
  {
    id: 3,
    icon: AcademicCapIcon,
    title: "Professional Scrum Master™ I (PSM I)",
    date: "2014-2016",
    children:
      "This certification demonstrate a fundamental level of Scrum mastery, including the concepts of applying Scrum, and proven an understanding of Scrum as described in the Scrum Guide. This individual has also demonstrated a consistent use of terminology and approach to Scrum.",
  },
  {
    id: 4,
    icon: AcademicCapIcon,
    title: "Bachelor of Engineering (Hons), ICT (Software Engineering) - Singapore Institute of Technology (SIT)",
    date: "2021",
    children:
      "Relevant Coursework: Programming Fundamentals, Web Application Development, Database Design, Project Management, Object Oriented Programming, Software Design Patterns",
  },
  {
    id: 5,
    icon: AcademicCapIcon,
    title: "Diploma in Information Technology - Nanyang Polytechnic (NYP)",
    date: "2015",
    children:
      "Relevant coursework: C# WPF Vending Machine Software, Object Oriented Analysis and Design",
  }
];

const EXPERIENCE = [
  {
    id: 1,
    icon: BriefcaseIcon,
    title: "Systems Analyst - Visa Inc",
    date: "2022 - 2024",
    children:
      "Developed new features and bug fixes for Visa CCRT Web application using C#, JavaScript with ASP.NET Core MVC to improve user experiences and functionalities in certifying payments terminal vendors.",
  },
  {
    id: 2,
    icon: BriefcaseIcon,
    title: "Application Developer - Avanade Inc",
    date: "2021 - 2022",
    children:
      "Won a multimillion-dollar project by developing a Dynamic 365 CRM solution with Amazon Connect integration using C# .NET Core framework, Microsoft Power Platform and REST API Web services.",
  },
  {
    id: 3,
    icon: BriefcaseIcon,
    title: "Technology Consultant Intern - Ernst & Young LLP",
    date: "2020 - 2021",
    children:
      "Designed and developed multiple APIs with C# and .NET framework and API Swagger documentation to achieve project goals successfully for a 20-million-dollar enterprise software. "
      +"Ensured gateway security for more than 200 over APIs by building configurations with API management tools like TYK Dashboard.",
  },
  {
    id: 4,
    icon: BriefcaseIcon,
    title: "Web Developer Intern - Pilgrim Partners Asia",
    date: "2018 - 2018",
    children:
      "Enabled investors to access information on the funds they have invested by developing a Customer Relationship Management (CRM) web application using Python, PHP, HTML and JavaScript with MVC Framework.",
  },
  {
    id: 5,
    icon: BriefcaseIcon,
    title: "Software Quality Assurance Intern - PSA Cooperation Limited",
    date: "2014 - 2014",
    children:
      "Developed test cases and Java test scripts to automate software testing on PORTNET EDI®, documented the results and identified errors during the testing to ensure smooth deployment of the system."
  }
];

const SKILLS = [
  {
    id: 1,
    icon: FireIcon,
    title: "Front-End Frameworks",
    date: "Technical Skills",
    children:
      "Competent in working with front-end frameworks such as React, Bootstrap, C# Razor Pages, Javascript, jQuery and AJAX to develop dynamic and responsive web applications with a focus on user experience.",
  },
  {
    id: 2,
    icon: FireIcon,
    title: "Attention to Detail",
    date: "Soft Skills",
    children:
      "Meticulous attention to detail in code quality, user interface design, and testing to ensure error-free and user-friendly web applications.",
  },
  {
    id: 3,
    icon: FireIcon,
    title: "Responsive Web Design",
    date: "Technical Skills",
    children:
      "Skilled in creating responsive layouts using CSS Grid, Flexbox, and media queries. Ensures websites adapt seamlessly to various screen sizes and devices.",
  },
  {
    id: 4,
    icon: FireIcon,
    title: "Time Management",
    date: "Soft Skills",
    children:
      "Excellent time management skills to meet project deadlines, prioritize tasks effectively, and handle multiple projects simultaneously.",
  },
  {
    id: 5,
    icon: FireIcon,
    title: "Back-End Framework",
    date: "Technical Skills",
    children:
      "Competent in working with back-end frameworks such as C# .NET Core MVC, ASP.NET, SQL and Python scripting to developed maintainable and scalable backend application",
  },
  {
    id: 6,
    icon: FireIcon,
    title: "Communication",
    date: "Soft Skills",
    children:
      "Excellent communications skills to meet project deadlines, prioritize tasks effectively, and handle multiple projects simultaneously.",
  }
];

const PROJECTS = [
  {
    id: 1,
    icon: FireIcon,
    title: "Simple Weather Application",
    date: "Project",
    children:
      "Weather Application using ASP .NET Core MVC Framework based on the following Database Table. The data presented here are sample data without any real world reference."
  },
  {
    id: 2,
    icon: FireIcon,
    title: "Task Manager",
    date: "Project",
    children:
      "In Progress",
  }
];

export function InformationSection() {
  return (
    <section className="pb-28 px-8">
      <div className="grid xl:grid-cols-2 md:grid-cols-1 container gap-20 mx-auto items-start">
        <div>
          <div className="mb-10">
            <Typography color="blue-gray" className="mb-2 text-3xl font-bold" 
            placeholder={undefined}>
              Education & Certifications
            </Typography>
            <Typography variant="lead" className="!text-gray-500"  
            placeholder={undefined}>
              See my education history.
            </Typography>
          </div>
          <div className="container mx-auto grid grid-cols-1 gap-16 gap-y-12 ">
            {EDUCATION.map((education, idx) => (
              <InfoCard key={education.id || idx} {...education} />
            ))}
          </div>
        </div>
        <div>
          <div className="mb-10">
            <Typography color="blue-gray" className="mb-2 text-3xl font-bold"  
            placeholder={undefined} >
              Experience
            </Typography>
            <Typography variant="lead" className="!text-gray-500" 
             placeholder={undefined} >
              See my experience as a developer.
            </Typography>
          </div>
          <div className="container mx-auto grid grid-cols-1 gap-16 gap-y-12 ">
            {EXPERIENCE.map((experience, idx) => (
              <InfoCard key={experience.id || idx} {...experience} />
            ))}
          </div>
        </div>
      </div>
      <div className="container gap-20 mt-36 mx-auto items-center">
        <div>
          <div className="mb-10">
            <Typography color="blue-gray" className="mb-2 text-3xl font-bold"
             placeholder={undefined} >
              Skills
            </Typography>
            <Typography variant="lead" className="!text-gray-500"
             placeholder={undefined} >
              Check out my technical and soft skills.
            </Typography>
          </div>
          <div className="container mx-auto grid grid-cols-1 gap-16 gap-y-12 lg:grid-cols-2">
            {SKILLS.map((skill, idx) => (
              <InfoCard key={skill.id || idx} {...skill} />
            ))}
          </div>
        </div>
      </div>
      <div className="container gap-20 mt-36 mx-auto items-center">
        <div>
          <div className="mb-10">
            <Typography color="blue-gray" className="mb-2 text-3xl font-bold"
             placeholder={undefined} >
              Projects
            </Typography>
            <Typography variant="lead" className="!text-gray-500"
             placeholder={undefined}>
              Check out my projects.
            </Typography>
          </div>
          <div className="container mx-auto grid grid-cols-1 gap-16 gap-y-12 lg:grid-cols-2">
            {PROJECTS.map((project, idx) => (
              <InfoCard key={project.id || idx} {...project}/>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default InformationSection;
