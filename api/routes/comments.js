const router = require("express").Router();
const Comment = require("../models/Comment");

//CREATE COMMENT
router.post("/:postId", async (req, res) => {
  const newComment = new Comment(req.body);
  try {
    const savedComment = await newComment.save();
    res.status(200).json(savedComment);
  } catch (err) {
    res.status(500).json(err);
  }
});

//UPDATE COMMENT
// router.put("/:commentId", async (req, res) => {
//   try {
//     const comment = await Comment.findById(req.params.id);
//     if (comment.username === req.body.username) {
//       try {
//         const updatedComment = await Comment.findByIdAndUpdate(
//           req.params.id,
//           {
//             $set: req.body,
//           },
//           { new: true }
//         );
//         res.status(200).json(updatedComment);
//       } catch (err) {
//         res.status(500).json(err);
//       }
//     } else {
//       res.status(401).json("You can update only your Comment!");
//     }
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

//DELETE COMMENT
/* ==========================
router.delete("/:commentId", async (req, res) => {
  try {
    const comment = await Comment.findById(req.params.id);
    if (comments.username === req.body.username) {
      try {
        await comment.delete();
        res.status(200).json("Comment has been deleted...");
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(401).json("You can delete only your Comment!");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});  

======================================================*/

//GET COMMENT
/*===========================================
router.get("/:commentId", async (req, res) => {
  try {
    const comment = await Comment.findById(req.params.id);
    res.status(200).json(comment);
  } catch (err) {
    res.status(500).json(err);
  }
});
============================*/

//GET ALL COMMENT
/*==================================================
router.get("/", async (req, res) => {
  const commentId = req.query.comment;

  try {
    let comments;
    if (commentId) {
      comments = await Comments.find({ commentId: req.params.id });
    } else {
      comments = await Comments.find();
    }
    res.status(200).json(comments);
  } catch (err) {
    res.status(500).json(err);
  }
});

=======================================*/

module.exports = router;
