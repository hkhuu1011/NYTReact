// Require mongoose
import mongoose from "mongoose";
// Create Schema class
const Schema = mongoose.Schema;

// Create article schema
const ArticleSchema = new Schema({
    // title is a required string
    title: {
        type: String,
        required: true
    },
    // date is a required string
    date: {
        type: Date,
        required: true
    },
    // link is a required string
    url: {
        type: String,
        required: true
    }
});

// Create the Article model with the ArticleSchema
const Article = mongoose.model("Article", ArticleSchema);

// Export the model
export default Article;