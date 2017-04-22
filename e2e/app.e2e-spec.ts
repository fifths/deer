import { Ng2BootstrapAdminPage } from './app.po';

describe('ng2-bootstrap-admin App', () => {
  let page: Ng2BootstrapAdminPage;

  beforeEach(() => {
    page = new Ng2BootstrapAdminPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
