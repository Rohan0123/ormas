import Product from "../../models/Product"
import conncetDb from "../../middleware/mongoose"

const handler = async (req, res)=> {
    if(req.method == 'POST')
    {
        let p = new Product({
            title: {type:String, required:true},
    slug: {type:String, required:true, unique:true},
    desc: {type:String, required:true},
    img: {type:String, required:true},
    category: {type:String, required:true},
    size: {type:String},
    color: {type:String},
    price: {type:Number, required:true},
    availableQty: {type:Number, required: true},
        })
    }
    else{
    res.status(400).json({ error:"This method is not allowed" })

    }
    let products = await Product.find()
    res.status(200).json({ products })
  }
  
  export default conncetDb(handler)