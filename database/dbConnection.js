import mongoose from "mongoose";

export const dbConnection=()=>{
    mongoose
    .connect(process.env.MONGO_URI,{
        dbName: "RESTAURANT",
    })
        .then(()=>{
            console.log("connect to database succesfully");

        })
        .catch((err)=>{
            console.log(`some error occur while connecting to database ${err}`);//for handling error
        });
    };