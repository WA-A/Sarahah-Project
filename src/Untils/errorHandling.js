export const asyncHandler = (fn)=>{   // another way for try the benifit is when the change a change one just
    return (req,res,next)=>{
        fn(req,res,next).catch(err=>{
            return res.json({message:"catch error",error:err.stack})
        })
    }
}