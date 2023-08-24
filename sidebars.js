/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

module.exports = {
  docSidebar: [
    {
      type: 'category',
      label: '📓 Get Started',
      link: {
        type: 'doc',
        id: 'intro',
      },
      items: [
        {
          type: 'doc',
          id: 'level-0',
          label: 'Level 0',
        },
        {
          type: 'doc',
          id: 'level-1',
          label: 'Level 1',
        },
        {
          type: 'doc',
          id: 'level-2',
          label: 'Level 2',
        },
        {
          type: 'doc',
          label: '👩🏼‍🔬 Career Guide',
          id: 'career-guide',
        },
      ],
    },
    // {
    //   type: 'doc',
    //   label: '📓 Get started',
    //   id: 'intro',
    // },
    {
      type: 'category',
      label: '✅ Climate Solutions',
      link: {
        type: 'doc',
        id: 'solutions',
      },
      items: [
        {
          type: 'doc',
          label: 'Electricity',
          id: 'sector-electricity',
        },
        {
          type: 'doc',
          label: 'Food, Agriculture, and Land Use',
          id: 'sector-food-agriculture-and-land-use',
        },
        {
          type: 'doc',
          label: 'Industry',
          id: 'sector-industry',
        },
        {
          type: 'doc',
          label: 'Transportation',
          id: 'sector-transportation',
        },
        {
          type: 'doc',
          label: 'Buildings',
          id: 'sector-buildings',
        },
        {
          type: 'doc',
          label: 'Land Sinks',
          id: 'sector-land-sinks',
        },
        {
          type: 'doc',
          label: 'Coastal and Ocean Sinks',
          id: 'sector-coastal-and-ocean-sinks',
        },
        {
          type: 'doc',
          label: 'Engineered Sinks',
          id: 'sector-engineered-sinks',
        },
        {
          type: 'doc',
          label: 'Health and Education',
          id: 'sector-health-and-education',
        },
        {
          type: 'doc',
          label: 'Climate Adaptation',
          id: 'sector-climate-adaptation',
        },
        {
          type: 'doc',
          label: 'Media and Journalism',
          id: 'sector-media-and-journalism',
        },
        {
          type: 'doc',
          label: 'Advocacy or Policy',
          id: 'sector-advocacy-or-policy',
        },
      ],
    },
    {
      type: 'doc',
      label: '🌍 Resources',
      id: 'resources',
    },
  ],
};

// By default, Docusaurus generates a sidebar from the docs folder structure
// docSidebar: [
//   {
//     type: "category",
//     label: "Docs",
//     items: ["intro", "about", "jobseeker", "startup"],
//   },
// {
//   type: "link",
//   label: "Blog",
//   href: "/blog",
// },
// { type: "autogenerated", dirName: "." },
// ],
