// src/sanity/client.js
import { createClient } from 'sanity';

const client = createClient({
  projectId: 'your_project_id', // Replace with your Sanity project ID
  dataset: 'your_dataset', // Replace with your Sanity dataset name
  useCdn: true,
});

export default client;
