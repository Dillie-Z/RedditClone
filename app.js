var app = angular.module("myApp", ['ngAnimate'])
app.controller("RedditController", function($scope) {

    $scope.newPost = {};
    $scope.newComment = {};
    $scope.newPostFormVisible = false;
    $scope.reverse = true;
    $scope.view = {};
    $scope.view.search = "";
    $scope.view.searchSort = ['votes', 'date', 'title'];
    $scope.view.currentSearchValue = $scope.view.searchSort[0];
    $scope.view.favorite = [];
    $scope.view.posts = [{
        title: "Monkey costumes are totally in this season",
        author: "Linus Lane",
        img: "https://scontent-lga3-1.cdninstagram.com/hphotos-xft1/t51.2885-15/e35/11809944_1676694042554573_495250395_n.jpg",
        post: "Hey, hey, we're the Monkees, and people say we monkey around. But we're too busy singing to put anybody down. We're just tryin' to be friendly, come and watch us sing and play. We're the young gneration, and we've got something to say.",
        date: moment().subtract(2, 'days').subtract(3, 'hours').calendar(),
        votes: 10,
        comments: [{
            author: "Matt",
            text: "Cool costume."
        }],
        favorite: false,
        commentsVisible: false,
        newCommentVisible: false
    }, {
        title: "2016 Baseball",
        author: "Andrew Baggarly",
        img: "https://pbs.twimg.com/profile_imgs/632061069205225476/-3wXELim_400x400.jpg",
        post: "The Giants win it all in even years. Next year is an even year. Therefore, the Giants will win it all next year.",
        date: moment().subtract(2, 'hours').calendar(),
        votes: 2,
        comments: [{
            author: "Matt",
            text: "Sound reasoning!"
        }, {
            author: "Billy Bean",
            text: "Oakland rulez"
        }],
        favorite: false,
        commentsVisible: false,
        newCommentVisible: false
    }, {
        title: "New Years",
        author: "Ryan Seacrest",
        img: "https://tribzap2it.files.wordpress.com/2012/12/ryan-seacrest-new-years-rockin-eve-400.jpg",
        post: "Come hang out with me on New Year's Eve!",
        date: moment("20151010", "YYYYMMDD").calendar(),
        votes: -3,
        comments: [],
        favorite: false,
        commentsVisible: false,
        newCommentVisible: false
    }, {
        title: "XKCD",
        author: "Randall Munroe",
        img: "http://www.userlogos.org/files/logos/Mafia_Penguin/xkcdLogo.png",
        post: "rofl. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum excepturi ad totam autem dignissimos molestiae a consequatur cupiditate, eum enim. Magni expedita, nam in eligendi sed totam fugiat numquam consequatur.",
        date: moment().subtract(14, 'days').calendar(),
        votes: 2,
        comments: [],
        favorite: false,
        commentsVisible: false,
        newCommentVisible: false
    }];

    $scope.newPostForm = function() {
        $scope.newPost = {};
        if ($scope.newPostFormVisible === false) {
            $scope.newPostFormVisible = true;
        } else {
            $scope.newPostFormVisible = false;
        }
    }

    $scope.viewComments = function(post) {
        if (post.commentsVisible === false) {
            post.commentsVisible = true
        } else {
            post.commentsVisible = false;
        }
    }

    $scope.addCommentForm = function(post) {
        $scope.newComment = {};
        if (post.newCommentVisible === false) {
            post.newCommentVisible = true;
        } else {
            post.newCommentVisible = false;
        }
    }

    $scope.addComment = function(post, comment) {
        post.comments.push(comment);
        $scope.newComment = {};
    }

    $scope.addPost = function(post) {
        post.date = moment().calendar();
        post.votes = 0;
        post.comments = [];
        post.favorite = false;
        $scope.newPostFormVisible = false;
        $scope.view.posts.push(post);
        $scope.newPost = {};
    }

    $scope.sortBy = function(index) {
        $scope.view.currentSearchValue = $scope.view.searchSort[index];
    }

    $scope.vote = function(post, x) {
        if (x === 1) {
            post.votes += 1;
        }
        if (x === -1) {
            post.votes -= 1;
        }
    }

    $scope.ascDsc = function() {
      if($scope.reverse === true){
        $scope.reverse = false;
      }else{
        $scope.reverse = true;
      }
    }

    $scope.addFavorite = function(post){
      var index = $scope.view.favorite.indexOf(post)
      if(post.favorite === false){
        post.favorite = true
        $scope.view.favorite.push(post);
      }else{
        post.favorite = false
        $scope.view.favorite.splice(index,1);
      }
    }
});

$(document).ready(function() {
    $(".button-collapse").sideNav();
    $(".dropdown-button").dropdown();
})
