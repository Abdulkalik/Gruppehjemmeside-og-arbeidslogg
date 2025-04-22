import { defineConfig } from 'sanity'
import { schemaTypes } from './schemaTypes' // NOT from src/

export default defineConfig({
  name: 'default',
  title: 'arbeidskravet3',
  projectId: 'gctndu6d',
  dataset: 'arbeidskravet3',

  schema: {
    types: schemaTypes,
  },
})
