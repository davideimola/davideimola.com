import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function SpeakingSection({ children, ...props }) {
  return (
    <Section {...props}>
      <div className="space-y-16">{children}</div>
    </Section>
  )
}

function Appearance({ title, description, event, cta, href }) {
  return (
    <Card as="article">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Eyebrow decorate>{event}</Card.Eyebrow>
      <Card.Description>{description}</Card.Description>
      <Card.Cta>{cta}</Card.Cta>
    </Card>
  )
}

export default function Speaking() {
  return (
    <>
      <Head>
        <title>Speaking - Davide Imola</title>
        <meta
          name="description"
          content="I’ve always been shy. I am trying to spoke about tech where I can."
        />
        <link rel="icon" type="image/x-icon" href="/favicon.png" />
      </Head>
      <SimpleLayout
        title="I’ve always been shy. I am trying to spoke about tech where I can."
        intro="I love sharing my ideas and opinions. I am looking to beat my shyness by presenting something on stage or wherever I can talk."
      >
        <div className="space-y-20">
          <SpeakingSection title="Courses">
            <Appearance
              href="https://talks.codemotion.com/paths/conosci-le-vere-potenzialit-di-iac-infra"
              title="Conosci le vere potenzialità di IaC (Infrastructure as Code)?"
              description="A technical deep-dive into Infrastructure as Code."
              event="Codemotion"
              cta="Watch course"
            />
            <Appearance
              href="https://www.codemotion.com/learning/tp/applicazioni-devops-ci-cd-e-log-aggregation-con-github-actions-e-loki-1166"
              title="Applicazioni DevOps: CI/CD e Log Aggregation con Github Actions e Loki"
              description="A deep-dive into Continuous Integration pipelines and Observability."
              event="Codemotion"
              cta="Watch course"
            />
            <Appearance
              href="https://www.codemotion.com/learning/tp/shift-left-e-continuous-monitoring-come-migliorare-la-security-della-propria-web-app-1271"
              title="Shift Left e Continuous Monitoring: come migliorare la Security della propria Web App"
              description="A deep-dive on how to improve the security of your web-app."
              event="Codemotion"
              cta="Watch course"
            />
          </SpeakingSection>
        </div>
      </SimpleLayout>
    </>
  )
}
