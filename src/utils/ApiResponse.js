class Apiresponse {
  constructor(statuscode, data, massage = "success") {
    this.statuscode = statuscode;
    this.data = data;
    this.massage = massage;
    this.success = success < 400;
  }
}
