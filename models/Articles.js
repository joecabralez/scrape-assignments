var mongoose = require("mongoose");
// Create Schema 
var Schema = mongoose.Schema;

// Create article schema
var ArticleSchema = new Schema({
    // title 
    title: {
        type: String,
        required: true
    },
    // link 
    link: {
        type: String,
        required: true
    },
    //author
    author: {
        type: String,
        required: true
    },
    // notes
    note: {
        type: Schema.Types.ObjectId,
        ref: "Notes"
    }
});

var Articles = mongoose.model("Articles", ArticleSchema);

// Export the model
module.exports = Articles;