import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';
import { urls } from '../../static/constants';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className='container'>
        <h1 className='hero__title'>{siteConfig.title}</h1>
        <p className='hero__subtitle'>{siteConfig.tagline}</p>
        <picture>
          <source
            media='(max-width: 480px)'
            srcset={urls.templateInstallationSmallGIF}
          />
          <source
            media='(min-width: 481px'
            srcSet={urls.templateInstallationGIF}
          />
          <img
            src={urls.templateInstallationGIF}
            alt='IfItDoesntMatchAnyMedia'
          />
        </picture>
        <div className={styles.buttons}>
          <Link
            className='button button--secondary button--lg'
            to='/docs/getting-started'
          >
            Getting Started
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Docs of ${siteConfig.title}`}
      description='Reduce project initialization time by 90%'
    >
      <HomepageHeader />
      {/* <main>
        <HomepageFeatures />
      </main> */}
    </Layout>
  );
}
