import Product from "../../models/Product"
import conncetDb from "../../middleware/mongoose"

const handler = async (req, res)=> {
    let products = await Product.find()
    let estore = {}
    for(let item of products)
    {
      if(item.title in estore){
        if(!estore[item.title].size.includes(item.size) && item.availableQty > 0)
        {
          estore[item.title].size.push(item.size)

        }

      }
      else{
        estore[item.title] = JSON.parse(JSON.stringify(item))
        if(item.availableQty > 0){
          estore[item.title].size = [item.size]
        }
      }
    }
    res.status(200).json({ estore })
  }
  
  export default conncetDb(handler)