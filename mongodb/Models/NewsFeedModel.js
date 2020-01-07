const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const NewsFeedSchema = new Schema(
  {
        PostId:{type:String,unique:true},
        GroupID:{type:Array},
        UserId:{type:String},
        Message:{type:String},
        PostedOn:{type:Date},
        PostedBy:{type:String},
        Likes:{type:Number},
        CommentsCount:{type:Number},
        Comments:[
            {
                CommentedBy:{type:String},
                CommentedOn:{type:Date},
                Comment:{type:String},
                CommentLikes:{type:Number},
                RepliesCount:{type:Number},
            }
        ]},
  {
    timestamps: true
  }
);

const NewsFeed = mongoose.model("NewsFeed", NewsFeedSchema);
module.exports = NewsFeed;
