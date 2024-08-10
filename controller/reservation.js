import ErrorHandler from "../error/error.js";
import { Reservation } from "../models/reservationSchema.js";


const send_reservation = async (req, res, next) => {
  const { firstName, lastName, email, date, time, phone } = req.body;//These properties are expected to be provided in the reservation form submission.
  if (!firstName || !lastName || !email || !date || !time || !phone) {
    return next(new ErrorHandler("Please Fill Full Reservation Form!", 400));
  }//Checks if any of the required fields are missing

  try {
    await Reservation.create({ firstName, lastName, email, date, time, phone });
    res.status(201).json({
      success: true,
      message: "Reservation Sent Successfully!",
    });//Attempts to create a new reservation in the database using the Reservation model's create method. If successful, it sends a 201 status code (Created) with a success message.
  } catch (error) {
    // Handle Mongoose validation errors
    if (error.name === 'ValidationError') {
      const validationErrors = Object.values(error.errors).map(err => err.message);
      return next(new ErrorHandler(validationErrors.join(', '), 400));//join is the javascript error
    }

    // Handle other errors
    return next(error);
  }
};


export default send_reservation;