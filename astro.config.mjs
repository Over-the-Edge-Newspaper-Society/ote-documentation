import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://over-the-edge-newspaper-society.github.io',
  base: '/ote-documentation/',
  integrations: [
    starlight({
      title: 'Over the Edge',
      description: 'News Documentation & Style Guide',
      logo: {
        src: './src/assets/ote-logo.svg',
        replacesTitle: false,
      },
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/Over-the-Edge-Newspaper-Society/ote-documentation',
        },
      ],
      editLink: {
        baseUrl: 'https://github.com/Over-the-Edge-Newspaper-Society/ote-documentation/edit/main/',
      },
      sidebar: [
        {
          label: 'Getting Started',
          items: [
            { label: 'Introduction', link: '/intro/' },
            { label: 'Quick Start', link: '/quickstart/' },
          ],
        },
        {
          label: 'Style Guide',
          items: [
            { label: 'Overview', link: '/style-guide/' },
            { label: 'AP Style Guidelines', link: '/style-guide/ap-style/' },
            { label: 'Voice and Tone', link: '/style-guide/voice-and-tone/' },
            { label: 'Writing Standards', link: '/style-guide/writing-standards/' },
          ],
        },
        {
          label: 'Editorial Process',
          items: [
            { label: 'Overview', link: '/editorial-process/' },
            { label: 'Story Workflow', link: '/editorial-process/story-workflow/' },
            { label: 'Review Process', link: '/editorial-process/review-process/' },
            { label: 'Publication Schedule', link: '/editorial-process/publication-schedule/' },
          ],
        },
        {
          label: 'Submission Process',
          items: [
            { label: 'Overview', link: '/submission-process/' },
            { label: 'Email Drafter', link: '/submission-process/email-drafter/' },
            { label: 'Forms Receiver', link: '/submission-process/forms-receiver/' },
            { label: 'Payment Calculator', link: '/submission-process/payment-calculator/' },
            { label: 'Publication Filing', link: '/submission-process/publication-filing/' },
          ],
        },
        {
          label: 'Resources',
          items: [
            { label: 'Overview', link: '/resources/' },
            { label: 'Templates', link: '/resources/templates/' },
            { label: 'Tools', link: '/resources/tools/' },
            { label: 'Contacts', link: '/resources/contacts/' },
          ],
        },
      ],
      customCss: [
        './src/styles/custom.scss',
      ],
      components: {
        Header: './src/components/Header.astro',
        Footer: './src/components/Footer.astro',
      },
      favicon: '/favicon.ico',
      head: [
        {
          tag: 'meta',
          attrs: {
            property: 'og:image',
            content: 'https://over-the-edge-newspaper-society.github.io/ote-documentation/img/ote-social-card.jpg',
          },
        },
      ],
    }),
  ],
  markdown: {
    remarkPlugins: [],
  },
});
