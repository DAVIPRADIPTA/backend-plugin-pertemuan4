import { PrismaClient } from "@prisma/client";

const authorClient = new PrismaClient().author;


export const getAllAuthors = async (req,res) => {
     try {
          const allAuthor = await authorClient.findMany({
               include:{
                    books:{
                         select:{
                              title : true,
                         }
                    }
               }
          })
          res.status(200).send({
               message: "get all author success",
               data: allAuthor
          })
     }catch (e) {
          console.log(e)
     }
} 

export const getAuthorById = async (req,res) => {
     try{
          const authorId = req.params.id
          const author = await authorClient.findUnique({
               where:{
                    id : authorId
               },
               include:{
                    books:true
               },
          
          })
          res.status(200).send({
               data : author
          })
     }catch (e) {
          console.log(e)
     }
}

export const createAuthor = async (req,res) => {
     try {
          const authorData = req.body
          const author = await authorClient.create({
               data : authorData,
          })
          res.status(201).send({
               message : 'author crated',
               data : author
          })
     }catch (e){
          console.log(e)
     }
}