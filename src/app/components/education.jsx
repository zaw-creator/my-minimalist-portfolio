'use client';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';


const Education = [
  {
    date: "SEP 2023 - JUL 2024",
    institution: "University of the West of England, Bristol (UK)",
    degree: "BSc (Hons) in Information Technology",
    description:
      "Graduated with Second Upper Class Honours (2:1). Developed strong foundations in software development, IT infrastructure, and data systems. Final-year project focused on building a cloud-based inventory management system using React, Node.js, and Firebase.",
  },
  {
    date: "DEC 2019 - SEP 2022",
    institution: "Gusto University, Myanmar",
    degree: "Diploma in Computing",
    description:
      "Completed coursework in web development, programming fundamentals, and database management. Built several web-based projects and participated in collaborative software development using modern frameworks like React and Node.js.",
  },
];

export default function Educationdata() {
    return (
         <div style={{ alignContent:"left", marginTop: "30px", fontSize: "20px", fontFamily: "Arial" }}>
             <Timeline sx={{ marginLeft: -50}}>
              {
                Education.map((education, index) => (
                    <TimelineItem key={index}>
                        <TimelineOppositeContent>
                           <h3>{education.date}</h3>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
                            <h2>{education.institution}</h2>
                            <h4>{education.degree}</h4>
                            <p>{education.description}</p>
            </TimelineContent>

                    </TimelineItem>
                ))
              }
                </Timeline>
         </div>
    )
}
