import {SEO} from "../components/seo";
import {Nav} from "../components/nav";
import {CameraIcon} from "@heroicons/react/outline";
import Image from "next/image";
import Link from "next/link";
import {Footer} from "../components/footer";

export default function AboutMe() {
    return (
        <>
            <SEO title="About Me"/>
            <Nav/>

            <div className="bg-white overflow-hidden">
                <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                    <div className="hidden lg:block bg-gray-50 absolute top-0 bottom-0 left-3/4 w-screen"/>
                    <div className="mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none">
                        <div>
                            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">About Me</h2>
                            <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                                Davide Imola
                            </h3>
                        </div>
                    </div>
                    <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
                        <div className="relative lg:row-start-1 lg:col-start-2">
                            <svg
                                className="hidden lg:block absolute top-0 right-0 -mt-20 -mr-20"
                                width={404}
                                height={384}
                                fill="none"
                                viewBox="0 0 404 384"
                                aria-hidden="true"
                            >
                                <defs>
                                    <pattern
                                        id="de316486-4a29-4312-bdfc-fbce2132a2c1"
                                        x={0}
                                        y={0}
                                        width={20}
                                        height={20}
                                        patternUnits="userSpaceOnUse"
                                    >
                                        <rect x={0} y={0} width={4} height={4} className="text-gray-200"
                                              fill="currentColor"/>
                                    </pattern>
                                </defs>
                                <rect width={404} height={384} fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)"/>
                            </svg>
                            <div className="relative text-base mx-auto max-w-prose lg:max-w-none">
                                <figure>
                                    <div className="aspect-w-12 aspect-h-7 lg:aspect-none">
                                        <Image
                                            className="rounded-lg shadow-lg object-cover object-center"
                                            src="/davideimola.jpg"
                                            alt="Whitney leaning against a railing on a downtown street"
                                            width={1184}
                                            height={1376}
                                        />
                                    </div>
                                    <figcaption className="mt-3 flex text-sm text-gray-500">
                                        <CameraIcon className="flex-none w-5 h-5 text-gray-400" aria-hidden="true"/>
                                        <span className="ml-2">Davide Imola</span>
                                    </figcaption>
                                </figure>
                            </div>
                        </div>
                        <div className="mt-8 lg:mt-0">
                            <div className="text-base max-w-prose mx-auto lg:max-w-none">
                                <p className="text-lg text-gray-500">
                                    I am a passionate DevOps and Cloud-Native Engineer from Verona, Italy. My main focus
                                    is building and maintaining highly available cloud infrastructure.
                                </p>
                            </div>
                            <div
                                className="mt-5 prose prose-indigo text-gray-500 mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1">
                                <p>
                                    I graduated in Computer Science in 2018 from the University of Verona.
                                    After that, I started my journey as DevOps Software Engineer. I have worked for a while
                                    with building pipelines, cloud providers, and backend development.
                                </p>
                                <p>
                                    I am also the Co-Organizer of the <a href="https://www.schrodinger-hat.it/">Schrödinger Hat</a> Community.
                                    Our focus is helping spreading the love for Open Source.
                                </p>
                                <h3>Mentoring and Teaching</h3>
                                <p>
                                    I usually tend to help others as I can. So I have decided to start
                                    two different initiatives. If you are eager to learn something on the following topics,
                                    please <Link href="/contacts">reach me</Link> with the options you think fit most of your needs.
                                </p>
                                <ul role="list">
                                    <li>Start your career in Computer Science</li>
                                    <li>Backend Development</li>
                                    <li>DevOps</li>
                                    <li>Microservices Architectures</li>
                                    <li>Docker & Kubernetes</li>
                                    <li>Open Source</li>
                                    <li>Pair Programming</li>
                                </ul>
                                <p>
                                    I offer free 1-to-1 mentorship time to everyone interested have a guide, because I
                                    believe in giving back. I can help you by giving you some advice to continue your journey in Computer Science.
                                </p>
                                <p>
                                    Instead, if you are looking to learn things more deeply and you need some
                                    of my hours, you can reach me out to organize it.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}
