
function createLibrary(libraryName){
    var library = {
      name: libraryName,
      shelves: {
        fantasy: [],
        fiction: [],
        nonFiction: []
      }
    }
    return library
}
function addBook(library, book) {
    var genre = book.genre
    if(genre === 'fantasy'){
      library.shelves.fantasy.push(book)
    } else if(genre === 'fiction'){
      library.shelves.fiction.push(book)
    } else if(genre === 'nonFiction'){
      library.shelves.nonFiction.push(book)
    } 
}
function checkoutBook(library, book, genre) {
  if(genre === 'fantasy'){
    for(var i = 0; library.shelves.fantasy.length; i++){
      if(library.shelves.fantasy[i].title === book)
        library.shelves.fantasy.splice(i)
        return ("You have now checked out " + book + " from the " + library.name)
    }
  } else if(genre === 'fiction'){
    for(var i = 0; library.shelves.fiction.length; i++){
      if(library.shelves.fiction[i].title === book)
        library.shelves.fiction.splice(i)
        return ("You have now checked out " + book + " from the " + library.name)
    }
  } else if(genre === 'nonFiction'){
    for(var i = 0; library.shelves.nonFiction.length; i++){
      if(library.shelves.nonFiction[i].title === book)
        library.shelves.nonFiction.splice(i)
        return ("You have now checked out " + book + " from the " + library.name)
    }
  } 
  return ("Sorry, there are currently no copies of " + book + " available at the " + library.name)
}





module.exports = {
  createLibrary,
  addBook,
  checkoutBook
};
