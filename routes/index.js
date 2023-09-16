var express = require('express');
var router = express.Router();
const Message = require("../models/message");

/* GET home page. */
router.get('/', async function(req, res, next) {
  try {
    const messages = await Message.find(); // Fetch all messages from the database
    res.render('index', { title: 'Mini Message Board', messages: messages });
  } catch (error) {
    console.error("Error fetching messages:", error);
    next(error); // Pass the error to the error handling middleware
  }
});

router.get('/new', function(req,res,next){
  res.render('form');
});

router.post('/new', async (req,res) => {
  try {
    // Create a new message and save it to the database
    const message = new Message({
      user: req.body.messageUser,
      message: req.body.messageText,
      date: new Date()
    });
    await message.save();
    res.redirect('/');
  } catch (error) {
    console.error("Error creating a new message:", error);
    res.status(500).json({ error: "An error occurred while creating a new message" });
  }
})

module.exports = router;
