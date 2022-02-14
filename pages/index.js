import Head from 'next/head'
import { useState } from 'react'
import CubeField from '../comps/CubeField'
import Nav from '../comps/Nav'
import Landing from '../comps/Landing'

export default function Index() {
  const [menuOpen, openMenu] = useState(false)

  const toggleMenu = () => openMenu(!menuOpen)

  return (
    <div>
      <Head>
        <title>Keiler Swanson</title>
        <meta charSet='utf-8' />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name='author' content='Keiler Swanson' />
        <meta name='description' content="I'm Keiler, I build stuff with bits." />
      </Head>
      <CubeField />
      <Nav 
        menuOpen={menuOpen}
        toggleMenu={toggleMenu}
      />
      <main>
        <Landing />
      </main>
    </div>
  )
}
