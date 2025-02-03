import React from "react";
import styles from "./MeetOurTeam.module.css";
import Image from "next/image";

// Example team data structure
const teamMembers = [
  {
    name: "Om P.",
    role: "Managing Director, Full Stack Developer",
    experience: "16 years of experience",
    imageUrl: "/images/team/TeamImage/om.png",
  },
  {
    name: "Satish K.",
    role: "Lead Developer",
    experience: "10 years of experience",
    imageUrl: "/images/team/TeamImage/satish.png",
  },
  {
    name: "Anil R.",
    role: "Content Writer",
    experience: "8 years of experience",
    imageUrl: "/images/team/TeamImage/anil.png",
  },
  {
    name: "Sunny B.",
    role: "UI/UX Designer",
    experience: "6 years of experience",
    imageUrl: "/images/team/TeamImage/sunny.png",
  },
  {
    name: "Kapil S.",
    role: "Project Manager",
    experience: "12 years of experience",
    imageUrl: "/images/team/TeamImage/kapil.png",
  },
];

export default function OurTeam() {
  return (
    <div className={styles.ourTeam}>
      <div className="container">
        <h2>Process</h2>
        <p>
          We're a team of thinkers, innovators, and explorers working as
          designers, developers, and content writers.
          <br />
          Our team makes magic happen in every project we tackle.
          <br />
          When you love your work and the team you work with, it's not hard to
          do wonders.
        </p>
        <div className={styles.team_Intro}>
          <ul>
            <div className={`row ${styles.team_colum}`}>
              {teamMembers.map((member, index) => (
                <li key={index}>
                  <div className={styles.team_Img}>
                    <Image
                      src={member.imageUrl}
                      alt={member.name}
                      width={190}
                      height={190}
                    />
                  </div>
                  <span className={styles.team_Name}>{member.name}</span>
                  <span className={styles.Designation}>
                    {member.role}
                    <br />
                    {member.experience}
                  </span>
                </li>
              ))}
            </div>
            <div className={`row ${styles.team_colum}`}>
              {teamMembers.map((member, index) => (
                <li key={index}>
                  <div className={styles.team_Img}>
                    <Image
                      src={member.imageUrl}
                      alt={member.name}
                      width={190}
                      height={190}
                    />
                  </div>
                  <span className={styles.team_Name}>{member.name}</span>
                  <span className={styles.Designation}>
                    {member.role}
                    <br />
                    {member.experience}
                  </span>
                </li>
              ))}
            </div>
            <div className={`row ${styles.team_colum}`}>
              {teamMembers.map((member, index) => (
                <li key={index}>
                  <div className={styles.team_Img}>
                    <Image
                      src={member.imageUrl}
                      alt={member.name}
                      width={190}
                      height={190}
                    />
                  </div>
                  <span className={styles.team_Name}>{member.name}</span>
                  <span className={styles.Designation}>
                    {member.role}
                    <br />
                    {member.experience}
                  </span>
                </li>
              ))}
            </div>
          </ul>
        </div>
        <p>Blisttech is a start up of Tech savvys who hold years of experience in their respective fields and are well versed on different technologies, domains and multiple projects.</p>
        <p>We at Blistech our dedicated to quality of work we present to our client and the collaborative environment we have created amongst our team members. Which is much required for a happy organization and successful project delivery.</p><br />
        <p><strong>Our team doesn't just make software, we make magic happen.</strong></p>
      </div>
    </div>
  );
}
