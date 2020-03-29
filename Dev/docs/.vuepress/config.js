module.exports = {
  title: 'Hello VuePress',
  description: 'Just playing around',
  themeConfig: {
    nav: [
      {
        text: 'Home',
        link: '/'
      },
      {
        text: 'Guide',
        link: '/guide/'
      },
      {
        text: 'External',
        items: [{
            text: 'Chinese',
            link: '/language/chinese'
          },
          {
            text: 'Japanese',
            link: '/language/japanese'
          }
        ]
      },
    ],
    sidebarDepth: 2,
    sidebar: [
      {
        title: 'Group 1',
        collapsable: false,
        children: [
          '/'
        ]
      },
      {
        title: 'Group 2',
        collapsable: false,
        children: [
          '/page/',
          '/page/one.md',
          '/page/two.md',
        ]
      }
    ]
  }
}
