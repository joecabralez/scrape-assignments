var mongoose = require("mongoose");
// Create schema
var Schema = mongoose.Schema;

var SavedSchema = new Schema({
    title: {
        type: String
    },
    link: {
        type: String
    },
    author: {
        type: String
    },
    notes: [{
        type: String
    }]
});


var Saved = mongoose.model("Saved", SavedSchema);

// Export the model
module.exports = Saved;