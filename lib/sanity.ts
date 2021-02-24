import sanityClient from '@sanity/client'

export default sanityClient({
  // Find your project ID and dataset in `sanity.json` in your studio project
  projectId: 'kjg6yd05',
  dataset: 'production',
  token:
    'sk7egF1zKn07Aoa9KKpbAIeZ04eFHTz6DpWOgoVGWR1Cv5B7qeiLIY2qZg8mG9AHbmUq7xob4rSFBQBRpHbjEAsOGjdjbfRuy0uvWwjwIQX33PNGv7BAjtmQoehT4M7rhsqGYfWXKl0AATRJ7ehzBOloQxR07zDb33nSIxmAuXZXGdmxZJY4',
  useCdn: false,
  // useCdn == true gives fast, cheap responses using a globally distributed cache.
  // Set this to false if your application require the freshest possible
  // data always (potentially slightly slower and a bit more expensive).
})
