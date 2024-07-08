
const mongoose = require('mongoose');
 mongoose.set("strictQuery",false);

mongoose.connect("mongodb://localhost:27017/testDb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
        console.log('Connected broooooooooooooooooooooooo');
    })
    .catch(err => {
        console.error('connection error:', err);
    });





    //mongodb+srv://anoutest:<password>@cluster0.8gkwuqe.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

    /*mongoose.connect('mongodb+srv://testuser:ASk2020.@cluster0.8gkwuqe.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    .then(()=>console.log("Connected"))
    .catch((err)=>console.log(err))*/
// const mongoose=require("mongoose");

// mongoose.connect("mongodb://mongodb://localhost:27017/myDatabase",{
//     useNewUrlParser:true,
//     useUnifiedTopology:true,
//     useCreateIndex:true
// }).then(()=>{
//     console.log(`connection sucssful`);
// }).catch((e)=>{
//     console.log(`no connection`);
// });

/*const {MongoClient} = require("mongodb");

const uri ="mongodb://localhost:27017";
const client = new MongoClient(uri);

async function connectionTest(){
    try{
await client.db('myDatabase').command({ping:1});
console.log("connection successful");
    }finally{
        await client.close()
    }
}
connectionTest().catch(console.dir);*/


/*const mongoose =require('mongoose');
mongoose.set("strictQuery",false);*/


 //mongoose.connect("mongodb://127.0.0.1/m5-db",{
    //useNewUrlParser:true,
   // useUnifiedTopology:true,
 //})
 /*.then(()=>console.log("Connected pKayo"))
 .catch((err)=>console.log(err))*/

//mongodb+srv://anoutest:<password>@cluster0.8gkwuqe.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

 /*mongoose.connect('mongodb+srv://testuser:ASk2020.@cluster0.8gkwuqe.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
 .then(()=>console.log("Connected pakayoooooooooooooooooooooooooooooooooooooooooooooooooooo"))
 .catch((err)=>console.log(err))*/