import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import ThemedLogo from '@site/src/components/ThemedLogo';

function HomepageHeader() {
  return (
    <header className="hero hero--primary">
      <div className="container">
        <div className="hero__content">
          <div className="hero__logo">
            <ThemedLogo className="hero__logo-image" />
          </div>
          <p className="hero__subtitle">
            Editorial Style Guide & Documentation
          </p>
          <div className="hero__buttons">
            <Link
              className="button button--secondary button--lg"
              to="/docs/quickstart">
              Get Started - 5min ⏱️
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

function HomepageFeatures() {
  return (
    <section className="container">
      <div className="row">
        <div className="col col--4">
          <div className="card">
            <h3>📝 Style Guide</h3>
            <p>Complete editorial standards and writing guidelines for consistent, professional journalism.</p>
            <Link to="/docs/style-guide">Learn more →</Link>
          </div>
        </div>
        <div className="col col--4">
          <div className="card">
            <h3>🗓️ Editorial Process</h3>
            <p>Step-by-step workflow from story pitch to publication, including review and approval processes.</p>
            <Link to="/docs/editorial-process">Learn more →</Link>
          </div>
        </div>
        <div className="col col--4">
          <div className="card">
            <h3>� Submission Workflow</h3>
            <p>Automated submission processing system from form receipt through final publication filing.</p>
            <Link to="/docs/submission-process">Learn more →</Link>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col col--6">
          <div className="card">
            <h3>�📊 Resources</h3>
            <p>Templates, checklists, and tools for writers, editors, and contributors.</p>
            <Link to="/docs/resources">Learn more →</Link>
          </div>
        </div>
        <div className="col col--6">
          <div className="card">
            <h3>🚀 Quick Start</h3>
            <p>Get up and running quickly with our essential guidelines and submission process.</p>
            <Link to="/docs/quickstart">Get Started →</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <Layout
      title="Over the Edge Documentation"
      description="Editorial guidelines and style guide for Over the Edge newspaper">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
