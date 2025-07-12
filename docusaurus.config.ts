import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Over the Edge',
  tagline: 'News Documentation & Style Guide',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Enable Mermaid diagrams
  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],

  // Set the production url of your site here
  url: 'https://overtheedge.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'overtheedge', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/', // Docs-only mode
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/overtheedge/docs/tree/main/',
        },
        blog: false, // Disable blog in docs-only mode
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    
    // Mermaid diagram theming
    mermaid: {
      theme: {
        light: 'neutral', 
        dark: 'dark'
      },
      options: {
        maxTextSize: 90000,
      },
    },
    
    navbar: {
      title: 'Over the Edge',
      logo: {
        alt: 'Over the Edge Logo',
        src: 'img/ote-logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {
          to: '/quickstart',
          position: 'left',
          label: 'Quick Start',
        },
        {
          to: '/style-guide',
          position: 'left',
          label: 'Style Guide',
        },
        {
          to: '/resources',
          position: 'left',
          label: 'Resources',
        },
        {
          href: 'https://github.com/overtheedge/docs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    
    // Custom colors and branding
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
    },
    
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Editorial',
          items: [
            {
              label: 'Style Guide',
              to: '/style-guide/',
            },
            {
              label: 'Editorial Process',
              to: '/editorial-process/',
            },
          ],
        },
        {
          title: 'Resources',
          items: [
            {
              label: 'Contact',
              href: 'mailto:editor@overtheedge.org',
            },
            {
              label: 'Templates',
              to: '/resources/templates',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Over the Edge Newspaper`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
