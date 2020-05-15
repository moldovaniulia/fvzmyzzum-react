import React from 'react'
import Helmet from 'react-helmet'

import AppComponent from '../components/component'
import styles from './page.module.css'

const Page = (props) => {
  return (
    <div className={styles.container}>
      <Helmet>
        <title>6fvZMYZZUM</title>
        <meta property="og:title" content="6fvZMYZZUM" />
      </Helmet>
      <AppComponent src="/playground_assets/1200h-p1.jpg"></AppComponent>
    </div>
  )
}

export default Page
