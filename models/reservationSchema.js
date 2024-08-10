import mongoose from "mongoose";
import validator from "validator";//for checking purpose

const reservationSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required: true,
        minLength:[3,"First name must contain at least 3"],
        maxlenth:[30,"first name not exceed 30 charaters"],
    },
    lastName: {
        type: String,
        required: true,
        minLength: [3, "Last name must be of at least 3 Characters."],
        maxLength: [30, "Last name cannot exceed 30 Characters."],
      },
      date: {
        type: String,
        required: true,
      },
      time: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
        validate: [validator.isEmail, "Provide a valid email"],
      },
      userId: { type : mongoose.Schema.Types.ObjectId, ref: 'User',  },
      //userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
      phone: {
        type: String,
        required: true,
        minLength: [10, "Phone number must contain 10 Digits."],
        maxLength: [10, "Phone number must contain 10 Digits."],
      }
    },
      { timestamps: true },
);
    
export const Reservation = mongoose.model("Reservation", reservationSchema);