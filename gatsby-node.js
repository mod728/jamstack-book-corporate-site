const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions }) => {  
    const { createPage } = actions   

    const result = await graphql(`              
        query {
            allContentfulBlog {
                edges {
                    node {
                        slug
                    }
                }
            }
        }
    `)
  
    result.data.allContentfulBlog.edges.forEach(({ node }) => {
        createPage({
            path: node.slug,
            component: path.resolve(`./src/templates/single-blog.js`),
            context: {
                slug: node.slug,
            },
        })
    })
}