import { SopunnyPage } from './app.po';

describe('sopunny App', function() {
  let page: SopunnyPage;

  beforeEach(() => {
    page = new SopunnyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
