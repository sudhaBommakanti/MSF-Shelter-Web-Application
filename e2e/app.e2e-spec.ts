import { MsfFrontendPage } from './app.po';

describe('msf-frontend App', () => {
  let page: MsfFrontendPage;

  beforeEach(() => {
    page = new MsfFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
