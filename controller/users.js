const users = require("../data.json")

exports.createUser = (req , res) =>{
  users.push(req.body)
  res.status(201).json(req.body)
}
exports.getAllUser  = (req,res)=>{
  res.json(users)
}
exports.getUser  = (req ,res)=>{
  const id = +req.params.id;
  const user = users.users.find(p => p.id === id); // Use products.products to access the array
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: "user not found" });
  }

}
exports.replaceUser  = (req ,res)=>{
  const id = +req.params.id;
  const usersIndex = users.findIndex(p => p.id === id);
  if (usersIndex !== -1) {
    users[usersIndex] = { ...req.body, id: id };
    res.status(201).json();
  } else {
    res.status(404).json({ message: "users not found" });
  }

}
exports.updateUser  = (req ,res)=>{
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
exports.deleteUser  = (req ,res)=>{
  const id = +req.params.id;
  const productIndex = products.findIndex(p => p.id === id);
  const product = product[productIndex]
  products.splice(productIndex,1)
  res.status(201).json(product)

}
