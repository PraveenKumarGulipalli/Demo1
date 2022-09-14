const app=require("express")();
const PORT=process.env.PORT || 3000;
app.get("",(req,res)=>{
    res.send("This is Gonna Interesting");
});
app.listen(PORT, ()=>{
    console.log('app up at port ${PORT}');
});
