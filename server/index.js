// // const express = require('express');
// // const mongoose = require('mongoose');
// // const AutherApi = require('./routes/auther');
// // const BookApi = require('./routes/book');
// // const app = express();
// // const PORT = 3001;

// // app.use(express.json());

// // const url = "mongodb+srv://lgopikrishna84:lgopikrishna@cluster.btodjyc.mongodb.net/?retryWrites=true&w=majority&appName=cluster";
// // mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
// //     .then(() => {
// //         console.log("MongoDB connected, you can proceed");
// //     })
// //     .catch((err) => console.log(err));

// // app.use('/auther', AutherApi);
// // app.use('/book', BookApi);

// // app.listen(PORT, () => {
// //     console.log(`Server live at ${PORT}`);
// // });








// // const express=require('express');
// // const mongoose = require('mongoose');
// // const AuthorAPi = require('./routes/authors');
// // const BookApi = require('./routes/books');
// // const port = 3002;
// // const app = express();
// // app.use(express.json());
// // const url ="mongodb+srv://lgopikrishna84:lgopikrishna@cluster.btodjyc.mongodb.net/?retryWrites=true&w=majority&appName=cluster";
// // mongoose.connect(url).then(()=>{console.log('MongoDB connected')}).catch((err)=>{console.log(err)});
// // //router API's
// // app.use('/author',AuthorAPi);
// // app.use('/books',BookApi);
// // app.listen(port,()=>{console.log(`Server live at ${port}`)});



// // const express=require('express');
// // const mongoose=require('mongoose');
// // const app=express();
// // const AuthorsApi=require('./routes/authors');
// // const BooksApi=require('./routes/books')
// // const KrishnaApi=require('./routes/krishna');
// // const port=3004
// // app.use(express.json());

// // const url="mongodb+srv://lgopikrishna84:lgopikrishna@cluster.btodjyc.mongodb.net/?retryWrites=true&w=majority&appName=cluster";
// // mongoose.connect(url).then(()=>{
// //     console.log("mongodb connected")
// // }).catch((err)=>{
// //     console.log(err);
// // })
// // app.use('/author',AuthorsApi);
// // app.use('/books',BooksApi);
// // app.use('/krishna',KrishnaApi);
// // app.listen(port,()=>{
// //     console.log("server live ");
// // });



// // const express=require('express');
// // const mongoose=require('mongoose');
// // const {ApolloServer}=require('apollo-server-express');
// // const typedef = require('./schema');
// // const resolvers = require('../resolvers');
// // const app=express();
// // app.use(express.json());
// // const PORT=3002
// // const url="mongodb+srv://lgopikrishna84:lgopikrishna@cluster.btodjyc.mongodb.net/?retryWrites=true&w=majority&appName=cluster";
// // mongoose.connect(url).then(()=>{
// //     console.log("mongodb connected").catch((err)=>{
// //         console.log(err);
// //     })
// // })

// // //start my apllo server
// // const server=new ApolloServer({typeDefs,resolvers});
// // async function startServer(){
// //     await server.start();
// //     server.applyMiddleware({app});//run my express code
// //     app.listen(PORT,()=>{
// //         console.log('server live at 3002');
// //     })
// // }
// // startServer();

// // const express = require('express');
// // const mongoose = require('mongoose');
// // const {ApolloServer,gql} = require('apollo-server-express');
// // const typeDefs = require('./schema');
// // const resolvers = require('./resolvers');

// // const app = express();
// // const port = 3001;
// // const url="mongodb+srv://lgopikrishna84:lgopikrishna@cluster.btodjyc.mongodb.net/?retryWrites=true&w=majority&appName=cluster";
// // app.use(express.json())//parsing
// // mongoose.connect(url,{useNewUrlParse:true,useUnifiedTopology:true}).then(()=>{console.log('DB connected')})
// // .catch((err)=>{console.log(err)});
// // //start my apollo Express server 
// // const server = new ApolloServer({typeDefs,resolvers});
// // app.get('/users/search/:name',async(req,res)=>{
// //     try{
// //         const name=req.params.name;
// //         const {data,error}=await server.executeOperation({
// //             query:gql`query{searchUsers(name:${name}){id name email}}`
// //         });
// //         if(error){
// //             res.status(400).json({error});
// //         }
// //         res.status(200).send(data);
        
// //     }catch(err){
// //         res.status(400).json({error:err.message});
// //     }
// // })
// // async function  StartServer(){
// //     await server.start();
// //     server.applyMiddleware({app});//run my express code
// //     app.listen(port,()=>{
// //         console.log('server live 3001');
// //     })
// // }
// // StartServer();






// const express = require('express');
// const mongoose = require('mongoose');
// const app=express();
// const {ApolloServer,gql} = require('apollo-server-express');
// const PORT=3001
// const typedef=require('./schema');
// const resolvers=require('./resolvers');
// const url="mongodb+srv://lgopikrishna84:lgopikrishna@cluster.btodjyc.mongodb.net/?retryWrites=true&w=majority&appName=cluster";
// mongoose.connect(url,{useNewUrlParse:true,useUnifiedTopology:true}).then(()=>{console.log('DB connected')}).catch((err)=>{console.log(err)});
// //const server=new ApolloServer({typeDefs,resolvers});
// const server = new ApolloServer({ typeDefs, resolvers });
// async function StartServer() {await server.start()}; 
// server.applyMiddleware({app});
// app.listen(PORT, () => {
//         console.log(`Server is live on port ${PORT}`);
//     });
// StartServer();



// const express = require('express');
// const mongoose = require('mongoose');
// const { ApolloServer } = require('apollo-server-express');
// const typeDefs=require('./schema');
// const userRouterApi=require('./routes/userRoutes')
// const resolvers=require('./resolvers');
// const app = express();
// const port = 3004;

// app.use(express.json());

// const url = "mongodb+srv://lgopikrishna84:lgopikrishna@cluster.btodjyc.mongodb.net/?retryWrites=true&w=majority&appName=cluster";
// mongoose.connect(url)
//     .then(() => {
//         console.log("MongoDB connected");
//     })
//     .catch((err) => console.log(err));

// const server = new ApolloServer({ typeDefs, resolvers });
// app.use('/user',userRouterApi);
// async function startServer() {
//     await server.start();
//     server.applyMiddleware({ app });

//     app.listen(port, () => {
//         console.log(`Server is live on port http://localhost:${port}`);
//     });
// }

// startServer();





const express = require('express');
const mongoose = require('mongoose')
const {ApolloServer,gql } = require('apollo-server-express');
const typeDefs = require('./schema');
const Cors=require('cors');
const resolvers = require('./resolvers');
const userApiFromRouter = 
require('./routes/userRoutes')
const app = express() 
const port = 3001;
const url= 'mongodb+srv://lgopikrishna84:lgopikrishna@cluster.btodjyc.mongodb.net/?retryWrites=true&w=majority&appName=cluster';

app.use(express.json())
mongoose.connect(url,{useNewUrlParser:true,
useUnifiedTopology:true})
.then(()=>{console.log('DB connected')})
.catch((err)=>{console.log(err)})
const server = new ApolloServer({typeDefs,resolvers});
app.use('/users',userApiFromRouter);//add router
app.use('cors',Cors);
async function StartServer(){
   await server.start();
   server.applyMiddleware({app});
   app.listen(port,()=>{
    console.log('Server Live 3001');
   })
}

function testing(){
   return 0;
}
testing();
StartServer();





// import React from 'react';
// import ReactDOM from 'react-dom/client';
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//     <div>
//         <h1>Hello, world!</h1>
//     </div>
// );