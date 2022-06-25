import '../styles/globals.css'
import type {AppProps} from 'next/app'
import {SEO} from "../components/seo";
import {Nav} from "../components/nav";

function MyApp({Component, pageProps}: AppProps) {
    return (
        <>
            <SEO />
            <Component {...pageProps} />
        </>
        );
}

export default MyApp
