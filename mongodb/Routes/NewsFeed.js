const router = require("express").Router();
let NewsFeed = require("../Models/NewsFeedModel");

router.route("/").get((req, res) => {
    NewsFeed.find()
    .then(feed => res.json(feed))
    .catch(err => res.status(400).json("Error:" + err));
});

router.route("/Post").post((req, res) => {
  const PostId = req.body.PostId;
  const GroupID = req.body.GroupID;
  const UserId = req.body.UserId;
  const Message = req.body.Message;
  const PostedOn = req.body.PostedOn;
  const PostedBy = req.body.PostedBy;
  const Likes = req.body.Likes;
  const CommentsCount =req.body.CommentsCount;
  const Comments = req.body.Comments
  const newPost = new NewsFeed({
    PostId: PostId,
    GroupID: GroupID,
    UserId: UserId,
    Message: Message,
    PostedOn: PostedOn,
    PostedBy: PostedBy,
    Likes: Likes,
    CommentsCount:CommentsCount,
    Comments:Comments
  });
  newPost
    .save()
    .then(() => res.json("New Post Added !!"))
    .catch(err => res.status(400).json("Error:" + err));
});

module.exports = router;
