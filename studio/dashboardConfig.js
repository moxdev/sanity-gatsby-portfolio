export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f9c1cd46f34ba00defe642b',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-2fmi9v3p',
                  apiId: '7846e9f9-ab85-4638-901d-329b3cde9f77'
                },
                {
                  buildHookId: '5f9c1cd4f8ede20156a9adb8',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-h5obphfd',
                  apiId: '853edac5-cbf1-490f-82f7-fd4bdc3a0f29'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/moxdev/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-h5obphfd.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
