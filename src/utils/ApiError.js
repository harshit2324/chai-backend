class ApiError extends Error {
  constructor(
    statusCode,
    massage = "something went wrong",
    error = [],
    statck = ""
  ) {
    super(massage);
    this.statusCode = statusCode;
    this.data = null;
    this.message = false;
    this.error = error;

    if (stack) {
      this.stack = statck;
    } else {
      error.captureStackrace(this, this.constructor);
    }
  }
}

export { ApiError };
