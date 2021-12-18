const { Schema, model } = require("mongoose")

const NoteSchema = new Schema({
    title: {
        type: "string",
        required: true,
        
    },
    description: {
        type: "string",
        required: true
    },

}, {
    timestamps:true //agregar automaticamente creado y actualiz
})

module.exports = model('Note', NoteSchema);