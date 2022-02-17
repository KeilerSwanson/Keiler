import Head from 'next/head'
import { useState, useRef } from 'react'
import CubeField from '../comps/CubeField'
import Nav from '../comps/Nav'
import Landing from '../comps/Landing'
import About from '../comps/About'
import Projects from '../comps/Projects'

export default function Index() {
  const aboutRef = useRef()
  const [menuOpen, openMenu] = useState(false)

  const toggleMenu = () => openMenu(!menuOpen)

  function scrollToAbout() {
    console.log(aboutRef.current.getBoundingClientRect())
    window.scrollTo({
      top: aboutRef.current.getBoundingClientRect().top - window.pageYOffset,
      left: 0,
      behavior: 'smooth'
    })
  }

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
        scrollToAbout={scrollToAbout}
      />
      <main>
        <Landing />
        <About 
          aboutRef={aboutRef}
        />
        <Projects />
      </main>
    </div>
  )
}
