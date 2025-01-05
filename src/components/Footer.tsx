import React from 'react';
import Link from 'next/link';
import styles from '../styles/Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logoSection}>
          <h2>MyBlog</h2>
          <p>Your go-to platform for insightful articles and updates.</p>
        </div>

        <div className={styles.linksSection}>
          <h3>Quick Links</h3>
          <ul>
            <li>
              <Link href="/">
                <span className={styles.link}>Home</span>
              </Link>
            </li>
            <li>
              <Link href="/blog">
                <span className={styles.link}>Blog</span>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <span className={styles.link}>Contact</span>
              </Link>
            </li>
          </ul>
        </div>

        <div className={styles.socialSection}>
          <h3>Follow Us</h3>
          <div className={styles.socialLinks}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              Facebook
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              Twitter
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
      <div className={styles.bottomBar}>
        <p>&copy; {new Date().getFullYear()} My PureSkin Blog. All rights reserved. <br /> Thank You For Watching
        </p>
      </div>
    </footer>
  );
};

export default Footer;
