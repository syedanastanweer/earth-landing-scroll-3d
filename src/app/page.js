import styles from './page.module.scss'
import Image from 'next/image'; // Add this import statement at the top
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
          <Image
            src="/assets/logo.jpg"
            alt="Description of image"
            width={80}
            height={80}
          />
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
