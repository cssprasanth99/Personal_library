const Review = require("../models/review.model");
const Book = require("../models/book.model");

const createReview = async(req,res)=>{
    const {reviewText,rating} = req.body;

    const {bookId} = req.params;

    try{
        const book = await new Book.findById(bookId);
        if(!book){
            res.send("Book not found");
        }

        const review = await new Review.findById({user: req.user._id,book:bookId, reviewText,rating});
    }
}
