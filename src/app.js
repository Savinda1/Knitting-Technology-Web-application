 const express = require('express');
const path=require('path');
const app =express();


//const hbs =require("hbs");
require('./db/conn');

const products=require("./models/products");

const { register } = require('module');

const staticPath = path.join(__dirname,"../public");
const templatesPath = path.join(__dirname,"../templates/views");

app.use(express.json());

app.use(express.urlencoded({ extended: false }));


//hoyapan
app.use(express.static(staticPath));
app.set("view engine", "hbs");
app.set("views",templatesPath);

app.get('/',(req,res)=>{
res.render("index");
});

app.get('/register',(req,res)=>{
    res.render("register");
    });



    app.get('/login',(req,res)=>{
        res.render("login");
        });








//create a new user in our databse
app.post('/register',async(req,res)=>{
    try{
/*console.log(req.body.password);
res.send(req.body.password);*/

const registerE=new products({
 name :req.body.name,
email :req.body.email,
 Country :req.body.Country,
 phone:req.body.phone,
 password :req.body.password
        })
const registerd =await registerE.save();
res.status(201).render("login");



    }catch (error){
        res.status(400).render("register");
//res.status(400).send("Not matching");
    }
    });

//login check

app.post('/login', async(req,res)=>{
        try {
            
const email=req.body.email;
const password=req.body.password;

const useremail = await products.findOne({email:email});
if(useremail.password === password ){
    res.status(201).render("main");
}else{
    //res.render("login");
  res.send("invalid login Details");
}
// res.send(useremail.password);
// console.log(useremail);

        } catch (error) {
            res.status(400).send("invalid login Details");
        }
        });

       // app.get('/login',(req,res)=>{
    //     res.render("login");
    //     });

//  async function run(){
//   const newproduct=await products.create({
//     name:"Amila 9",
//         email:"amilasavindak44umara@gmail.com",
//         Country:"Sri lanka65",
//         phone:"071687322558",
//         password:"amillla20201"

//   

const port =process.env.PORT || 3000;
app.listen(port,()=>{
    console.log(`app is runnig on port ${port}`);
});

/*async function run(){
     const newproduct=await products.create({
      name:"Amila 11",
          email:"amilasavindggak44umagggra@gmail.com",
          Country:"Srigg lankgga65",
          phone:"071687rr32258858",
          password:"amilrrlgggla20201"
  
    });
    const user2 =await newproduct.save();
    console.log(user2);
  }
  run().catch((err)=>console.log(err));*/
//   console.log(newproduct);
// }
// run().catch((err)=>console.log(err));

//find all
/*async function run(){
    const users =await products.find();
    console.log(users);
}

run().catch((err)=>console.log(err));
*/


  

   /* app.post('/products',async(req,res)=>{
       try{
console.log(req.body.Name);

       }catch (error){
res.status(400).send(error);
       }
        });*/
    
    /*app.get('/login',(req,res)=>{
        res.render("login");
        });
        
        app.get('/main',(req,res)=>{
            res.render("main");
            });*/
            
//             async function run (){
//                 const user= await products.find({name:"Amila "}).count();
//                 console.log(user);
//             }

// run().catch((err)=>console.log(err));

/*async function run (){
    const user= await products.findOne({name:"Amila "});
    console.log(user);
}

run().catch((err)=>console.log(err));*/


// const port =process.env.PORT || 3000;
// app.listen(port,()=>{
//     console.log(`app is runnig on port ${port}`);
// });