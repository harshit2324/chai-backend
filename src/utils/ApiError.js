class ApiError extends Error {
  constructor(
    statusCode,
    massage = "something went wrong",
    error = [],
    stack = ""
  ) {
    super(massage);
    this.statusCode = statusCode;
    this.data = null;
    this.message = false;
    this.error = error;

    if (stack) {
      this.stack = stack;
    } else {
      error.captureStackrace(this, this.constructor);
    }
  }
}

export { ApiError };
