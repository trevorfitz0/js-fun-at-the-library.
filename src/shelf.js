
module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};
function shelfBook(book, shelf){
    if(shelf.length < 3) {
      shelf.unshift(book)
      return shelf
    }
}
function unshelfBook(book, shelf) {
    for(var i = 0; i < shelf.length; i++){
      if(shelf[i].title === book) {
          shelf.splice(i, 1)
          break
      } 
    }
    return shelf
 }
 function listTitles(shelf){
    var listOfTitles = ""
    for(var i = 0; i < shelf.length; i++) {
      listOfTitles += shelf[i].title
      if(i < shelf.length - 1){
        listOfTitles += ', ' 
      }
    }
    return listOfTitles
 }
 function searchShelf(shelf, book) {
  var isThere = false
    for(var i = 0; i < shelf.length; i++) {
      if(shelf[i].title === book){
          isThere = true
      }
    }
    return isThere
 }