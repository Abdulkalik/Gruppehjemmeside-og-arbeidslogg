import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'gctndu6d', // your projectId
  dataset: 'arbeidskravet3',
  useCdn: true,
  apiVersion: '2023-01-01',
})

export default client
