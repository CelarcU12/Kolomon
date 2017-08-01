import { Kolomon3Page } from './app.po';

describe('kolomon3 App', function() {
  let page: Kolomon3Page;

  beforeEach(() => {
    page = new Kolomon3Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
