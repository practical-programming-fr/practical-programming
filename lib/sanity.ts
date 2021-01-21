import sanityClient from '@sanity/client'

export default sanityClient({
  // Find your project ID and dataset in `sanity.json` in your studio project
  projectId: 'kjg6yd05',
  dataset: 'production',
  token:
    'sktFQNB8M4mfvU9hjhNCgkHroifPCpzrrlE8bAVFAEvgoMtvL163iUGU2lRFH69C254BCqS9JLK4NKpbXdleCbKChRU5C5gwrpdMy178Jnss6pxktQCBfvuZUAkgTaW9tt3Qka85heEcfQWgqr2AyUDtmK9WT46K8CV9Bve5U5cxp6ALRqAi',
  useCdn: true,
  // useCdn == true gives fast, cheap responses using a globally distributed cache.
  // Set this to false if your application require the freshest possible
  // data always (potentially slightly slower and a bit more expensive).
})
