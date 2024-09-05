/* eslint-disable prettier/prettier */
import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure'
import schemas from './app/sanity/schemas/index.js';
//import project from './app/sanity/schemas/project-schema.jsx';

const config = defineConfig({
    projectId: 'bjc13yha',
    dataset: 'production',
    apiVersion: '2024-09-01',
    basePath: '/admin',
    plugins: [structureTool()],
    schema: {
        types: schemas
    },
});

export default config;
