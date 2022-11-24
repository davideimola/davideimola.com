import { SEO } from "../components/seo";
import { Nav } from "../components/nav";
import { Footer } from "../components/footer";

export default function Contacts() {
  return (
    <>
      <SEO title="Contacts" />
      <Nav />

      <div className="relative bg-white pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
        <div className="absolute inset-0">
          <div className="bg-white h-1/3 sm:h-2/3" />
        </div>
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
              Contacts
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              Here you can find how to reach me
            </p>
          </div>
          <div className="prose prose-lg m-auto mt-6 px-4 md:px-0">
            I am always happy to have a chat with someone. You can write me an
            e-mail at <a href="mailto:me@davideimola.com">me@davideimola.com</a>
            , or you can find me also on those social media platforms:
            <ul>
              <li>
                <a
                  href="https://github.com/davideimola"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/davideimola"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/DavideImola"
                  target="_blank"
                  rel="noreferrer"
                >
                  Twitter
                </a>
              </li>
            </ul>
            If you are interested to book a mentoring session you can use{" "}
            <a
              href="https://calendly.com/davideimola/30min"
              target="_blank"
              rel="noreferrer"
            >
              Calendly
            </a>
            ! I am one of the Co-Organizer of Schrödinger Hat community, so you
            can find me too in their{" "}
            <a
              href="https://discord.gg/RTXr8A3eFn"
              target="_blank"
              rel="noreferrer"
            >
              Discord server
            </a>
            .
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
