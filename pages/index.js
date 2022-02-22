import { useState, useRef, useEffect } from 'react'
import { disableBodyScroll, enableBodyScroll } from '../lib/scroll'
import Head from 'next/head'
import CubeField from '../comps/CubeField'
import Nav from '../comps/Nav'
import Landing from '../comps/Landing'
import About from '../comps/About'
import Projects from '../comps/Projects'
import Contact from '../comps/Contact'

export default function Index() {
  const refs = {
    nav: useRef(),
    about: useRef(),
    projects: useRef(),
    contact: useRef()
  }
  const [menuOpen, openMenu] = useState(false)

  function toggleMenu() {
    if (menuOpen) {
      enableBodyScroll()
      openMenu(false)
    } else {
      disableBodyScroll()
      openMenu(true)
    }
  }

  function scrollTo(ref) {
    window.scrollTo({
      top: ref.current.getBoundingClientRect().top + refs.nav.current.getBoundingClientRect().height + window.pageYOffset - 50,
      left: 0,
      behavior: 'smooth'
    })
    if (menuOpen) toggleMenu()
  }

  useEffect(() => {
    const vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    window.addEventListener('resize', () => {
      const vh = window.innerHeight * 0.01
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    })
  })

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
        scrollTo={scrollTo}
        navRef={refs.nav}
        aboutRef={refs.about}
        projectsRef={refs.projects}
        contactRef={refs.contact}
      />
      <main>
        <Landing projectsRef={refs.projects} scrollTo={scrollTo} />
        <About sectRef={refs.about} />
        <Projects sectRef={refs.projects} />
        <Contact sectRef={refs.contact} />
      </main>
    </div>
  )
}
