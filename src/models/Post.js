import { Schema, model } from "mongoose";

const postSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        trim: true
    },
    image: {
        url: String,
        public_id: String,
    },
});

let Post = model("Post", postSchema);
export default Post;
