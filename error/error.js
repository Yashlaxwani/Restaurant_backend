class ErrorHandler extends Error{
    constructor(message,statusCode){//two constructor are made
        super(message);// mesaage already exist in class Eroor(inbuilt)
        this.statusCode= statusCode;// we have to create it
    }
}

export const errorMiddleware=(err,req,res,next)=>{// 4 flags for middleware-next
    err.message=err.message ||"internal server error!!"
    err.statusCode= err.statusCode ||500;

    return res.status(err.statusCode).json({
        success: false,
        message: err.message,
    });
};

export default ErrorHandler;