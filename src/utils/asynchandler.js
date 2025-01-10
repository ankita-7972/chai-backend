import { request } from "express"

 const acyncHandler = (responceHandler) =>{
    (req,res,next) => {
       Promise.resolve(responceHandler(req,res,next))
       .catch((err) => next(err))
    }
 }



export {acyncHandler}


// const acyncHandler = (func) => async(req, res,next)=>{
//     try {
//          await func(req,res,next)
//     } catch (error) {
        
//         res.status(err.code || 500).json({
//             success: false,
//             message: err.message
//         })
//     }
// }