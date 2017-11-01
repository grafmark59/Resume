import React from 'react'
import Link from 'gatsby-link'
import Document from "../components/document"
import LeftColumn from "../components/left-column"
import RightColumn from "../components/right-column"
import Heading from "../components/heading"
import MainBody from "../components/main-body"
import Footing from "../components/footing"
import Section from "../components/section"
import Interact from "../components/interact"


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
        <Section>
          <h4><span>Carnegie Mellon University</span></h4>
          <p>
            August 2013 - May 2017 <br/>
            B.S. Information Systems <br/>
            w/ University Honors <br/>
            Minor in German <br/>
            3.6 GPA
          </p>
        </Section>
        <Section>
          <h4><span>TU Dresden</span></h4>
          <p>
            Spring 2016 <br/>
            Study Abroad <br/>
          </p>
        </Section>
        <Section>
          <h4><span>Reading High School</span></h4>
          <p>
            August 2009 - May 2013 <br/>
            4.0 GPA <br/>
          </p>
        </Section>

        <h2>Skills</h2>
        <Section>
          <h5>
            Leadership | Microsoft Office <br/>
            Project Management | UI/UX <br/>
            Mobile Dev | Public Speaking <br/>
            Frontend & Backend Dev <br/>
          </h5>
        </Section>

        <h2>Programming</h2>
        <Section>
          <h5>
            Ruby on Rails | Ruby | SQL <br/>
            Git | HTML | CSS | JavaScript <br/>
            Swift | C | Python | NodeJS <br/>
            Java | ReactJS | AngularJS <br/>
          </h5>
        </Section>

        <h2>Languages</h2>
        <Section>
          <h5>
            English | German
          </h5>
        </Section>

      </LeftColumn>
      <RightColumn>
        <h2>Work Experience</h2>
        <Section>
          <Interact>
            <h4><span>Tech. Consultant</span> • Palauan Ministry of Education • Summer ‘17</h4>
            <ul className='dashed'>
              <li>
                -	Evaluated the paper-based Teacher Evaluation System
              </li>
              <li>
                -	Developed a full-stack Ruby on Rails solution with a MySQL database
              </li>
              <li>
                - Implemented a system with log-in functionality for all staff to be able to<br/>
              </li>
              <li className='indent'>
                  go online and see their respective evaluations
              </li>
            </ul>
          </Interact>

          <Interact>
            <h4><span>Teaching Assistant </span> • App Design and Development • Spring ‘17</h4>
            <ul className='dashed'>
              <li>
                -	Worked as a TA for 67-272, the first major Information Systems
              </li>
              <li className='indent'>
                  course in terms of web application development (Ruby on Rails)
              </li>
              <li>
                -	Graded tests and projects while also running weekly labs
              </li>
            </ul>
          </Interact>

          <Interact>
            <h4><span>Camp Counselor</span> • Bear Creek Camp • Summers ‘14-‘16</h4>
            <ul className='dashed'>
              <li>
                -	Worked as a camp counselor for 10 weeks throughout the summer
              </li>
              <li>
                -	Supervised new groups of 10-20 kids, ages 8-18, every week
              </li>
            </ul>
          </Interact>
        </Section>

        <h2>Project Experience</h2>
        <Section>
          <Interact>
            <h4><span>Beaver County Humane Society Foster Portal </span> • Spring ‘17</h4>
            <ul className='dashed'>
              <li>
                -	Continued a Ruby on Rails project that was started in 2016
              </li>
              <li>
                -	Fixed bugs, reorganized basic functionality, and implemented
              </li>
              <li className='indent'>
                a complete design overhaul.
              </li>
            </ul>
          </Interact>

          <Interact>
            <h4><span>CMU Soundbytes Website</span> • Spring ‘17</h4>
            <ul className='dashed'>
              <li>
                -	Built a website for the CMU Soundbytes a cappella group using the
              </li>
              <li className='indent'>
                Jekyll Ruby gem and launched it through GitHub Pages
              </li>
            </ul>
          </Interact>

          <Interact>
            <h4><span>CMU Safety Pin</span> • Fall ‘16</h4>
            <ul className='dashed'>
              <li>
                -	An iOS application with a web-application backend
              </li>
              <li>
                -	Developed the iOS frontend and interactions throughout the app
              </li>
            </ul>
          </Interact>
        </Section>

        <h2>Other Experiences</h2>
        <Section>
          <Interact>
            <h4><span>Study Abroad</span> • Spring ‘16</h4>
            <ul className='dashed'>
              <li>
                -	Attended the Technische Universität Dresden
              </li>
              <li>
                - Developed use of German in a classroom/group setting
              </li>
            </ul>
          </Interact>

          <Interact>
            <h4><span>Technical Assistant </span> • Center for Pain Control • Jan – Feb ‘16</h4>
            <ul className='dashed'>
              <li>
                -	Served as tech support, set up & connected new computers to a server
              </li>
            </ul>
          </Interact>

          <Interact>
            <h4><span>Guatemalan Mission Trips</span> • Summers 2007-2009</h4>
            <ul className='dashed'>
              <li>
                -	Provided medical aid, vacation bible school, and construction crews to
              </li>
              <li className='indent'>
                local families, schools, and orphanages
              </li>
            </ul>
          </Interact>
        </Section>
      </RightColumn>
    </MainBody>
    <Footing>
      <h2 className='center'>
        References Available Upon Request
      </h2>
    </Footing>
  </Document>
