// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
require('cypress-commands');
import '@percy/cypress';
import { addMatchImageSnapshotCommand } from 'cypress-image-snapshot/command';
if (Cypress.config('isInteractive')) {
  Cypress.Commands.add('matchImageSnapshot', () => {
    cy.log('Skipping snapshot 👀')
  })
} else {
  addMatchImageSnapshotCommand()
}
// Alternatively you can use CommonJS syntax:
// require('./commands')
