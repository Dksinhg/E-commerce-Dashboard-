const express = require("express");
const app = express();
const port = 5000;

require("./database/config");
const User = require("./database/user");
const Companylist = require('./database/companylist')

const cors = require("cors");

app.use(cors());

// middleware
app.use(express.json());
const router = express.Router();

router.get("/get", async (req, res, next) => {
  try {
    const userdata = await User.find();
    res.send(userdata);
    // console.log(userdata);
  } catch (e) {
    console.log("err");
  }
});
                                    
router.post("/register", async (req, res) => {
  try {
    res.send(req.body);
    //console.log(req.body)
    const user = new User(req.body);
    const result = await user.save();
    // console.log(result);
  } catch (err) {
    console.log("err");
  }
});

router.post("/login", async (req, res) => {
  try {
    if (req.body.password && req.body.email) {
      const user = await User.findOne(req.body).select("-password");
        console.log(user);
      if (user) {
        res.send(user);
      } else {
        res.send({ result: "data is not found" });
      }
     
    } else {
      res.send({ result: "data is not found" });
    }
  } catch (e) {
    console.log("err");
  }
});

app.post("/add-product", async(req,res)=>{
   let companylists =new Companylist(req.body);
   let result = await companylists.save();
   res.send(result);
   console.log(result) 
})

router.get("/companylist", async(req, res)=>{
   const products = await Companylist.find();
   if (products.length > 0) {
     res.send(products)
   } else {
     res.send({result :" No Product found"})
   }
})

router.delete("/companylist/:id", async (req, res)=>{
       let result = await Companylist.deleteOne({_id:req.params.id});
      res.send(result)
}),

router.get("/companylist/:id", async(req, res)=>{
  let result = await Companylist.findOne({_id:req.params.id})
  if (result) {
     res.send(result)
  } else {
    res.send("Result is not found")
  }
})

router.put("/companylist/:id", async(req, res)=>{
     let result = await Companylist.updateOne(
      {_id:req.params.id},
      {$set:req.body}
     )
     res.send(result);
})


router.get("/search/:key", async (req, resp)=>{
  let result= await Companylist.find({
    "$or":[
      {
        name: {$regex: req.params.key}
      },
      {
        company : {$regex: req.params.key }
      },
      {
        category :{ $regex: req.params.key}
      }
    ]
  });
  resp.send(result)
})


app.use(router);

app.listen(port, () => {
  console.log(`Server runinng on ${port}`);
});
