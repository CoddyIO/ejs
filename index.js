import express from 'express';
const app=express()
const port=3000;
app.get('/',(req,res)=>{
    const today = new Date("October 29, 2024 11:13:00");
        const x=today.getDay();
        console.log(x)
        if (x==0 || x==6){
    res.render("index.ejs",{
        
        dayType:"a weekend ",
        advice:"it's time to rest",
    })}
    else{
        res.render("index.ejs",{
        
            dayType:"a weekday ",
            advice:"it's time to work",
    })}
})
app.listen(port,()=>{
    console.log(`server running on port ${port}`)
})