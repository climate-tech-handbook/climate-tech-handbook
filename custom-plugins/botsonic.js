module.exports = function (context, options) {
  return {
    name: 'botsonic-plugin',
    injectHtmlTags() {
      return {
        headTags: [
          {
            tagName: 'script',
            attributes: {
              src: 'https://widget.botsonic.com/CDN/botsonic.min.js',
              async: true,
            },
          },
          {
            tagName: 'script',
            innerHTML: `
              window.Botsonic = window.Botsonic || function () {
                (window.Botsonic.q = window.Botsonic.q || []).push(arguments);
              };
              window.Botsonic("init", {
                serviceBaseUrl: "https://api-azure.botsonic.ai",
                token: "${options.botsonicToken}",
              });
            `,
          },
        ],
      };
    },
  };
};