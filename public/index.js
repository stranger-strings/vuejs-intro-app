/* global Vue, VueRouter, axios */

var HomePage = {
  template: "#home-page",
  data: function() {
    return {
      message: "Welcome to Vue.js!!!!!",
      reviews: [
        { text: "This is cool!", rating: 5, reviewer: "Burton Wax" },
        { text: "This is pretty okay!", rating: 3, reviewer: "Emily Post" },
        { text: "This is pretty bad!", rating: 1, reviewer: "Angela Pearson" }
      ],
      newReviewText: "",
      newReviewRating: "",
      newReviewReviewer: ""
    };
  },
  mounted: function() {},
  methods: {
    addReview: function() {
      var newReview = {
        text: this.newReviewText,
        rating: this.newReviewRating,
        reviewer: this.newReviewReviewer
      };
      this.reviews.push(newReview);
      this.newReviewText = "";
      this.newReviewRating = "";
      this.newReviewReviewer = "";
    }
  },
  computed: {}
};

var router = new VueRouter({
  routes: [{ path: "/", component: HomePage }]
});

var app = new Vue({
  el: "#app",
  router: router
});
