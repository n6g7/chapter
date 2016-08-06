export function addBook(book) {
  return {
    type: 'ADD_BOOK',
    book
  };
}

export function updateBook(book) {
  return {
    type: 'UPDATE_BOOK',
    book
  }
}

export function removeBook(book) {
  return {
    type: 'REMOVE_BOOK',
    book
  }
}

export function importState(importedState) {
  return {
    type: 'IMPORT_STATE',
    importedState
  };
}
