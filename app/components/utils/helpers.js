// Include the axios package for performing HTTP requests (promise based alternative to request)
import axios from "axios";

// New York Times API
const nytAPI = "220abae76758485297324496caf23575";

// Helper functions for making API Calls
const helper = {

    // This function serves our purpose of running the query to NYT.
    runQuery: (title) => {

        console.log(title);

        // Grabbing the article
        // https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${myKey}&q=${topic}&begin_date=${startYear}`;
        // var queryURL = "http://api.nytimes.com/svc/search/v1/article?format=json&query=smoking&api-key=" + nytAPI;
        const queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + nytAPI + "&q=" + title;

        return axios.get(queryURL).then((response) => {
            console.log(response);
            // If get get a result, return that result's formatted address property
            const articleTitle = response.data.response.docs;
            if (articleTitle) {
                return articleTitle;
            }
            // If we don't get any results, return an empty string
            return "";
        });
    },

    // This function hits our own server to retrieve the record of query results
    getSaved() {
        return axios.get("/api");
    },

    // This function posts new searches to our database.
    postSaved (title, url) {
        return axios.post("/api", { title: title, url: url });
    }
};

// We export the API helper
export default helper;
