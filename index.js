const  fs = require("fs")
const products = require("./data.json")
// console.log(products)
const express = require("express")
const app = express()
const { Server } = require("http")

// const index = fs.readFileSync("index.html", "utf8")
app.use(express.static("public"))

app.use(express.json())
// this middleware we use when we need to fetch data from forms
// app.use(express.urlencoded())

// server level middleware
// app.use((req,res,next)=>{
//   console.log(req.method,req.ip,req.hostname)
//   next()
// })


// Route level middleware

const auth = (req,res,next)=>{
  if(req.body.password == "123"){
    console.log(req.query)
    next()
  }else{
    res.sendStatus(401)
  }
  
}

//  API - Endpoint -  Route   

app.get("/",auth,(req,res)=>{
  res.json({Type:"GET"})
})
app.post("/",(req,res)=>{
  res.json({Type:"post"})
})
app.put("/",(req,res)=>{
  res.json({Type:"put"})
})
app.patch("/",(req,res)=>{
  res.json({Type:"patch"})
})
app.delete("/",(req,res)=>{
  res.json({Type:"delete"})
})

// app.get("/",(req, res) => {
//   res.sendFile(__dirname + "/index.html")
// })

// app.get("/products",(req, res) => {
//   res.json(products)
// })

app.listen(3000,()=>{
  console.log("server running on port 3000")
})


// old code from here 
// // 116799118+akshitDhakad@users.noreply.github.com

// const fs = require("fs");
// const http = require("node:http");

// const index = fs.readFileSync("index.html", "utf8");
// const data = JSON.parse(fs.readFileSync("data.json", "utf8"));
// const products = data.products;
// // console.log(product)
// // const products = fs.readFileSync("")

// const server = http.createServer((req, res) => {
//     console.log(req.url,req.method)
//     // if(req.url == "/"){
//         if (req.url.startsWith("/product")) {
//           const id = (req.url.split("/"))[2]
//           const prd = products.find(p=>p.id === (+id))
//           const modeifiedindex = index
//           .replace("**category**", prd.category)
//           .replace("**brand**", prd.brand)
//           .replace("**thumbnail**", prd.thumbnail)
//           .replace("**discountPercentag**", prd.discountPercentage)
//           .replace("**price**", prd.price);
//         res.end(modeifiedindex);
//         }
//         switch (req.url) {
        
//             case "/":
//                 res.setHeader("Content-Type", "application/json");

//                 res.end(JSON.stringify(data));
//                 break
//             default:
//                 res.end()
//         }

   
// });

// server.listen(8000, () => {
//   console.log("server listning on port 8000");
// });
