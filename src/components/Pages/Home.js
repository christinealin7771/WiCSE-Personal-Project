import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import EmailIcon from '@mui/icons-material/Email'
import './Home.css'

const Home = () => {
  return (
    <div className="home">
      <div className="about">
        <h2>Hi, My Name is Christine Lin</h2>
        <div className="prompt">
          <p>
            A Computer Science Student with a passion for tech.
          </p>
          <LinkedInIcon onClick={() => window.open('https://www.linkedin.com/in/christine-lin-9a0155189/')}/>
          <GitHubIcon onClick={() => window.open('https://github.com/christinealin7771')}/>
          <EmailIcon onClick={() => window.location = 'mailto:christinelin.7771@gmail.com'}/>
        </div>
      </div>
      <div className="skills">
        <h2>Skills</h2>
        <ol className="list">
          <li className="item">
            <h2>Languages</h2>
            <span>Java, C++, Python, JavaScript, HTML, Go, SQL</span>
          </li>
          <li className="item">
            <h2>Technology</h2>
            <span>Ruby on Rails, Node.js, React, React Native, Bootstrap, PostgreSQL, MySQL</span>
          </li>
          <li className="item">
            <h2>Coursework</h2>
            <span>Data Structures and Algorithms, Introduction to Computer Organization, Introduction to Software
              Engineering, Operating Systems, Introduction to Database</span>
          </li>
        </ol>
      </div>

    </div>

  )
}

export default Home