const themes = require('prism-react-renderer').themes;
const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
// Define the function to generate image with caption
const generateImageWithCaption = (src, alt, caption) => {
  return `
    <figure>
      <img src="${src}" alt="${alt}" />
      <figcaption>${caption}</figcaption>
    </figure>
  `;
};
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
              keywords: ['note', 'tip', 'warning', 'important', 'info', 'caution', 'danger', 'question', 'podcast', 'newsletter', 'company', 'contribute', 'book'],
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
        customMarkdown: (md) => {
          md.renderer.rules.image = (tokens, idx, options, env, self) => {
            const token = tokens[idx];
            const srcIndex = token.attrIndex('src');
            const altIndex = token.attrIndex('alt');
            const src = token.attrs[srcIndex][1];
            const alt = token.attrs[altIndex][1];
    
            // Check if there's a caption in the frontmatter
            const frontMatter = token.meta.frontMatter;
            const caption = frontMatter && frontMatter.caption ? frontMatter.caption : '';
    
            // Generate the image with caption
            return generateImageWithCaption(src, alt, caption);
          };
        },
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
                  <div class="footer-logo-social-links">
                    <img src="/img/main/cth-earth-logo.png" alt="CTH Earth Logo">
                    <div class="social-links">
                      <a href="https://chat.climatetechhandbook.com" target="_blank" rel="noreferrer noopener" aria-label="Slack">
                        <img src="img/slack_icon.png" alt="Slack Icon" style="margin-right: 15px; width: 40px;"/>
                      </a>
                      <a href="https://www.linkedin.com/company/climate-tech-handbook/" target="_blank" rel="noreferrer noopener" aria-label="LinkedIn">
                        <img src="img/design/icons/linkedin_icon.svg" alt="LinkedIn Icon" style="margin-right: 15px;"/>
                      </a>
                      <a href="https://github.com/climate-tech-handbook" target="_blank" rel="noreferrer noopener" aria-label="Github">
                        <img src="img/design/icons/github-mark-black.svg" alt="Github Icon" style="width: 40px;" />
                      </a>
                    </div>
                  </div>


                  `,
                },
              ],
            },
            {
              title: "Start Learning",
              items: [
                {
                  label: "Mini Course",
                  to: "/level-1",
                },
                {
                  label: "Resource Library",
                  to: "/resources",
                },
                {
                  label: "Glossary",
                  to: "/glossary",
                },
                {
                  label: "Technologies",
                  to: "/technologies"
                },
              ],
            },
            {
              title: "Solutions",
              items: [
                {
                  label: "All Climate Solutions",
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

        tableOfContents: {
          minHeadingLevel: 2,
          maxHeadingLevel: 2,
        },
      }),
  }
);