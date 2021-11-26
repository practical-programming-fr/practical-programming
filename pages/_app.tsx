import { useEffect } from 'react'
import { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { UserProvider } from '@auth0/nextjs-auth0';
import * as gtag from '../lib/gtag'
import '../styles/index.css'

const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  );
}

export default App
