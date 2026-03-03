import ratelimit from "../config/upstash.js"

async function rateLimiter(req,res,next){
    try{
        const {success} = await ratelimit.limit("my-limit-key");
        if(!success){
            return res.status(429).json({message:"Too mant requests please try again later"})
        }
        next()
    }
    catch(error){
        console.error("Error in ratelimiter", error);
        next(error);
    }
}

export default rateLimiter