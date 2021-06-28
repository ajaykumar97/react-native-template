const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'React Native Template',
  tagline: 'Reduce project initialization time by 80%',
  url: 'https://ajaykumar97.github.io/react-native-template/',
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
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'getting-started/installing',
          position: 'left',
          label: 'Docs',
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
              label: 'Installing',
              to: '/docs/getting-started/installing',
            },
            {
              label: 'Libraries',
              to: '/docs/getting-started/libraries',
            },
            {
              label: 'Project Structure',
              to: '/docs/getting-started/project-structure',
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
