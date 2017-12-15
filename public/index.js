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
      newReview: {}
    };
  },
  mounted: function() {},
  methods: {
    addReview: function() {
      if (this.newReview.text) {
        this.reviews.push(this.newReview);
        this.newReview = {};
      }
    },
    deleteReview: function(inputReview) {
      var index = this.reviews.indexOf(inputReview);
      this.reviews.splice(index, 1);
    },
    isGoodReview: function(inputReview) {
      if (inputReview.text.includes("bad")) {
        return false;
      } else {
        return true;
      }
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
