import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export default function Uses() {
  return (
    <>
      <Head>
        <title>Uses - Davide Imola</title>
        <meta
          name="description"
          content="Software I use, gadgets I love, and other things I recommend."
        />
        <link rel="icon" type="image/x-icon" href="/favicon.png" />
      </Head>
      <SimpleLayout
        title="Software I use, gadgets I love, and other things I recommend."
        intro="I am not a guru, but I like to share my opinion with others, so I left on this page the tools I use and recommend. Probably they are not the best, but still, I love them."
      >
        <div className="space-y-20">
          <ToolsSection title="Workstation">
            <Tool title="14” MacBook Pro, M1 Pro, 16GB RAM (2021)">
              I have always had a MacBook, as I prefer working with Linux or
              macOS. Those new MacBooks are incredible.
            </Tool>
            <Tool title="Samsung 28 4K ">
              It may not be the best display out there, but it is enough for me.
            </Tool>
            <Tool title="Kinesis Gaming Freestyle Edge">
              I am a split keyboard user as they are more ergonomic than the
              others. This keyboard is mechanical with brown switches. I have
              already chosen my next keyboard: The Ultimate Hacking Keyboard!
            </Tool>
            <Tool title="Apple Magic Trackpad">
              Something about all the gestures makes me feel like a wizard with
              special powers. I really like feeling like a wizard with special
              powers.
            </Tool>
            <Tool title="Logitech MX Vertical">
              Simply Logitech mice are the best out there. I have chosen the
              vertical one, as I would like to avoid carpal tunnel.
            </Tool>
            <Tool title="Secretlab Titan">
              I am not a big fan of gaming chairs, but I can say. This chair is
              one of the best out there.
            </Tool>
            <Tool title="FlexiSpot Standing Desk">
              From time to time I like to stand up during my coding sessions.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Development tools">
            <Tool title="JetBrains Suite">
              I can not live without them. I think JetBrains is shipping the
              best IDEs out there.
            </Tool>
            <Tool title="NeoVim">:wq</Tool>
            <Tool title="VisualStudio Code">
              Not my preferred IDE, but I use it from time to time.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Productivity">
            <Tool title="Alfred">
              It’s not the newest kid on the block but it’s still the fastest.
            </Tool>
          </ToolsSection>
        </div>
      </SimpleLayout>
    </>
  )
}
