import { Router } from "express";
import { createAuthor, getAllAuthors, getAuthorById } from "../controllers/authorController";

const authorRouter = Router()

authorRouter.get('/', getAllAuthors)
authorRouter.get('/:id', getAuthorById)
authorRouter.post('/', createAuthor)

export default authorRouter;