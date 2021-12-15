import '../styles/globals.scss'
import '../components/Header/styles.scss'
import '../components/Home-Sections/Section1/styles.scss'
import '../components/Home-Sections/Section2/styles.scss'
import '../components/Home-Sections/Section3/styles.scss'
import '../components/Home-Sections/Section4/styles.scss'
import '../components/Home-Sections/Section5/styles.scss'
import '../components/Home-Sections/Section6/styles.scss'
import '../components/Home-Sections/Section7/styles.scss'
import '../components/Footer/FooterEnterprise/styles.scss'
import '../components/Footer/FooterLanguage/styles.scss'
import '../components/Footer/FooterNavigator/styles.scss'
import '../components/Home-Sections/styles.scss'

import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
