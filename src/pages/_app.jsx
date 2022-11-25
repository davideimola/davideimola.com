import { useEffect, useRef } from 'react'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

import '@/styles/tailwind.css'
import 'focus-visible'
import Script from 'next/script'
import { Analytics } from '@vercel/analytics/react'

function usePrevious(value) {
  let ref = useRef()

  useEffect(() => {
    ref.current = value
  }, [value])

  return ref.current
}

export default function App({ Component, pageProps, router }) {
  let previousPathname = usePrevious(router.pathname)

  return (
    <>
      <div className="fixed inset-0 flex justify-center sm:px-8">
        <div className="flex w-full max-w-7xl lg:px-8">
          <div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20" />
        </div>
      </div>
      <div className="relative">
        <Header />
        <main>
          <Component previousPathname={previousPathname} {...pageProps} />
        </main>
        <Footer />
        <Analytics />
        <Script id="iub" type="text/javascript">
          {`
var _iub = _iub || [];
_iub.csConfiguration = {"consentOnContinuedBrowsing":false,"countryDetection":true,"enableCcpa":true,"invalidateConsentWithoutLog":true,"lang":"en","perPurposeConsent":true,"siteId":2109199,"whitelabel":false,"cookiePolicyId":20195792, "banner":{ "acceptButtonCaptionColor":"#FFFFFF","acceptButtonColor":"#0073CE","acceptButtonDisplay":true,"backgroundColor":"#FFFFFF","brandBackgroundColor":"#FFFFFF","brandTextColor":"#000000","customizeButtonCaptionColor":"#4D4D4D","customizeButtonColor":"#DADADA","customizeButtonDisplay":true,"explicitWithdrawal":true,"listPurposes":true,"position":"float-bottom-center","rejectButtonCaptionColor":"#FFFFFF","rejectButtonColor":"#0073CE","rejectButtonDisplay":true,"textColor":"#000000" }};
`}
        </Script>
        <Script
          type="text/javascript"
          src="//cdn.iubenda.com/cs/ccpa/stub.js"
        />
        <Script
          type="text/javascript"
          src="//cdn.iubenda.com/cs/iubenda_cs.js"
          charSet="UTF-8"
          async
        />
      </div>
    </>
  )
}
