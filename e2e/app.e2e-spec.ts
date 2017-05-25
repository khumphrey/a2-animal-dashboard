import { A2TesterAppPage } from './app.po';

describe('a2-tester-app App', () => {
  let page: A2TesterAppPage;

  beforeEach(() => {
    page = new A2TesterAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
