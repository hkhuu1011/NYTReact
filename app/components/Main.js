// Include React
import React from "react";

// Here we include all of the sub-components
import Search from "./children/Search";
import Saved from "./children/Saved";

// Helper for making AJAX requests to our API
import helpers from "./utils/helpers";

// Creating the Main component
class Main extends React.Component{

    // Added in article state variable
    constructor(props) {
        // This super(props) line lets us access our parents properties as props.
        super(props);

        this.state = {
            searchTerm: "",
            results:[],
            Saved: []
        };

        this.setTerm = this.setTerm.bind(this);
        this.setStartYear = this.setStartYear.bind(this);
        this.setEndYear = this.setEndYear.bind(this);
        this.getClick = this.getClick.bind(this);
    }

    // The moment the page renders get the Article
    componentDidMount() {
        // Get the latest article.
        // If we have a new search term, run a new search
        helpers.getSaved().then(function (response) {
            console.log(response);
            if (response !== this.state.Saved) {
                console.log("Article", response.data);
                this.setState({Saved: response.data});
            }
        }.bind(this));
    }

    // If the component changes (i.e. if a search is entered)...
    componentDidUpdate(prevProps, prevState) {

        // Run the query for the Search
        if (prevState.searchTerm !== this.state.searchTerm) {
            //Clears the Results array if there is a new Search
            this.setState({results: []});
            helpers.runQuery(this.state.searchTerm).then(function (data) {
                if (data !== this.state.results) {
                    for (let i = 0; i < 9; i++) {
                        let newResults = {title: data[i].lead_paragraph, url:data[i].web_url};
                        // Pushes to results array
                        this.setState({results: this.state.results.concat(newResults)});
                    }
                }
            }.bind(this));
        }
    }
    // This function allows childrens to update the parent.
    setTerm(term) {
        this.setState({ searchTerm: term });
    }

    setStartYear(startYear) {
        this.setState({ searchTerm: startYear });
    }

    setEndYear(endYear) {
        this.setState({ searchTerm: endYear });
    }

    getClick(todo) {
        helpers.postSaved(todo.title, todo.url).then(function () {
            // After we've done the post... then get the updated Saved
            helpers.getSaved().then(function (response) {
                this.setState({Saved: response.data});
                console.log('Saved', this.state.Saved);
            }.bind(this));
        }.bind(this));
    }

    // Here we render the function
    render() {
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

                    <Saved Saved={this.state.Saved} />

                </div>

            </div>
        );
    }
}

// Export the component back for use in other files
export default Main;
