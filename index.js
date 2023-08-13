

const fs = require("fs");
const http = require("node:http");

const index = fs.readFileSync("index.html", "utf8");
const data = JSON.parse(fs.readFileSync("data.json", "utf8"));
const products = data.products;
// console.log(product)
// const products = fs.readFileSync("")

const server = http.createServer((req, res) => {
    // if(req.url == "/"){
        if (req.url.startsWith("/product")) {
          const id = (req.url.split("/"))[2]
          const prd = products.find(p=>p.id === (+id))
          const modeifiedindex = index
          .replace("**category**", prd.category)
          .replace("**brand**", prd.brand)
          .replace("**thumbnail**", prd.thumbnail)
          .replace("**discountPercentag**", prd.discountPercentage)
          .replace("**price**", prd.price);
        res.end(modeifiedindex);
        }
        switch (req.url) {
        
            case "/":
                res.setHeader("Content-Type", "application/json");

                res.end(JSON.stringify(data));
                break
            default:
                res.end()
        }

   
});

server.listen(8000, () => {
  console.log("server listning on port 8000");
});
