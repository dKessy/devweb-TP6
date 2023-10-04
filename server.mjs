import express from "express";
const app = express();

app.use(express.static('public'))

/*app.set('views','./views')*/
/*app.set('view engine','ejs')*/

app.get('/',(req,resp)=> {
    /*resp.render('index')*/
    
    resp.sendFile("index.html", { root: "./" });

})
app.post('/api',(req,resp)=>{
    console.log(req)
})

app.listen(3000,console.log('http://localhost:3000'))