class ApiError extends Error{
  constructor( //message 
    statusCode ,
    message = "wrong", 
    errors = [],
    stack= ""   //stack trace associated with error
  ){
    super(message)
    this.statusCode= statusCode 
    this.data= null
    this.message = message
    this.success = false //error message 
    this.errors = errors

    if(stack){    // specifying the statck
      this.stack = stack 
    }else{
      Error.captureStackTrace(this , this.constructor)
    }
  }
}

module.exports= ApiError