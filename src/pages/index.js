import React from 'react'
import Link from 'gatsby-link'
import Document from "../components/document"
import LeftColumn from "../components/left-column"
import RightColumn from "../components/right-column"
import Heading from "../components/heading"
import MainBody from "../components/main-body"
import Footing from "../components/footing"


const DocumentPage = () => (
  <div>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </div>
)

export default () =>
  <Document>
    <Heading>
      <LeftColumn>
        <h1 className='mainName'>
          <span>Daniel</span> <span>Graf</span>
        </h1>
        <h3>
          Developer | Innovator
        </h3>
      </LeftColumn>
      <RightColumn>
        <h3 className='right'>
          <span>
            <br/>
            danielgraf.developer@gmail.com
            <br/>
            (610) 763-1629
          </span>
        </h3>
      </RightColumn>
    </Heading>

    <MainBody>
      <LeftColumn>
        <h2>Education</h2>
        <h4><span>Carnegie Mellon University</span></h4>
        <p>
          August 2013 - May 2017 <br/>
          B.S. Information Systems <br/>
          w/ University Honors <br/>
          Minor in German <br/>
          3.6 GPA
        </p>
        <h4><span>TU Dresden</span></h4>
        <p>
          Spring 2016 <br/>
          Study Abroad <br/>
        </p>
        <h4><span>Reading High School</span></h4>
        <p>
          August 2009 - May 2013 <br/>
          4.0 GPA <br/>
        </p>

        <h2>Skills</h2>
        <h5>
          Leadership | Microsoft Office <br/>
          Project Management | UI/UX <br/>
          Mobile Dev | Public Speaking <br/>
          Frontend & Backend Dev <br/>
        </h5>

        <h2>Programming</h2>
        <h5>
          Ruby on Rails | Ruby | SQL <br/>
          Git | HTML | CSS | JavaScript <br/>
          Swift | C | Python | NodeJS <br/>
          Java | ReactJS | AngularJS <br/>
        </h5>

        <h2>Languages</h2>
        <h5>
          English | German
        </h5>

      </LeftColumn>
      <RightColumn>
        <h2>Work Experience</h2>
        <h4><span>Tech. Consultant</span> • Palauan Ministry of Education • Summer ‘17</h4>
        <p>
          -	Evaluated the paper-based Teacher Evaluation System <br/>
          -	Developed a full-stack Ruby on Rails solution with a MySQL database <br/>
          -	Implemented a system with log-in functionality for all staff to be able to <br/>
            go online and see their respective evaluations
        </p>
        <h4><span>Teaching Assistant </span> • App Design and Development • Spring ‘17</h4>
        <p>
          -	Worked as a TA for 67-272, the first major Information Systems course in <br/>
            terms of web application development (Ruby on Rails) <br/>
          -	Graded tests and projects while also running weekly labs
        </p>
        <h4><span>Camp Counselor</span> • Bear Creek Camp • Summers ‘14-‘16</h4>
        <p>
          -	Worked as a camp counselor for 10 weeks throughout the summer<br/>
          -	Supervised new groups of 10-20 kids, ages 8-18, every week

        </p>

        <h2>Project Experience</h2>
        <h4><span>Beaver County Humane Society Foster Portal </span> • Spring ‘17</h4>
        <p>
          -	Continued a Ruby on Rails project that was started in 2016 <br/>
          -	Fixed bugs, reorganized basic functionality, and implemented a complete <br/>
            design overhaul.

        </p>
        <h4><span>CMU Soundbytes Website</span> • Spring ‘17</h4>
        <p>
          -	Built a website for the CMU Soundbytes a cappella group using the<br/>
            Jekyll Ruby gem and launched it through GitHub Pages
        </p>
        <h4><span>CMU Safety Pin</span> • Fall ‘16</h4>
        <p>
          -	An iOS application with a web-application backend <br/>
          -	Developed the iOS frontend and interactions throughout the app
        </p>

        <h2>Other Experiences</h2>
        <h4><span>Study Abroad</span> • Spring ‘16</h4>
        <p>
          -	Attended the Technische Universität Dresden <br/>
          - Developed use of German in a classroom/group setting
        </p>
        <h4><span>Technical Assistant </span> • Center for Pain Control • Jan – Feb ‘16</h4>
        <p>
          -	Served as tech support, set up and connected new computers to a server
        </p>
        <h4><span>Guatemalan Mission Trips</span> • Summers 2007-2009</h4>
        <p>
          -	Provided medical aid, vacation bible school, and construction crews to <br/>
            local families, schools, and orphanages
        </p>
      </RightColumn>
    </MainBody>
    <Footing>
      <h2 className='center'>
        References Available Upon Request
      </h2>
    </Footing>
  </Document>
