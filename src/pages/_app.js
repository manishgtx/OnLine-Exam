import '@/styles/globals.scss'
import { AppProvider} from '@/context/context'
export default function App({ Component, pageProps }) {
  return <AppProvider><Component {...pageProps} /></AppProvider>
}
