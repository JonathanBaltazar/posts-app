import { v2 as cloudinary } from "cloudinary";
import {
    CLOUDINARY_API_KEY,
    CLOUDINARY_API_SECRET,
    CLOUDINARY_CLOUD_NAME,
} from "../config.js";

// CLOUDINARY CONFIG
cloudinary.config({
    cloud_name: CLOUDINARY_CLOUD_NAME,
    api_key: CLOUDINARY_API_KEY,
    api_secret: CLOUDINARY_API_SECRET,
    secure: true,
});

export const uploadImage = (filePath) => {
    const options = {
        use_filename: true,
        unique_filename: true,
        overwrite: true,
    };

    let response = cloudinary.uploader.upload(filePath, { folder: "posts_app" });
    return response;
};

export const deleteImage = (public_id) => {

    return cloudinary.uploader.destroy(public_id)
}