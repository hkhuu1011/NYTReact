// Include React
var React = require("react");

// Here we include all of the sub-components
var Search = require("./children/Search");
var Saved = require("./children/Saved");

// Helper for making AJAX requests to our API
var helpers = require("./utils/helpers");

// Creating the Main component
var Main = React.createClass({

    // Added in article state variable
    getInitialState: function() {
        return { searchTerm: "", results: "", article: [] };
    },

    // The moment the page renders get the Article
    componentDidMount: function() {
        // Get the latest article.
        // helpers.getArticle().then(function(response) {
        //     console.log(response);
        //     if (response !== this.state.article) {
        //         console.log("Article", response.data);
        //         this.setState({ article: response.data });
        //     }
        // }.bind(this));
    },

    // If the component changes (i.e. if a search is entered)...
    componentDidUpdate: function() {

        // Run the query for the address
    //     helpers.runQuery(this.state.searchTerm).then(function(data) {
    //         if (data !== this.state.results) {
    //             console.log("Article", data);
    //             this.setState({ results: data });
    //
    //             // After we've received the result... then post the search term to our history.
    //             helpers.postArticle(this.state.searchTerm).then(function() {
    //                 console.log("Updated!");
    //
    //                 // After we've done the post... then get the updated history
    //                 helpers.getArticle().then(function(response) {
    //                     console.log("Current Article", response.data);
    //
    //                     console.log("Article", response.data);
    //
    //                     this.setState({ article: response.data });
    //
    //                 }.bind(this));
    //             }.bind(this));
    //         }
    //     }.bind(this));
    },
    // This function allows childrens to update the parent.
    setTerm: function(term) {
        this.setState({ searchTerm: term });
    },
    // Here we render the function
    render: function() {
        return (
            <div className="container">
                <div className="row">
                    <div className="jumbotron">
                        <h2 className="text-center">
                            <strong>
                            New York Times Article Search
                            </strong>
                        </h2>
                    </div>

                    <div className="row">

                        <Search setTerm={this.setTerm} />

                    </div>

                </div>

                <div className="row">

                    <Saved article={this.state.Saved} />

                </div>

            </div>
        );
    }
});

// Export the component back for use in other files
module.exports = Main;
