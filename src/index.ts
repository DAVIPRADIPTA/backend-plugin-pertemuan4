import express from "express"
import dotenv from "dotenv"

import authorRouter from "./routes/authorRouter";
import booksRouter from "./routes/bookRouter";

const app = express();

dotenv.config();

const PORT = process.env.PORT;

app.use(express.json());

app.use('/authors', authorRouter)
app.use('/books', booksRouter)

app.get('/', async (req, res) => {
     res.send({
          message: "Awesome it works"
     });
});
app.listen(PORT, () => {
     console.log("server is running on port: " , PORT)
})

