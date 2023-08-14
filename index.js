const express = require("express")
const app = express()
const products = require("./data.json")


// In back end  we generally use 4 method  called  CRUD
// Create POST / Product
//******************** Create Data base **********************
app.post("/products",(req,res)=>{
  products.push(req.body)
  res.status(201).json(req.body)
})

//******************** Read Data base **********************
app.get("/products",(req,res)=>{
  res.json(products)
})
app.get("/products/:id", (req, res) => {
  const id = +req.params.id;
  const product = products.products.find(p => p.id === id); // Use products.products to access the array
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: "Product not found" });
  }
});

// ********************** Update Data base *********************
app.put("/products/:id", (req, res) => {
  const id = +req.params.id;
  const productIndex = products.findIndex(p => p.id === id);
  if (productIndex !== -1) {
    products[productIndex] = { ...req.body, id: id };
    res.status(201).json();
  } else {
    res.status(404).json({ message: "Product not found" });
  }
});


app.patch("/products/:id", (req, res) => {
  const id = +req.params.id;
  const productIndex = products.findIndex(p => p.id === id);
  const product = product[productIndex]
  products.splice(productIndex,1,{product,...req.body})
  res.status(201).json()
  if (productIndex !== -1) {
    products[productIndex] = { ...req.body, id: id };
    res.status(201).json();
  } else {
    res.status(404).json({ message: "Product not found" });
  }
});

// ********************** Delete Data base *********************
app.delete("/products/:id", (req, res) => {
  const id = +req.params.id;
  const productIndex = products.findIndex(p => p.id === id);
   const product = product[productIndex]
   products.splice(productIndex,1)
   res.status(201).json(product)
});

app.listen(3000,()=>{
  console.log("server running on port 3000")
})

// second old code 
// const  fs = require("fs")
// const products = require("./data.json")
// // console.log(products)
// const express = require("express")
// const app = express()
// const { Server } = require("http")

// // const index = fs.readFileSync("index.html", "utf8")
// app.use(express.static("public"))

// app.use(express.json())
// // this middleware we use when we need to fetch data from forms
// // app.use(express.urlencoded())

// // server level middleware
// // app.use((req,res,next)=>{
// //   console.log(req.method,req.ip,req.hostname)
// //   next()
// // })


// // Route level middleware

// // const auth = (req,res,next)=>{
// // //   if(req.body.password == "123"){
// // //     console.log(req.query)
// // //     next()
// // //   }else{
// // //     res.sendStatus(401)
// // //   }
// //   next()
// // }

// //  API - Endpoint -  Route   

// app.get("/products/:id",auth,(req,res)=>{
//   console.log(req.params.id)
// })
// app.post("/",(req,res)=>{
//   res.json({Type:"post"})
// })
// app.put("/",(req,res)=>{
//   res.json({Type:"put"})
// })
// app.patch("/",(req,res)=>{
//   res.json({Type:"patch"})
// })
// app.delete("/",(req,res)=>{
//   res.json({Type:"delete"})
// })

// // app.get("/",(req, res) => {
// //   res.sendFile(__dirname + "/index.html")
// // })

// // app.get("/products",(req, res) => {
// //   res.json(products)
// // })

// app.listen(3000,()=>{
//   console.log("server running on port 3000")
// })


// first old code from here 
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
