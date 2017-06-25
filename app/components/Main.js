// Include React
import React from "react";

// Here we include all of the sub-components
import Search from "./children/Search";
import Saved from "./children/Saved";

// Helper Function
import helpers from "./utils/helpers";

// var Link = require("react-router").Link;

// Creating the Main component
class Main extends React.Component{

    // Added in article state variable
    constructor(props) {
        // This super(props) line lets us access our parents properties as props.
        super(props);

        this.state = {
            searchTerm: "",
            startYear: "",
            endYear: "",
            saved: []
        };

        this.setSearchTerm = this.setSearchTerm.bind(this);
        this.setStartYear = this.setStartYear.bind(this);
        this.setEndYear = this.setEndYear.bind(this);
        this.setSaved = this.setSaved.bind(this);
        this.getClick = this.getClick.bind(this);
    }

    // The moment the page renders get the Article
    // componentDidMount() {
    //     // Get the latest article.
    //     // If we have a new search term, run a new search
    //     helpers.getSaved().then(function (response) {
    //         console.log(response);
    //         if (response !== this.state.saved) {
    //             console.log("Article", response.data);
    //             this.setState({saved: response.data});
    //         }
    //     }.bind(this));
    // }

    // If the component changes (i.e. if a search is entered)...
    // componentDidUpdate(prevProps, prevState) {
    //
    //     // Run the query for the Search
    //     if (prevState.searchTerm !== this.state.searchTerm) {
    //         //Clears the Results array if there is a new Search
    //         this.setState({saved: []});
    //         helpers.runQuery(this.state.searchTerm).then(function (data) {
    //             if (data !== this.state.saved) {
    //                 for (let i = 0; i < 4; i++) {
    //                     let newsaved = {title: data[i].headline.main, author: data[i].byline.original, date: data[i].pub_date, url:data[i].web_url};
    //                     // Pushes to results array
    //                     this.setState({saved: this.state.saved.concat(newsaved)});
    //                 }
    //             }
    //         }.bind(this));
    //     }
    // }

    // This function allows childrens to update the parent.
    setSearchTerm(searchterm) {
        this.setState({ searchTerm: searchterm });
    }

    setStartYear(startyear) {
        this.setState({ startYear: startyear});
    }

    setEndYear(endyear) {
        this.setState({ endYear: endyear});
    }

    setSaved(saved) {
        this.setState({ saved: saved});
    }

    getClick(todo) {
        helpers.postSaved(todo.title, todo.author, todo.date, todo.url).then(function () {
            // After we've done the post... then get the updated Saved
            helpers.getSaved().then(function (response) {
                this.setState({saved: response.data});
                console.log('Saved', this.state.saved);
            }.bind(this));
        }.bind(this));
    }


    // Here we render the function
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="jumbotron">
                        <h1 className="text-center">
                            New York Times Article Search
                        </h1>
                    </div>

                    <div className="row">
                        {
                            this.props.children
                        }


                    </div>

                </div>

                <div className="row">

                    {/*<Link to="/Search"><button className="btn btn-default btn-sm">Search</button></Link>*/}
                    {/*<Link to="/Saved"><button className="btn btn-default btn-sm">Saved Articles</button></Link>*/}
                    {/*{this.props.children}*/}


                </div>

            </div>
        );
    }
}

// Export the component back for use in other files
export default Main;
