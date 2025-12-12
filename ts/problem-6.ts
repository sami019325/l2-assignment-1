{
    // 


    type Book = {
        title: string,
        author: string,
        publishedYear: number
    }

    const book1: Book = {
        title: "Sample Book",
        author: "John Doe",
        publishedYear: 2022
    };

    const isRecentBook = (book: Book): boolean => {
        const date: Date = new Date();
        return book.publishedYear >= date.getFullYear() - 5;
    }

    console.log(isRecentBook(book1));
    // 
}

