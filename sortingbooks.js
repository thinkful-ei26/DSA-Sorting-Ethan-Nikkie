//We're given a stack of books and an empty bookshelf. 
// We'll pick each book from the stack at random.
//We put the first book on the shelf.
//As each subsequent book is picked up, we would compare it to each book
//already on the shelf to determine which books it belongs after and before


//In an array, this would be the equivalant of copying and creating a 
//new array for each book we're adding to the shelf

//In a LINKED LIST, this would be easier, as we would know from the existing list relationships where to slot the book, and it would be cheaper to simply reassign the appropriate next pointer rather than rebuilding an array