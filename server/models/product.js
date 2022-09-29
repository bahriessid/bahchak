const mongoose=require('mongoose')

const productSchema= mongoose.Schema({
    title:String,
    description:String,
    }
)

export default mongoose.model("Product",productSchema)