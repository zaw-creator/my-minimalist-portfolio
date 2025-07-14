'use client';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';

const Experiences = [
  {
    date: "JAN 2025 - PRESENT",
    company: "Tata Consultancy Services",
    role: "Product Engineer",
    description:
      "Collaborated with a team of developers to design, develop, and enhance features for a web application, ensuring optimal functionality and user experience. Built and optimized UI components using JavaScript, ReactJS, CSS, and jQuery. Developed secure RESTful APIs with Java, Spring Boot and PostgreSQL.",
  },
  {
    date: "JAN 2024 - JUN 2024",
    company: "Neophyte Ambient Intelligence",
    role: "Software Engineering Intern",
    description:
      "Worked on web application features using ReactJS, Material UI, Redux, and Tailwind CSS. Deployed Selenium testing with Python on AWS for application feature robustness.",
  },
  {
    date: "MAY 2023 - JULY 2023",
    company: "HighRadius",
    role: "Product Engineering Intern",
    description:
      "Helped develop a B2B AI-enabled fintech app to predict global customer order prices. React frontend, Java backend, and scalable architecture.",
  },
];


export default function Experiencedata() {
    return (
         <div style={{ alignContent:"left", marginTop: "30px", fontSize: "20px", fontFamily: "Arial" }}>
             <Timeline sx={{ marginLeft: -50}}>
              {
                Experiences.map((experience, index) => (
                    <TimelineItem key={index}>
                        <TimelineOppositeContent>
                           <h3>{experience.date}</h3>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
                            <h2>{experience.company}</h2>
                            <h4>{experience.role}</h4>
                            <p>{experience.description}</p>
            </TimelineContent>

                    </TimelineItem>
                ))
              }
                </Timeline>
         </div>
    )
}