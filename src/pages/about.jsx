import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  TwitterIcon,
  InstagramIcon,
  GitHubIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function About() {
  return (
    <>
      <Head>
        <title>About - Davide Imola</title>
        <meta
          name="description"
          content="I’m Davide Imola. I live in Verona, Italy, where I craft software."
        />
        <link rel="icon" type="image/x-icon" href="/favicon.png" />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              I’m Davide Imola. I live in Verona, Italy, where I craft software.
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                I started my journey into coding pretty early. For my first
                communion, I made my parents bought me my first personal laptop,
                where I started experimenting with HTML, CSS, forums, and blogs.
              </p>
              <p>
                Next, I decided to follow my passion by attending a computer
                science high school and the University in my hometown. During my
                university years, I started experimenting with the web by
                creating sites for different clients, and in December, I landed
                my first job position in this field.
              </p>
              <p>
                Since I started my journey, I have always been interested in
                servers and backend development. I started working as a DevOps
                Engineer, and I loved it!
              </p>
              <p>
                Containers, Continuous Integration Pipelines, Python, and
                Observability, are only a few of the things I studied with
                particular interest! Currently, I am trying to focus on the
                following topics on Golang, Node.js, Kubernetes, and
                Cloud-Native.
              </p>
              <p>
                I firmly believe in giving back to others, and I have always
                loved to help as I can. I love teaching and talking about tech
                stuff, so I started making courses, doing private lessons, and
                mentoring those who need it. Of course, giving back has brought
                me to Open Source and Communities, and I am currently one of the
                co-organizers of{' '}
                <Link href="https://www.schrodinger-hat.it/">
                  Schrödinger Hat
                </Link>{' '}
                an Italian community based on OS.
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink
                href="https://twitter.com/DavideImola"
                icon={TwitterIcon}
              >
                Follow on Twitter
              </SocialLink>
              <SocialLink
                href="https://instagram.com/davideimola"
                icon={InstagramIcon}
                className="mt-4"
              >
                Follow on Instagram
              </SocialLink>
              <SocialLink
                href="https://github.com/davideimola"
                icon={GitHubIcon}
                className="mt-4"
              >
                Follow on GitHub
              </SocialLink>
              <SocialLink
                href="https://linkedin.com/in/davideimola"
                icon={LinkedInIcon}
                className="mt-4"
              >
                Follow on LinkedIn
              </SocialLink>
              <SocialLink
                href="mailto:me@davideimola.com"
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                me [at] davideimola.com
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
