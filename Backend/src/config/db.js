import mongoose from "mongoose"
import dns from "node:dns/promises";
dns.setServers(["1.1.1.1"]);
export async function connectDB(){
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MONGODB connected successfully");
    }
    catch(error){
        console.log("ERROR: COULDN'T CONNECT TO MONGODB",error);
        process.exit(1);
    }
}