const express = require("express");
const {girisKontrol}=require("./middleware");//ara katman
const app=express();
const PORT=5000;
const users=[
    {
        id:1,
        name:"Ahmet Veli",
        place:"Şanlıurfa"
    },
    {
        id:2,
        name:"Veli Ahmet",
        place:"Şanlıurfa"
    }
];
app.use(express.json());//req.body deki verileri çekmek için
// app.use(girisKontrol);
app.listen(PORT,()=>{
    console.log("Server başlatıldı..." +PORT);
})

//GET
app.get("/users",girisKontrol,(req,res,next)=>{

    res.json({
        success:true,
        data:users
    })    
})
// app.get("/products",(req,res,nexy)=>{
//     res.json({
//         success:true,
//         data:"get products isteği geldi"
//     })
// })

//POST
app.post("/users",(req,res,next)=>{
    // console.log(req.body);
    const user=req.body;
    users.push(user);
    res.json({
        success:true,
        data:users
    })
})

//PUT
app.put("/users/:id",(req,res,next)=>{
    const id=parseInt(req.params.id);
    // console.log(id);
    for(let i=0;i<users.length;i++){
        if(users[i].id===id){
            users[i]={
                ...users[i],
                ...req.body
            }
        }
    }
    res.json({
        success:true,
        data:users
    })
})

//DELETE
app.delete("/users/:id",(req,res,next)=>{
    const id=parseInt(req.params.id);
    // console.log(id);
    for(let i=0; i<users.length;i++){
        if(users[i].id===id){
            users.splice(i,1);
        }
        
    }
    res.json({
        success:true,
        data:users
    })

})