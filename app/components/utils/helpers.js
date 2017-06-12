// Include the axios package for performing HTTP requests (promise based alternative to request)
var axios = require("axios");

// New York Times API
var nytAPI = "220abae76758485297324496caf23575";

// Helper functions for making API Calls
var helper = {

    // This function serves our purpose of running the query to NYT.
    runQuery: function(title) {

        console.log(title);

        // Grabbing the article
        var queryURL = "http://api.nytimes.com/svc/search/v1/article?format=json&query=smoking&api-key=" + nytAPI;
        return axios.get(queryURL).then(function(response) {
            // If get get a result, return that result's formatted address property
            if (response.data.results[0]) {
                return response.data.results[0];
            }
            // If we don't get any results, return an empty string
            return "";
        });
    },

    // This function hits our own server to retrieve the record of query results
    getArticle: function() {
        return axios.get("/api");
    },

    // This function posts new searches to our database.
    postArticle: function(title) {
        return axios.post("/api", { title: title });
    }
};

// We export the API helper
module.exports = helper;
