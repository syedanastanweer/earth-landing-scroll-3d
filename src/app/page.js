import styles from './page.module.scss'
import React from 'react';
import dynamic from 'next/dynamic';
import SmoothScroll from '@/components/smoothScroll';
import Projects from '@/components/projects';

const Earth = dynamic(() => import('@/components/earth'), {
  ssr: false,
  loading: () => <img src="/assets/placeholder.png" alt="loading placeholder" />
})

export default function Home() {
  return (
    <SmoothScroll>
      <header className={styles.header}>
        <div className={styles.logo}>
          <img src="/assets/logo.jpg" alt="Logo" />
        </div>
        <div className={styles.button}>
          <button>Contact Us</button>
        </div>
      </header>
      <main className={styles.main}>
        <Earth />
        <Projects />
      </main>
    </SmoothScroll>
  )
}
