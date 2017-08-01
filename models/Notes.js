var mongoose = require("mongoose");
// Create a schema 
var Schema = mongoose.Schema;

// Create the Note schema
var NotesSchema = new Schema({
    body: {
        type: String
    }
});



// Create notes
var Notes = mongoose.model("Notes", NotesSchema);

// Export notes
module.exports = Notes;