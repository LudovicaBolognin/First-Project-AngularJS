(function (angular) {
  "use strict";
  angular.module("UsersPostsApp")
    .component("userPosts", {
      templateUrl: "allUsers/userPosts/userPosts.html",
      controller: usersPostsController
    })
})(window.angular);