const fs = require('fs');
const sanityClient = require('@sanity/client')
const globby = require('globby')
const dayjs = require('dayjs')

const client = sanityClient({
  projectId: 'kjg6yd05',
  dataset: 'production',
  token:
    'sk7egF1zKn07Aoa9KKpbAIeZ04eFHTz6DpWOgoVGWR1Cv5B7qeiLIY2qZg8mG9AHbmUq7xob4rSFBQBRpHbjEAsOGjdjbfRuy0uvWwjwIQX33PNGv7BAjtmQoehT4M7rhsqGYfWXKl0AATRJ7ehzBOloQxR07zDb33nSIxmAuXZXGdmxZJY4',
  useCdn: true,
  apiVersion: 'v1'
})

 const generateSitemap =  async () => {
   try {

   
  const postsQuery = `*[_type == "post"]{
    "slug":slug.current,
    _updatedAt,
    title,
    excerpt,
    "author":author->{name},
    publishedAt,
    "category": categories[0]->{title}
  }`
  const categoryQuery = '*[_type == "category"]{"slug":slug.current,_updatedAt}'
  const entrepriseQuery = '*[_type == "company" && company._id !="59d00fa9-6b14-446e-8b57-4b0e2cc1b7b6" && published==true]{"slug":slug.current,_updatedAt}'
  const posts = await client.fetch(postsQuery)
  const categories = await client.fetch(categoryQuery)
  const entreprises = await client.fetch(entrepriseQuery)
  // Ignore Next.js specific files (e.g., _app.js) and API routes.
  const pages = await globby(['pages/**/*{.js,.tsx}', '!pages/_*{.js,.tsx}', '!pages/api', '!pages/**/[*{.js,.tsx}', '!pages/form', '!pages/trigger'])
  const pageSitemap =`<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
            ${pages
              .map((page) => {
                const path = page.replace('pages', '').replace('.js', '').replace('.tsx', '')
                const route = path === '/index' ? '' : path
                return `
                        <url>
                            <loc>${`https://practicalprogramming.fr${route}`}</loc>
                            <lastmod>2021-02-24</lastmod>
                            <changefreq>monthly</changefreq>
                        </url>
                    `
              })
              .join('')}
  </urlset>
`
  const postSitemap = `<?xml version="1.0" encoding="UTF-8"?>
          <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
                ${posts
                  .map(post => {
                    return `
                          <url>
                              <loc>${`https://practicalprogramming.fr/${post.slug}`}</loc>
                              <lastmod>${post._updatedAt}</lastmod>
                              <changefreq>weekly</changefreq>
                          </url>
                      `
                  }).join('')}
          </urlset>
      `

  const categorySitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${categories
          .map(category => {
            return `
                  <url>
                      <loc>${`https://practicalprogramming.fr/category/${category.slug}`}</loc>
                      <lastmod>${category._updatedAt}</lastmod>
                      <changefreq>yearly</changefreq>
                  </url>
              `
          }).join('')}
  </urlset>
`
const entrepriseSitemap =`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${entreprises
        .map(entreprise => {
          return `
                <url>
                    <loc>${`https://practicalprogramming.fr/entreprise/${entreprise.slug}`}</loc>
                    <lastmod>${entreprise._updatedAt}</lastmod>
                    <changefreq>monthly</changefreq>
                </url>
            `
        }).join('')}
</urlset>
`
const today = new Date()
const masterSitemap = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
   <sitemap>
      <loc>https://practicalprogramming.fr/author-sitemap.xml</loc>
      <lastmod>2020-09-28</lastmod>
   </sitemap>
   <sitemap>
      <loc>https://practicalprogramming.fr/category-sitemap.xml</loc>
      <lastmod>${today.toISOString()}</lastmod>
   </sitemap>
   <sitemap>
      <loc>https://practicalprogramming.fr/page-sitemap.xml</loc>
      <lastmod>${today.toISOString()}</lastmod>
   </sitemap>
   <sitemap>
      <loc>https://practicalprogramming.fr/post-sitemap.xml</loc>
      <lastmod>${today.toISOString()}</lastmod>
   </sitemap>
   <sitemap>
      <loc>https://practicalprogramming.fr/entreprise-sitemap.xml</loc>
      <lastmod>${today.toISOString()}</lastmod>
   </sitemap>
</sitemapindex>
`

const blogPostsRssXml = blogPosts => {
  let latestPostDate = '';
  let rssItemsXml = '';
  blogPosts.forEach((post) => {
    const postDate = Date.parse(post.publishedAt);

    // Remember to change this URL to your own!
    const postHref = `https://practicalprogramming.fr/${post.slug}`;

    if (!latestPostDate || postDate > Date.parse(latestPostDate)) {
      latestPostDate = post.publishedAt;
    }

    rssItemsXml += `<item>
        <title><![CDATA[${post.title}]]></title>
        <dc:creator><![CDATA[${post.author.name}]]></dc:creator>
        <link>${postHref}</link>
        <pubDate>${dayjs(post.publishedAt).format("ddd, D MMM YYYY HH:mm:ss ZZ")}</pubDate>
        <category><![CDATA[${post.category.title}]]></category>
        <guid isPermaLink="false">${postHref}</guid>
        <description>
          <![CDATA[${post.excerpt}]]>
        </description>
    </item>`;
  });
  return {
    rssItemsXml,
    latestPostDate
  };
};

const rssXml = blogPosts => {
  const { rssItemsXml, latestPostDate } = blogPostsRssXml(blogPosts);

  // Edit the '<link>' and '<description>' data here to reflect your own website details!
  return `<?xml version="1.0" ?>
  <rss
    xmlns:dc="http://purl.org/dc/elements/1.1/"
    xmlns:content="http://purl.org/rss/1.0/modules/content/"
    xmlns:atom="http://www.w3.org/2005/Atom"
    version="2.0"
  >
    <channel>
        <title><![CDATA[Practical Programming : le Média des Développeurs Web]]></title>
        <link>https://practicalprogramming.fr</link>
        <description>![CDATA[L'actualité dédié aux devs, c'est sur Practical Programming. Commencez ou boostez votre carrière avec nos guides, tutoriels, articles et bien d'autres.]]
        </description>
        <language>fr</language>
        <image>
          <url>https://practicalprogramming.fr/wp-content/uploads/2020/07/cropped-PracticalProgramming-favicon-32x32.png</url>
          <title>Practical Programming : le Média des Développeurs Web</title>
          <link>https://practicalprogramming.fr</link>
          <width>32</width>
          <height>32</height>
        </image> 
        <lastBuildDate>${dayjs(latestPostDate).format("ddd, D MMM YYYY HH:mm:ss ZZ")}</lastBuildDate>
        ${rssItemsXml}
    </channel>
    
  </rss>`;
};
  fs.writeFileSync('public/page-sitemap.xml', pageSitemap)
  fs.writeFileSync('public/post-sitemap.xml', postSitemap)
  fs.writeFileSync('public/category-sitemap.xml', categorySitemap)
  fs.writeFileSync('public/entreprise-sitemap.xml', entrepriseSitemap)
  fs.writeFileSync('public/sitemap.xml', masterSitemap)
  fs.writeFileSync('public/rss.xml', rssXml(posts))
} catch (err) {
  console.log(err)
}

}

generateSitemap()