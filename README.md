# NEXT JS BLOG APP
visit the website [here](https://nextjs-blog-sigma-wheat.vercel.app/)

This is a starter template for [Learn Next.js](https://nextjs.org/learn).

## Styling 
In Next.js, you should import global CSS files by importing them to pages/_app.js. You cannot import global CSS anywhere else.

The reason that global CSS can't be imported outside of pages/_app.js is that global CSS affects all elements on the page.

If you were to navigate from the homepage to the /posts/first-post page, global styles from the homepage would affect /posts/first-post unintentionally.

## Pre-rendering and Data Fetching
https://nextjs.org/learn/basics/data-fetching/with-data

### Pre rendering / Static generation with data
```
export default function Home(props) { ... }

export async function getStaticProps() {
  // Get external data from the file system, API, DB, etc.
  const data = ...

  // The value of the `props` key will be
  //  passed to the `Home` component
  return {
    props: ...
  }
}
```
- refer https://nextjs.org/learn/basics/data-fetching/getstaticprops-details for seeing the prerender query type

### Fetching Data at Request Time / server side rendering
You should use getServerSideProps only if you need to **pre-render a page** whose **data must be fetched at request time**. 
Time to first byte (TTFB) will be slower than getStaticProps because the server must compute the result on every request, and the result cannot be cached by a CDN without extra configuration.


```
export async function getServerSideProps(context) {
  return {
    props: {
      // props for your component
    }
  }
}
```

- `getServerSideProps(contenxt)` & `getStaticProps(props)` will be called automatically by nextjs on creating component so no need to called manually


<!-- THINGS TO LEARN NEXT -->
https://nextjs.org/learn/basics/deploying-nextjs-app/finally