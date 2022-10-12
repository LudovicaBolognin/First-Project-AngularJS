(function(angular) {
    "use strict";
    angular.module("UsersPostsApp", ["ngRoute"])
      .config(function ($routeProvider) {
        $routeProvider
          .when("/main", {
              template: "<all-users></all-users>"
        })
          .when("/main/:id/posts", {
              template: "<user-posts></user-posts>"
          })
          .when("/main/:id/posts/:comment/comments", {
            template: "<post-comments></post-comments>"
          })
        .otherwise({ redirectTo:"/main"})
    });
})(window.angular);