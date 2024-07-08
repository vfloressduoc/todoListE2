import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:8100',
    viewportWidth: 412,
    viewportHeight: 915,
    experimentalStudio: true

  },
  component: {
    devServer: {
      framework: 'angular',
      bundler: 'webpack',
    },
    specPattern: '**/*.cy.ts',
    viewportWidth: 412,
    viewportHeight: 915
  },
})
