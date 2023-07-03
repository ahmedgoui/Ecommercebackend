const mongoose =require("mongoose")
const Categories =require("./categories.js");
const scategorieSchema=mongoose.Schema({
nomscategorie:{ type: String, required: true },
imagescat :{ type: String, required: false },
categorieID: {type:mongoose.Schema.Types.ObjectId,
ref:Categories}
})
module.exports=mongoose.model('scategorie',scategorieSchema)