const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(
  module.exports = {
    title: "The Climate Tech Handbook",
    tagline: "solving the climate crisis.",
    url: "https://www.climatetechhandbook.com",
    baseUrl: "/",
    onBrokenLinks: "ignore",
    onBrokenMarkdownLinks: "warn",
    favicon: "img/main/favicon.ico",
    organizationName: "The Climate Tech Handbook", // Usually your GitHub org/user name.
    projectName: "The Climate Tech Handbook", // Usually your repo name.
    plugins: [
      require.resolve('docusaurus-lunr-search'),
      require.resolve('docusaurus-plugin-image-zoom'),
    ],

    presets: [
      [
        "@docusaurus/preset-classic",
        /** @type {import('@docusaurus/preset-classic').Options} */
        ({
          docs: {
            sidebarPath: require.resolve("./sidebars.js"),
            // editUrl:
            //   "https://www.climatetechhandbook.com/admin/#/edit/",
            routeBasePath: "/",
            showLastUpdateAuthor: false,
            showLastUpdateTime: true,
            admonitions: {
              tag: ':::',
              keywords: ['note', 'tip', 'info', 'caution', 'danger', 'question', 'podcast', 'newsletter', 'company', 'contribute', 'book'],
            }
          },
          blog: {
            showReadingTime: true,
            // Please change this to your repo.
          },
          theme: {
            customCss: [
              require.resolve("./static/custom.css"),
              // require.resolve("./src/css/tailwind.css"),
            ],
          },
        }),
      ],
    ],

    customFields: {
      statement:
        "Find a career you love",
    },

    themeConfig:
      /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
      ({
        docs: {
          sidebar: {
            hideable: true,
            autoCollapseCategories: true,
          },
        },
        // zoom: {
        //   selector: '.markdown :not(em) > img',
        //   background: {
        //     light: 'rgb(255, 255, 255)',
        //     dark: 'rgb(50, 50, 50)'
        //     },
        // },
        navbar: {
          // title: "Climate Tech Handbook",
          logo: {
            alt: "CTH Earth Logo",
            src: "img/main/cth-earth-logo.png",
          },
          items: [
            {
              type: "doc",
              docId: "intro",
              position: "right",
              label: "Start Learning",
            },
            {
              type: "doc",
              docId: "solutions",
              position: "right",
              label: "Climate Solutions",
            },
            {
              type: "doc",
              docId: "resources",
              position: "right",
              label: "Resources",
            },
            // {
            //   type: "doc",
            //   docId: "about",
            //   position: "right",
            //   label: "About Us",
            // },
            {
              to: "/contribute",
              className: "contribute-button",
              position: "right",
              // target: "_blank",
              label: "Contribute"
            },
          ],
          hideOnScroll: true,
        },
        footer: {
          style: "dark",
          links: [
            {
              items: [
                {
                  html: `
                    <img src="/img/main/cth-earth-logo.png" alt="CTH Earth Logo">
                    <a href="https://chat.climatetechhandbook.com" target="_blank" rel="noreferrer noopener" aria-label="Slack">
                      <img src="img/slack_icon.png" alt="Slack Icon" style="margin-right: 8px; width: 40px;"/>
                    </a>
                    <a href="https://www.linkedin.com/company/climate-tech-handbook/" target="_blank" rel="noreferrer noopener" aria-label="LinkedIn">
                      <img src="img/design/icons/linkedin_icon.svg" alt="LinkedIn Icon" style="margin-right: 8px;"/>
                    </a>
                    <a href="https://github.com/climate-tech-handbook" target="_blank" rel="noreferrer noopener" aria-label="Github">
                      <img src="img/design/icons/github-mark-white.svg" alt="Github Icon" style="width: 40px;" />
                    </a>
                  `,
                },
              ],
            },
            {
              title: "Job Seekers",
              items: [
                {
                  label: "Resource Library",
                  to: "/resources",
                },
                {
                  label: "Career Guide",
                  to: "/career-guide",
                },
                {
                  label: "Technologies",
                  to: "/technologies"
                },
                {
                  label: "Glossary",
                  to: "/glossary",
                },
              ],
            },
            {
              title: "Startups",
              items: [
                {
                  label: "Choose a Sector",
                  to: "/solutions",
                },
              ],
            },
            {
              title: "About Us",
              items: [
                {
                  label: "About The Handbook",
                  to: "/about",
                },
                {
                  label: "Contribute",
                  to: "/contribute",
                },
              ],
            },
            {
              title: "News",
              items: [
                {
                  label: "Blog",
                  to: "/blog",
                  position: "right",
                },
              ],
            },
          ],
          // copyright: `Copyright © ${new Date().getFullYear()} Differential Design, LLC`,
        },

        prism: {
          theme: lightCodeTheme,
          darkTheme: darkCodeTheme,
        },

        colorMode: {
          defaultMode: "light",
          disableSwitch: true,
          respectPrefersColorScheme: false,
        },
      }),
  }
);