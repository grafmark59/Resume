import React, {Component} from 'react'
import ReactDOM from 'react-dom';
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

// Modal
import ReactModal from 'react-modal';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MaterialContent from '../components/materialContent';

// Drawer imports
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import ArrowDropDown from 'material-ui/svg-icons/navigation/expand-more';

class Resume extends Component {

  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
      modalTitle: '',
      modalContent: '',
      openDrawer: false
     };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleDrawerToggle = () => this.setState({openDrawer: !this.state.openDrawer});
  handleDrawerClose = () => this.setState({openDrawer: false});

  // Modal Functions
  switchModalContent (title) {
    this.setState({ modalTitle: title });
    this.setState({ modalContent: 'test' })
  }

  handleOpenModal (title) {
    this.setState({ modalTitle: title });
    this.setState({ modalContent: 'test' })
    this.fadeOut();
    this.fadeIn(true);
  }

  handleCloseModal () {
    this.fadeOut();
    this.fadeIn(true);
  }

  fadeIn(openClose) {
    setTimeout(function() {
      if (openClose===true){
        this.setState({ showModal: !this.state.showModal });
      }
      document.body.classList.toggle('fade', false);
    }.bind(this), 400);
  }

  fadeOut() {
    document.body.classList.toggle('fade', true);
  }

  render() {
    return (
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
                // Loops through the work experiences and creates interactive
                // Sections to click on and open a modal
                workData.work.map((job) =>
                  <Interact
                    key={job.key}
                    title={job.position}
                    innerOpenModal={this.handleOpenModal}
                    >
                    <h4>
                      <span>{job.position} </span>
                       • {job.location} • {job.date}</h4>
                    <ul className='dashed'>
                      {
                        job.responsibilities.map((responsibility) =>
                          <li
                            key={responsibility.key}
                            className={responsibility.className}
                            >
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
                // Loops through the project experiences and creates interactive
                // Sections to click on and open a modal
                projectData.projects.map((project) =>
                  <Interact
                    key={project.key}
                    title={project.title}
                    innerOpenModal={this.handleOpenModal}
                    >
                    <h4><span>{project.title}</span> • {project.date}</h4>
                    <ul className='dashed'>
                      {
                        project.responsibilities.map((responsibility) =>
                          <li
                            key={responsibility.key}
                            className={responsibility.className}
                            >
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
                // Loops through the other experiences and creates interactive
                // Sections to click on and open a modal
                otherData.other.map((obj) =>
                  <Interact
                    key={obj.key}
                    title={obj.title}
                    innerOpenModal={this.handleOpenModal}
                    >
                    <h4><span>{obj.title} </span>
                    • {obj.location} • {obj.date}</h4>
                    <ul className='dashed'>
                      {
                        obj.responsibilities.map((responsibility) =>
                          <li
                            key={responsibility.key}
                            className={responsibility.className}>
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
        {/* Main Modal */}
        <ReactModal
           // ref={(input) => { this.textInput = input; }}
           isOpen={this.state.showModal}
           contentLabel="Minimal Modal Example"
           onRequestClose={this.handleCloseModal}
        >
          <MuiThemeProvider>
            <div>
              <MaterialContent
                closeModal={this.handleCloseModal}
                toggleDrawer={this.handleDrawerToggle}
                projectTitle={this.state.modalTitle}
                projectContent={this.state.modalContent}
              />
              <Drawer
                docked={false}
                width={300}
                open={this.state.openDrawer}
                onRequestChange={(openDrawer) => this.setState({openDrawer})}
              >
                <MenuItem
                  key='workList'
                  rightIcon={<ArrowDropDown />}
                  primaryTogglesNestedList={true}
                  nestedItems={
                    // Loops through the jobs
                    workData.work.map((job, i) =>
                      <MenuItem
                        key={'workList'+i}
                        insetChildren={true}
                        innerDivStyle= {
                          {
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap',
                            overflow: 'hidden'
                          }
                        }
                      >
                        {job.position}
                      </MenuItem>
                    )
                  }
                  >Work Experience</MenuItem>
                <MenuItem
                  key='projectList'
                  rightIcon={<ArrowDropDown />}
                  primaryTogglesNestedList={true}
                  nestedItems={
                    // Loops through the projects
                    projectData.projects.map((project, i) =>
                      <MenuItem
                        key={'projectList'+i}
                        insetChildren={true}
                        innerDivStyle= {
                          {
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap',
                            overflow: 'hidden'
                          }
                        }
                      >
                        {project.title}
                      </MenuItem>
                    )
                  }
                >Project Experience</MenuItem>
                <MenuItem
                  key='otherList'
                  rightIcon={<ArrowDropDown />}
                  primaryTogglesNestedList={true}
                  nestedItems={
                    // Loops through the projects
                    otherData.other.map((obj, i) =>
                      <MenuItem
                        key={'otherList'+i}
                        insetChildren={true}
                        innerDivStyle= {
                          {
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap',
                            overflow: 'hidden'
                          }
                        }
                      >
                        {obj.title}
                      </MenuItem>
                    )
                  }
                  >Other Experience</MenuItem>
              </Drawer>
            </div>
          </MuiThemeProvider>
          {/* <h2 ref={subtitle => this.subtitle = subtitle}>Hello</h2>

          <button onClick={this.handleCloseModal}>Close Modal</button> */}
        </ReactModal>
      </Document>
    )
  }
}

export default Resume;
