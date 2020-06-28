import * as dashboardPage from '../libs/dashboardPage';

describe('Dashboard', () => {
    before('Login', function () {
      cy.login();
    });
    beforeEach('Open dashboard page', function () {
      dashboardPage.open();
    });
it('Visual test of the components', function () {
        dashboardPage.getHeader().matchImageSnapshot(`${Cypress.browser.name} Header`);
        dashboardPage.getExport().matchImageSnapshot(`${Cypress.browser.name} Export button`);
        dashboardPage.getDashboardFilters().matchImageSnapshot(`${Cypress.browser.name} Dashboard filters`);
        dashboardPage.getNavigationBar().matchImageSnapshot(`${Cypress.browser.name} Navigation bar`);
  });
});
