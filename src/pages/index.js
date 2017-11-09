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

// JSON Data
import workData from './content/work.json';
import projectData from './content/projects.json';
import otherData from './content/other.json';



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
            <a className='link' href="mailto:danielgraf.developer@gmail.com">danielgraf.developer@gmail.com</a>
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
          <h4><span><a className='link' href="https://www.cmu.edu">Carnegie Mellon University</a></span></h4>
          <p>
            August 2013 - May 2017 <br/>
            B.S. Information Systems <br/>
            w/ University Honors <br/>
            Minor in German <br/>
            3.6 GPA
          </p>
        </Section>
        <Section>
          <h4><span><a className='link' href="https://tu-dresden.de/">TU Dresden</a></span></h4>
          <p>
            Spring 2016 <br/>
            Study Abroad <br/>
          </p>
        </Section>
        <Section>
          <h4><span><a className='link' href="https://www.readingsd.org/rhs">Reading High School</a></span></h4>
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
          {
            workData.work.map((job) =>
              <Interact key={job.key}>
                <h4><span>{job.position}</span> • {job.location} • {job.date}</h4>
                <ul className='dashed'>
                  {
                    job.responsibilities.map((responsibility) =>
                      <li key={responsibility.key} className={responsibility.className}>
                        {responsibility.content}
                      </li>
                    )
                  }
                </ul>
              </Interact>
            )
           }
        </Section>

        <h2>Project Experience</h2>
        <Section>
          {
            projectData.projects.map((project) =>
              <Interact key={project.key}>
                <h4><span>{project.title}</span> • {project.date}</h4>
                <ul className='dashed'>
                  {
                    project.responsibilities.map((responsibility) =>
                      <li key={responsibility.key} className={responsibility.className}>
                        {responsibility.content}
                      </li>
                    )
                  }
                </ul>
              </Interact>
            )
           }
        </Section>

        <h2>Other Experiences</h2>
        <Section>
          {
            otherData.other.map((obj) =>
              <Interact key={obj.key}>
                <h4><span>{obj.title}</span> • {obj.location} • {obj.date}</h4>
                <ul className='dashed'>
                  {
                    obj.responsibilities.map((responsibility) =>
                      <li key={responsibility.key} className={responsibility.className}>
                        {responsibility.content}
                      </li>
                    )
                  }
                </ul>
              </Interact>
            )
           }
        </Section>
      </RightColumn>
    </MainBody>
    <Footing>
      <h2 className='center'>
        References Available Upon Request
      </h2>
    </Footing>
  </Document>
