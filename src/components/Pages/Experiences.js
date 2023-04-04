import React from 'react'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import './Experiences.css'

const Experiences = () => {
  return (
    <div >
      <VerticalTimeline lineColor = "#3e497a">
        <VerticalTimelineElement 
          className="vertical-timeline-element--education"
          date = "August 2020 - Expected Graduation May 2024"
          iconStyle={{background: "#8198FD", color: "#fff"}}
          icon = {<SchoolIcon/>}
        >
          <h3 className="vertical-timeline-element-title">
            University of Florida, Gainesville, Florida
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Bachelor's Degree
          </h4>
          <p>Computer Science, Chinese Minor</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement 
          className="vertical-timeline-element--work"
          date = "June 2022 - August 2022"
          iconStyle={{background: "#3e497a", color: "#fff"}}
          icon = {<WorkIcon/>}
        >
           <h3 className="vertical-timeline-element-title">
            Software Engineering Intern - Capital One
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            McLean, VA
          </h4>
          <p>
            Created a new SSO gateway using Spring Security 5 to replace the deprecated OAuth2.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement 
          className="vertical-timeline-element--work"
          date = "May 2021 - March 2022"
          iconStyle={{background: "#3e497a", color: "#fff"}}
          icon = {<WorkIcon/>}
        >
           <h3 className="vertical-timeline-element-title">
            Computer Science Instructor - Juni Learning
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            San Francisco, CA
          </h4>
          <p>
            Instruct middle and high school students to learn fundamental introductory Python and Java concepts.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement 
          className="vertical-timeline-element--work"
          date = "January 2021 - April 2021"
          iconStyle={{background: "#3e497a", color: "#fff"}}
          icon = {<WorkIcon/>}
        >
           <h3 className="vertical-timeline-element-title">
            Web Development Intern - Traject
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Bellevue, WA
          </h4>
          <p>
          Created a study management web application for helping students who have a hard time with time management
and to help them create a clear studying schedule using Ruby on Rails.

          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}

export default Experiences