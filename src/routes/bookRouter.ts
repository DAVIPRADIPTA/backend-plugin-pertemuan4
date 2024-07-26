import { Router } from "express";
// import { createAuthor, getAllAuthors, getAuthorById } from "../controllers/authorController";
import { createBook, getAllBooks } from "../controllers/bookController";

const booksRouter = Router()

booksRouter.get('/', getAllBooks)
// booksRouter.get('/:id', getAuthorById)
booksRouter.post('/', createBook)

export default booksRouter;