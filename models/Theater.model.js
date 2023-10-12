const { Schema, model } = require("mongoose");

const theaterSchema = new Schema({
      id: {
        type: String,
      },
      title: {
        type: String,
      },
      fullTitle: {
        type: String,
      },
      year: {
        type: String,
      },
      releaseState: {
        type: String,
      },
      image: {
        type: String,
      },
      runtimeStr: {
        type: String,
      },
      Plot: {
        type: String,
      },
      contentRating: {
        type: String,
      },
      imDbRating: {
        type: String,
      },
      genres: {
        type: String,
      },
      directors: {
        type: String,
      },
      stars: {
        type: String,
      },
      comment: [{ type: Schema.Types.ObjectId, ref: "Comment" }], //since each movie allows more than 1 comment, it should be an array
    },
    {
      timestamps: true,
    });

    module.exports = model("InTheaters", theaterSchema);