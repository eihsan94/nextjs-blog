# NEXT JS BLOG APP
## ABOUT
visit the website [here](https://nextjs-blog-sigma-wheat.vercel.app/)

This is a starter template for [Learn Next.js](https://nextjs.org/learn).

## Project Structure

<pre>
components/                  shared components across the apps, layout etc
lib                          contain functions that transformed markdown to react props
pages/                       page and api dir
|- posts                     posts pages eg http://localhost:3000/posts/***
|  |- [id].js                dynamic routes and pages http://localhost:3000/posts/[id] where id is defined in the [id].js
|- _app.js                   This App component is the top-level component which will be common across all the different pages it is used for applying global css styles to.
|- index.js                  Home route of the app (the page that will be shown on http://localhost:3000/)
|- posts                     Markdown files blog contents
public/                      コンパイルされた静的ファイル　compiled static file img etc
styles/                      global styles directory like global css and utils css
|- global.css                usually for html css like body padding anchor global image css
|- util.module.css           usually for html css for fonts like font size heading etc
postcss.config.css           Next.js compiles CSS for its built-in CSS support using PostCSS.
tailwind.config.css          tailwind css config file

</pre>

## start the app
```
npm install
npm run dev
```


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


## deploy page
https://vercel.com/eihsan94

## THINGS TO LEARN NEXT 
https://nextjs.org/learn/basics/deploying-nextjs-app/finally