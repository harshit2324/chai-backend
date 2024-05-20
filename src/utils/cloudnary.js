import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API - SECRET,
});

const uploadOnCloudinary = async (localfilepath) => {
  try {
    if (!localfilepath) return null;
    //uplode the file on cloudnairy
    const response = await cloudinary.uploader.upload(localfilepath, {
      resource_type: "auto",
    });
    // file has been uploaded successfull
    console.log("file is uplod on cloudinary", response.url);
    return response;
  } catch (error) {
    fs.unlinkSync(localfilepath); //remove the local saved files as the upload opration got failed
    return null;
  }
};

export { uploadOnCloudinary };
