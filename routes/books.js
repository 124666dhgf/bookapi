const express= require('express'); 
const book = require('../models/book');
const router= express.Router();
 const Post= require('../models/book'); 
 // getting all posts 
 router.get('/', async(req,res) =>{  try{ const book = await Post.find(); res.json(book);
}catch (err){ res.json({message:err}); } });

  // getting a post by id

  router.get('/:postid', async(req,res) =>{try{ const book = await Post.findById(req.params.postid); res.json(book); }catch(err){ res.json({message:err}); } })

   // creating a post

 router.post('/',(req,res)=>{ const book =new Post({ title:req.body.title, price:req.body.price,author:req.body.author,publisher:{name:req.body.publisher.name,city:
req.body.publisher.city}
 });
  book.save(). then(data =>{ res.json(data); }).catch (err=>{ res.json({message:err}); }) }); 

 // deleting a post

 router.delete('/:postid', async(req,res) =>{ try{ const removebook = await Post.deleteOne({_id: req.params.postid}); res.json(removebook); }catch(err){ res.json({message:err}); } } ); 

 // updating a post by id

 router.patch('/:postid', async(req,res) =>{ try{ const editbook = await Post.findOne({_id: req.params.postid}); 
 if(req.body.title){
   editbook.title=req.body.title;
 }
 if(req.body.price){
  editbook.price=req.body.price;
}
if(req.body.author){
  editbook.author=req.body.author;
}
if(req.body.publisher){
  editbook.publisher=req.body.publisher;
}

await editbook.save();
 res.json(editbook); }
 catch(err){ res.json({message:err}); } });

 module.exports= router;