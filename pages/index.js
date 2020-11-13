import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'

// This will be automatically called by next js
export async function getStaticProps() {
  // Get external data from the file system, API, DB, etc.
  const allPostsData = getSortedPostsData(); // getting data from file system markdown
  return {
    props: {
      allPostsData // markdown data array
    }
  }
}
// props
export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hi I am Engku Muhammad Ihsan. Currently I am fullstack web developer / System Engineer and also have expertise with Angular8, Rails, Express and front end. Done few company projects. Won the best thesis graduation award in Tottori University. Got straight A's in Malaysia's elementary, primary, secondary central examination. Got 935 point in Toeic. Lover of innovation and everything related to generate new knowledge. Face problems with a smile and solve them as soon as possible. Very calculated about the time I spend and work I do.</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {/* allPostsData is data from markdown */}
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
            <Link href={`/posts/${id}`}>
              <a>{title}</a>
            </Link>
            <br />
            <small className={utilStyles.lightText}>
              <Date dateString={date} />
            </small>
          </li>
          ))}
        </ul>
      </section>

    </Layout>
  )
}
