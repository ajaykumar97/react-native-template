const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'React Native Template',
  tagline: 'Reduce project initialization time by 80%',
  url: 'https://ajaykumar97.github.io/react-native-template',
  baseUrl: '/react-native-template/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'ajaykumar97',
  projectName: 'react-native-template',
  themeConfig: {
    navbar: {
      title: 'React Native Template',
      logo: {
        alt: 'react-native-template Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'doc',
          docId: 'getting-started',
          position: 'left',
          label: 'Docs',
        },
        {
          href: 'https://www.npmjs.com/package/@ajaysidhu/react-native-template',
          label: 'npm',
          position: 'right',
        },
        {
          href: 'https://github.com/ajaykumar97/react-native-template',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting Started',
              to: '/docs/getting-started',
            },
            {
              label: 'Key Features',
              to: '/docs/key-features',
            },
            {
              label: 'Project Structure',
              to: '/docs/project-structure',
            },
            {
              label: 'Scripts',
              to: '/docs/scripts',
            },
          ],
        },
      ],
      copyright: 'Made with ❤️ by Ajay Kumar',
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/ajaykumar97/react-native-template/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/ajaykumar97/react-native-template/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
