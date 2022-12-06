const bookModel = require("../models/bookModel")

const getbooks=async(req,res)=>{
    try{
        let books=req.body.books
        let filter={title,name,category,ISBN}{

        }
        if(object.keys.(data).length==0){
            return res.status(400).send({status:false, msg:"Please provide some data"})
        }
        let book=await  bookModel.findOne({isDeleted:false})).Select{isreleasedAt:1, ISBN:1, category:1, subcateory:1, createdat:1, updatedAt:1, excerpt:1, Title:1}.sort{Title}

    }
}