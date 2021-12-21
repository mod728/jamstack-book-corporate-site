import * as React from "react"
import { graphql } from "gatsby" 
import { GatsbyImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as style from "../styles/singleBlog.module.scss"
 
const SingleBlog = (props) => {   
    return(
      <Layout>
            <Seo title={props.data.contentfulBlog.title} description={props.data.contentfulBlog.excerpt} /> 
            <div className={style.hero}>
                <GatsbyImage image={props.data.contentfulBlog.image.gatsbyImageData} alt="blog-image" />  
            </div>
            <div className={style.wrapper}>  
                <div className={style.container}>               
                    <h1>{props.data.contentfulBlog.title}</h1> 
                    <p>{props.data.contentfulBlog.date}</p>  
                    <div dangerouslySetInnerHTML={{ __html: props.data.contentfulBlog.textBody.childMarkdownRemark.html }} />  
                </div> 
            </div>
        </Layout>                    
    )
}

export default SingleBlog

export const query = graphql` 
    query ContentfulSingleBlogQuery ($slug: String!) { 
        contentfulBlog (slug: { eq: $slug }) {   
            title
            excerpt
            date(formatString: "YYYY-MM-DD")
            image {
                gatsbyImageData(formats: AUTO, placeholder: BLURRED, quality: 90, width: 1000)
            }
            textBody {
                childMarkdownRemark {
                    html
                }
            }
        }
    }
`                            