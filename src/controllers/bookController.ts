import { PrismaClient } from "@prisma/client";

const bookClient = new PrismaClient().book;


export const getAllBooks = async (req, res) => {
     try {
         const allBooks = await bookClient.findMany();
 
         res.status(200).send({
             msg: "get all books successfully",
             data: allBooks
         })
     } catch (e) {
         console.log(e);
        
     }
}

export const createBook = async (req, res) => {
     try {
         const booksData = req.body;
         const book = await bookClient.create({
             data: {
                 title: booksData.title,
                 author: {
                     connect: {
                         id: booksData.authorId
                     }
                 }
             }
         });
         res.status(201).send({
             msg: "create data book succesfully",
             data: book
         })
     } catch (e) {
         console.log(e);
     }
 }