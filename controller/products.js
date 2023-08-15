const products = require("../data.json")

exports.createProducts = (req , res) =>{
  products.push(req.body)
  res.status(201).json(req.body)
}
exports.getAllProducts = (req,res)=>{
  res.json(products)
}
exports.getProduct =(req ,res)=>{
  const id = +req.params.id;
  const product = products.products.find(p => p.id === id); // Use products.products to access the array
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: "Product not found" });
  }

}
exports.replaceProduct =(req ,res)=>{
  const id = +req.params.id;
  const productIndex = products.findIndex(p => p.id === id);
  if (productIndex !== -1) {
    products[productIndex] = { ...req.body, id: id };
    res.status(201).json();
  } else {
    res.status(404).json({ message: "Product not found" });
  }

}
exports.updateProduct =(req ,res)=>{
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

}
exports.deleteProduct =(req ,res)=>{
  const id = +req.params.id;
  const productIndex = products.findIndex(p => p.id === id);
  const product = product[productIndex]
  products.splice(productIndex,1)
  res.status(201).json(product)

}
