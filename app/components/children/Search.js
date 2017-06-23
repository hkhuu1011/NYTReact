// Include React
import React from "react";

// import Saved from "./Saved";

// Helper for making AJAX requests to our API
// import helpers from "../utils/helpers";

// Including the Link component from React Router to navigate within our application without full page reloads
let Link = require("react-router").Link;

// Creating the Form component
class Search extends React.Component {

    // Here we set a generic state associated with the text being searched for
    constructor(props){
        super(props);
        this.state = {
            searchTerm: "",
            startYear:"",
            endYear:"",
            saved: []
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        // this.getClick = this.getClick.bind(this);
    }

    // This function will respond to the user input
    handleChange(event) {
        const target = event.target;
        const name = target.name;
        this.setState({
            [name]: event.target.value
        });
    }

    // When a user submits...
    handleSubmit(event) {
        event.preventDefault();
        // Set the parent to have the search term
        this.props.setSearchTerm(this.state.searchTerm);
        this.setState({searchTerm: "", startYear: "", endYear: ""});
    }


    // Here we describe this component's render method
    render() {
        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title text-left">Search Parameters</h3>
                </div>
                <div className="panel-body text-left">
                    <form onSubmit={this.handleSubmit}>

                        {/*Search Terms*/}
                        <div className="form-group">
                            <h5 className="term">
                                Search Terms
                            </h5>

                            {/*
                             Note how each of the form elements has an id that matches the state.
                             This is not necessary but it is convenient.
                             Also note how each has an onChange event associated with our handleChange event.
                             */}
                            <input
                                name = "searchTerm"
                                value={this.state.searchTerm}
                                type="text"
                                className="form-control text-left"
                                id="term"
                                onChange={this.handleChange}
                                required
                            />
                        </div>

                        {/*Start Year*/}
                        <div className="form-group">
                            <h5 className="startYear">
                                Start Year (Optional):
                            </h5>
                            <input
                                name="startYear"
                                value={this.state.startYear}
                                type="text"
                                className="form-control text-left"
                                id="startYear"
                                onChange={this.handleChange}
                            />
                        </div>

                        {/*End Year*/}
                        <div className="form-group">
                            <h5 className="endYear">
                                End Year (Optional):
                            </h5>

                            <input
                                name="endYear"
                                value={this.state.endYear}
                                type="text"
                                className="form-control text-left"
                                id="endYear"
                                onChange={this.handleChange}
                            />
                        </div>

                            <Link to="Search">
                                <button className="btn btn-default" type="submit" id="runSearch">
                                <div className="glyphicon glyphicon-search"></div> Search
                                </button>
                            </Link>

                            <Link to="Saved">
                                <button className="btn btn-default" type="submit" id="savedArticles">
                                <div className="glyphicon glyphicon-saved"></div> Saved Articles
                                </button>
                            </Link>
                    </form>
                </div>

                {/*<Saved saved={this.state.saved} getClicked={this.getClick}/>*/}

            </div>
        );
    }
}

// Export the component back for use in other files
export default Search;