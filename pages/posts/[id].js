// FILE below the pages/ will be consider as pages with routes in next js eg pages/test.js  will have routes http://localhost:3000/test.js
// Pages that begin with [ and end with ] are dynamic routes in Next.js.
// this will be a template file for all the blog with the specific id that is rendered from the markdown file
// dynamic routes to catch all routes https://nextjs.org/learn/basics/dynamic-routes/dynamic-routes-details
import Head from 'next/head'
import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Date from '../../components/date'
import utilStyles from '../../styles/utils.module.css'

export default function Post({ postData }) {
    return (
      <Layout>
         <Head>
            <title>{postData.title}</title>
        </Head>
        <article>
            <h1 className={utilStyles.headingXl}>{postData.title}</h1>
            <div className={utilStyles.lightText}>
              <Date dateString={postData.date} />
            </div>
            <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>

      </Layout>
    )
}
// will change the path to the path with the id from markdown file name
export async function getStaticPaths() {
    const paths = getAllPostIds()
    return {
      paths, // eg http://localhost:3000/posts/ssg-ssr
      fallback: false 
        // If fallback is false, then any paths not returned by getStaticPaths will result in a 404 page.
        // If fallback is true, then the behavior of getStaticProps changes:
        //     The paths returned from getStaticPaths will be rendered to HTML at build time.
        //     The paths that have not been generated at build time will not result in a 404 page. Instead, Next.js will serve a “fallback” version of the page on the first request to such a path.
        //     In the background, Next.js will statically generate the requested path. Subsequent requests to the same path will serve the generated page, just like other pages pre-rendered at build time.
    }
}

export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id)
    return {
      props: {
        postData
      }
    }
}