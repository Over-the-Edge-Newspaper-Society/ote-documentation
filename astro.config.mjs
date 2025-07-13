import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightClientMermaid from '@pasqal-io/starlight-client-mermaid';

export default defineConfig({
  site: 'https://over-the-edge-newspaper-society.github.io',
  base: '/over-the-edge-docs/',
  integrations: [
    starlight({
      plugins: [starlightClientMermaid()],
      title: 'Over the Edge',
      description: 'News Documentation & Style Guide',
      logo: {
        src: './src/assets/ote-logo-asset2.svg',
        replacesTitle: true,
      },
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/Over-the-Edge-Newspaper-Society/ote-documentation',
        },
      ],
      editLink: {
        baseUrl: 'https://github.com/Over-the-Edge-Newspaper-Society/ote-documentation/edit/starlight/',
      },
      sidebar: [
        {
          label: 'Getting Started',
          items: [
            { label: 'Introduction', link: '/intro/' },
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
            { label: 'Diagrams', link: '/resources/diagrams/' },
          ],
        },
      ],
      customCss: [
        './src/styles/custom.scss',
      ],
      favicon: '/favicon.ico',
      defaultLocale: 'root',
      locales: {
        root: {
          label: 'English',
          lang: 'en',
        },
      },
    }),
  ],
  markdown: {
    remarkPlugins: [],
  },
});
