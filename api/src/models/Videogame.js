const mongoose = require("mongoose");

const videogameSchema = new mongoose.Schema ({
    name : {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    plataforms: {
        type: [String],
        required: true,
    }, 
    image: {
        type: String,
        required: true,
    },
    releaseDate: {
        type:Date,
        required: true,
    },
    rating: {
        type: Number,
        required: true,
    },
    genres: [{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Genre", // Referencia al modelo Genre para simular many-to-many
    }]
})

module.exports = mongoose.model("Videogame", videogameSchema);