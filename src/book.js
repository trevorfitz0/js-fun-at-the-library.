function createTitle(title) {
    newTitle = ('The ' + title)
    return newTitle
}
function buildMainCharacter(characterName, characterAge, characterPronouns) {
    var newCharacter = {
        name: characterName,
        age: characterAge,
        pronouns: characterPronouns
    }
    return newCharacter
}
function saveReview(review, reviews) {
    var isSame

    for(var i = 0; i < reviews.length; i++){
      if(reviews[i] === review){
        isSame = true
        break
      }
    }

    if(isSame !== true){
        reviews.push(review)
    }
    return reviews
}
function calculatePageCount(bookTitle){
    //bookTitle = bookTitle.replace(/\s/g, '')
    var pages = bookTitle.length * 20 
    return pages
}
function writeBook(bookTitl, bookCharc, bookGenre){
    var book = {
      title: bookTitl,
      mainCharacter: bookCharc,
      pageCount: calculatePageCount(bookTitl),
      genre: bookGenre
    }
    return book
}
function editBook(book) {
    pageCount = book.pageCount * .75
    book.pageCount = pageCount
    return book
}


module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}