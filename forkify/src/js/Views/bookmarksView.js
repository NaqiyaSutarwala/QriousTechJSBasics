import View from './View';
import icons from '../../img/icons.svg';
import previewView from './previewView';

class BookmarksView extends View {
  _parentElement = document.querySelector('.bookmarks__list');
  _errorMessage = `No Bookmarks found`;
  _message = '';

  addHandlerRender(handler) {
    window.addEventListener('load', handler);
  }

  _generateMarkup() {
    return this._data
      .map(bookmarks => {
        return previewView.render(bookmarks, false);
      })
      .join('');
  }
}

export default new BookmarksView();
