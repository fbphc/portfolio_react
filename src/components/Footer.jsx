import React from 'react';
import {FaLinkedin} from "react-icons/fa";
import {FaGithub} from "react-icons/fa"


function Footer() {
  return (
    <div className='footer'>
        <p>© 2021 Fabio Petrella</p>
        <div className='linksFooter'>
            <i><FaLinkedin/></i>
            <i><FaGithub/></i>

        </div>
    </div>
  )
}

export default Footer