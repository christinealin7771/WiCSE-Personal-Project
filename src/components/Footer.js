import React from 'react'

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import "./Footer.css"

const Footer = () => {
  return (
    <div className="footer">
        <div className="socialMedia">
            <LinkedInIcon onClick={() => window.open('https://www.linkedin.com/in/christine-lin-9a0155189/')}/>
            <GitHubIcon onClick={() => window.open('https://github.com/christinealin7771')}/>
            <EmailIcon onClick={() => window.location = 'mailto:christinelin.7771@gmail.com'}/>
    
        </div>
        <p> &copy; 2023 christinelin.com</p>
    </div>
  )
}

export default Footer