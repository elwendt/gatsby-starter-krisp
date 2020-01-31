import React from "react"
import { SocialIcon } from "react-social-icons"
import Fade from "react-reveal/Fade"

function TeamItem({ src, title }) {
  return (
    <Fade bottom>
      <div className="col-lg-4 my-4 col-sm-12">
        <img src={src} className="img-fluid rounded-circle" width="200px" />
        <h3 className="mt-5">{title}</h3>
        <p>
          Eric Wendt is a professional GIS Analyst, programmer, web developer, and AR/VR developer/enthusiast. 
          He holds a B.A. in Environmental Policy, a Masters in Cybersecurity, and is a FAA Part 107 certified remote pilot.
          He has a special interest in photogrammetry and the analysis of imagery for environmental applications.
        </p>
        <SocialIcon className="mr-4" url={"http://twitter.com/" + title} />
        <SocialIcon className="mr-4" url={"http://github.com/" + title} />
        <SocialIcon className="mr-4" url={"http://facebook.com/" + title} />
      </div>
    </Fade>
  )
}

export default TeamItem
