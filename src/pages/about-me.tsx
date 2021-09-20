import React from 'react'
import { graphql, Link } from "gatsby"

import Layout from '../components/layout'
import SEO from '../components/seo'

const AboutMe = ({data, location}) => {
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
          Hi, my name is <strong>Davide Imola</strong>, and I am a young DevOps Engineer. I have a strong avocation towards Cloud-Native architectures, serverless infrastructure, and automation.
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

          <h3>Mentoring</h3>
          I offer a 1-to-1 mentoring on different topics:

          <ul>
            <li>DevOps</li>
            <li>Software Engineering</li>
            <li>Microservices Architectures</li>
            <li>Kubernetes</li>
            <li>Open Source</li>
            <li>Cyber Security</li>
          </ul>

          Schedule a session by checking my availability on <a href="https://calendly.com/davideimola/30min" target="_blank">Calendly</a>!

          Instead, if you are looking to learn things in more depth you can buy some of my hours on <a href="https://www.docety.com/?referral_code=COADWEZBKJPVTCC21" target="_blank">DOCETY</a>.

          <h3>Wanna help me and my projects?</h3>
          I spend time working and helping other people for <b>mutual improvement</b>! So any help are really appreciated.

          You can help me in different ways, such as:

          <ul>
            <li>Add me on <a href="https://linkedin.com/in/davideimola">LinkedIn</a> and add a recommendation!</li>
            <li>Contact me and ask if you can help me with something.</li>
            <li>Offer me <a href="https://paypal.me/DImola" target="_blank">something to drink</a>!</li>
          </ul>
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
