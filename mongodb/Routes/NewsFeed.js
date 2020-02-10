const router = require("express").Router();
let NewsFeed = require("../Models/NewsFeedModel");

router.route("/").get((req, res) => {
  NewsFeed.find()
    .then(feed => res.json(feed))
    .catch(err => res.status(400).json("Error:" + err));
});
// Query to find with GroupID: { GroupID: { $in: req.body.GroupID } }
router.route("/Post").post((req, res) => {
  const PostId = req.body.PostId;
  const GroupID = req.body.GroupID;
  const UserId = req.body.UserId;
  const Message = req.body.Message;
  const PostedOn = req.body.PostedOn;
  const PostedBy = req.body.PostedBy;
  const Likes = req.body.Likes;
  const LikedBy = req.body.LikedBy;
  const CommentsCount = req.body.CommentsCount;
  const Comments = req.body.Comments;
  const newPost = new NewsFeed({
    PostId: PostId,
    GroupID: GroupID,
    UserId: UserId,
    Message: Message,
    PostedOn: PostedOn,
    PostedBy: PostedBy,
    Likes: Likes,
    LikedBy: LikedBy,
    CommentsCount: CommentsCount,
    Comments: Comments
  });
  newPost
    .save()
    .then(() => res.json("New Post Added !!"))
    .catch(err => res.status(400).json("Error:" + err));
});

router.route("/Update/:id").post((req, res) => {
  NewsFeed.findById(req.params.id)
    .then(post => {
      (post._id = req.body._id),
        (post.LikedBy = req.body.LikedBy),
        (post.Likes = req.body.Likes),
        (post.Comments = req.body.Comments),
        (post.CommentsCount = req.body.CommentsCount)
          .save()
          .then(() => res.json("Post Updated"))
          .catch(err => res.status(400).json("Error:", err));
    })
    .catch(err => res.status(400).json("Error:", err));
});
module.exports = router;
