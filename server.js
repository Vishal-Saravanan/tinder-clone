import express from 'express'
import mongoose from 'mongoose'
import Cards from "./dbCards.js"

//App Config
const app = express();
const port = process.env.PORT || 8001
const connection_url = `mongodb+srv://Vishal_S:RWhRFbbFTj7SvMgy@cluster0.rhn1mdz.mongodb.net/?retryWrites=true&w=majority`
//RWhRFbbFTj7SvMgy

//Middlewares

//DB config
mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
    .then(() => {
      console.log("Connected to MongoDB Atlas");
    })
    .catch((error) => {
      console.error("Error connecting to MongoDB Atlas:", error);
    });
  
//Api Endpoints
app.get('/', (req, res) => res.status(200).send("Hello World!!!"));

app.post('/tinder/card', (req, res) =>{
    const dbCard = req.body;
    
    Cards.create(dbCard, (err, data) => {
        if (err){
            res.status(500).send(err)
        }else{
            res.status(201).send(data)
        }
    })
})

app.get('/tinder/cards', (req, res) =>{
    Cards.find((err, data) => {
        if (err){
            res.status(500).send(err)
        }else{
            res.status(200).send(data)
        }
    })
})

//Listener
app.listen(port, () => console.log(`listerng on localhost: ${port}`))