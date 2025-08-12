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
    date: "DEC 2024 - PRESENT",
    company: "Freelance Developer",
    role: "Full Stack Developer",
    description:
      "Working independently on various client projects using the MERN stack and Three.js. Building responsive, interactive web applications and experimenting with 3D experiences. Also involved in backend development and some C# scripting for specialized applications.",
  },
  {
    date: "SEP 2023 - JUN 2024",
    company: "University of the West of England (UWE)",
    role: "Student Ambassador",
    description:
      "Developed essential soft skills such as public speaking, teamwork, and interpersonal communication by representing the university. Gained valuable experience in supporting events and engaging with prospective students.",
  },
  {
    date: "DEC 2022 - JUN 2023",
    company: "Wun Wun Lat",
    role: "Junior Web Developer Intern",
    description:
      "During my internship at Wun Wun Lat, I developed a strong foundation in the syntax, semantics, and pragmatics of programming languages. Worked on real-world projects that enhanced my practical coding skills and collaboration in a team setting. This experience sharpened my problem-solving abilities and deepened my understanding of language design.",
  }
];



export default function Experiencedata() {
    return (
         <div style={{ alignContent:"left", marginTop: "30px", fontSize: "20px", fontFamily: "Arial",color: "white" }}>
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