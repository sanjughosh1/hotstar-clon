import express from 'express';

const app = express();

// app.get('/' , (req , res)=> {
//     res.send('serveris ready')
// });
app.get('/api/jokes' , (req , res)=> {
    const jokes = [
    {
        id : 1 ,
        titel : "a jock",
        content : "this is a jock"
    },
    {
        id : 2 ,
        titel : "a jock",
        content : "this is a jock"
    },
    {
        id : 3 ,
        titel : "a jock",
        content : "this is a jock"
    },
    {
        id : 4 ,
        titel : "a jock",
        content : "this is a jock"
    },
    {
        id : 5 ,
        titel : "a jock",
        content : "this is a jock"
    }
    ]
    res.send(jokes)
});

const port = process.env.PORT  ||  3000 ;

app.listen(port,()=> {
    console.log(`server at http://localhost : ${port}`)
})
