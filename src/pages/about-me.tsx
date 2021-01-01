import React from 'react'
import { graphql, Link } from "gatsby"

import Layout from '../components/layout'
import SEO from '../components/seo'
import Comments from "../components/comments"

const AboutMe = ({data}) => {
  const siteTitle = data.site.siteMetadata?.title || `Davide Imola's Blog`

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="About Me" />
      <article
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          <h1 itemProp="headline">About Me</h1>
        </header>
        <section itemProp="articleBody">
          Hi, my name is <strong>Davide Imola</strong>, and I am a young DevOps Engineer. I have a strong advocation towards Cloud-Native architectures, serverless infrastructure, and automation.
          <br/><br/>
          I am currently working as a DevOps Engineer at milkman and studying Cyber Security at Verona University, Italy.
          <br/><br/>
          If you want to <a href="https://www.linkedin.com/in/davideimola/">hire me</a>, you can check my personal Curriculum Vitae right <a href="https://drive.google.com/file/d/18uQCSMX1ERhVoOK-o2z8VDJ5DSGv0IEE/view?usp=sharing">here</a>.

          <h3>Contacts</h3>
          You can write me an e-mail at <a href="mailto:davide.imola@icloud.com">davide.imola@icloud.com</a>, or you can find me also on those social media platforms:
          <ul>
            <li><a href="https://github.com/davideimola">GitHub</a></li>
            <li><a href="https://linkedin.com/in/davideimola">LinkedIn</a></li>
          </ul>

          <h3>Aside from software engineering?</h3>
          In my spare time, I enjoy watching movies and series, listen to music, read some books (maybe I would read more than now 😅), play video games, stay with Lord (my dog, a Cavalier King Charles Spaniel 🐶) and travel around the world. Moreover, I am a newbie amatorial photographer.
        </section>
      </article>
    </Layout>
  )
}

export default AboutMe

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
