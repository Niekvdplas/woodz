import { visionTool } from '@sanity/vision';
import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';

import { schemaTypes } from './schemas';

const projectId : string = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset : string = process.env.NEXT_PUBLIC_SANITY_DATASET!;

export default defineConfig({
  basePath: '/studio', // <-- important that `basePath` matches the route you're mounting your studio from, it applies to both `/pages` and `/app`

  projectId,
  dataset,

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
});
