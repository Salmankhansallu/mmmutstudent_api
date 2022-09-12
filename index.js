const express=require("express");
const app=express();
const cors=require("cors");
app.use(cors());
const port=process.env.PORT || 3000;
const userdata=require("./userapi.json");
app.get("/",(req,res)=>{
res.send("hello everyone");
});
app.get("/mmmutuser",(req,res)=>{
    res.send(userdata);
    });
app.listen(port,()=>{
console.log(`app listening in port ${port}`);
})