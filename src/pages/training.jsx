import Head from 'next/head'
import { Container } from '@/components/Container'
import Link from 'next/link'
import Image from 'next/image'
import portraitImage from '@/images/portrait.jpg'
import { LinkedInIcon } from '@/components/SocialIcons'
import clsx from 'clsx'

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

function CalendarIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-6 w-6"
      {...props}
    >
      <path d="M12.75 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM7.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM8.25 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM9.75 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM10.5 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM12.75 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM14.25 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 13.5a.75.75 0 100-1.5.75.75 0 000 1.5z" />
      <path
        fill-rule="evenodd"
        d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z"
        clip-rule="evenodd"
      />
    </svg>
  )
}

export default function Training() {
  return (
    <>
      <Head>
        <title>Training - Davide Imola</title>
        <meta
          name="description"
          content="I love helping others, so I have started teaching and mentoring those who need it."
        />
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
              I love helping others, so I have started teaching and mentoring
              those who need it.
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                I offer free mentoring and 1-to-1 coaching on many different
                topics:
              </p>
              <p>
                <ul className="ml-5 list-disc">
                  <li>Coding</li>
                  <li>Software design</li>
                  <li>Cloud & DevOps</li>
                  <li>Career advice</li>
                  <li>Starting you career as a Junior developer</li>
                  <li>Other things you might be interested to learn from me</li>
                </ul>
              </p>
              <p>
                You can book as many sessions as you wish, and I am more than
                welcome to help you as I can.
              </p>
              <p>
                Do you want to step up your career faster? No problem! I am
                offering 1-to-1 paid intensive coaching sessions. No matter if
                you want to change your position, get paid better or step up
                your career in tech.
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink
                href="https://linkedin.com/in/davideimola"
                icon={LinkedInIcon}
                className="mt-4"
              >
                Send me a message
              </SocialLink>
              <SocialLink
                href="https://calendly.com/davideimola/mentoring"
                icon={CalendarIcon}
                className="mt-4"
              >
                Book a time slot
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
