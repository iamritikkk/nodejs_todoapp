class ErroHandler extends Error {
  constructor(message, code) {
    super(message);
    this.code = code;
  }
}

export const errorMiddleware = (err, req, res, next) => {
  err.message = err.message || "Internal Server Error";
  err.code = err.code || 500;
  return res.status(err.code).json({
    success: false,
    message: err.message,
  });
};

export default ErroHandler;
