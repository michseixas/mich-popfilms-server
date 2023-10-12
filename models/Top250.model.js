const { Schema, model } = require("mongoose");

const top250Schema = new Schema({
      id: {
        type: String,
      },
      rank: {
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
      image: {
        type: String,
      },
      crew: {
        type: String,
      },
      imDbRating: {
        type: String,
      },
      imDbRatingCount: {
        type: String,
      },
      comment: [{ type: Schema.Types.ObjectId, ref: "Comment" }], //since each movie allows more than 1 comment, it should be an array
    },
    {
      timestamps: true,
    });

    module.exports = model("Top250", top250Schema);

