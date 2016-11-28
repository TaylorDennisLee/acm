import { AcmPage } from './app.po';

describe('acm App', function() {
  let page: AcmPage;

  beforeEach(() => {
    page = new AcmPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
