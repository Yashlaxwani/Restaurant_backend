class ErrorHandler extends Error{
    constructor(message,statusCode){//two constructor are made
        super(message);// mesaage already exist in class Eroor(inbuilt)
        this.statusCode= statusCode;// we have to create it
    }
}

export const errorMiddleware=(err,req,res,next)=>{// 4 flags for middleware-next
    err.message=err.message ||"internal server error!!"
    err.statusCode= err.statusCode ||500;

    if (err.name === "CastError") {
        const message = `Resource not found. Invalid: ${err.path}`;
        err = new ErrorHandler(message, 400);
      }
    
    
      if (err.name === 'ValidationError') {
        const validationErrors = Object.values(err.errors).map(err => err.message);
        return next(new ErrorHandler(validationErrors.join(', '), 400));
      }

    return res.status(err.statusCode).json({
        success: false,
        message: err.message,
    });
};

export default ErrorHandler;