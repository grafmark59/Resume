import React from 'react'
import Link from 'gatsby-link'
import Document from "../components/document"
import LeftColumn from "../components/left-column"
import RightColumn from "../components/right-column"
import Heading from "../components/heading"
import styles from "./index.module.css"


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
      <h1>Daniel Graf</h1>
    </Heading>
    <LeftColumn>
      <h1>LeftColumn</h1>
      <div>
        <h1>Richard Hamming on Luck</h1>
        <div>
          <p>
            From Richard Hamming’s classic and must-read talk, “<a href="http://www.cs.virginia.edu/~robins/YouAndYourResearch.html">
              You and Your Research
            </a>”.
          </p>
          <blockquote>
            <p>
              There is indeed an element of luck, and no, there isn’t. The prepared
              mind sooner or later finds something important and does it. So yes, it
              is luck.{" "}
              <em>
                The particular thing you do is luck, but that you do something is
                not.
              </em>
            </p>
          </blockquote>
        </div>
        <p>Posted April 09, 2011</p>
      </div>
    </LeftColumn>
    <RightColumn>
      <h1>RightColumn</h1>
    </RightColumn>
  </Document>
