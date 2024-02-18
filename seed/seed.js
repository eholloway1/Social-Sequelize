const { Comment, Like, Post, Profile, User } = require("../models/index");
const post = require("./posts.json");
const comments = require("./comments.json");
const likes = require("./likes.json");
const profiles = require("./profiles.json");
const users = require("./users.json");

async function seed() {

    Post.bulkCreate(post);

    Comment.bulkCreate(comments);

    Like.bulkCreate(likes);

    Profile.bulkCreate(profiles);

    User.bulkCreate(users);

}

module.exports = seed;