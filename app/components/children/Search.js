// Include React
import React from "react";

// Creating the Form component
class Search extends React.Component {

    // Here we set a generic state associated with the text being searched for
    constructor(props){
        super(props);
        this.state = {term: "", numRecords:"", startYear: "", endYear:""};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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
        this.props.setTerm(this.state.term);
        this.setState({term: ""});
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
                                name = "term"
                                value={this.state.term}
                                type="text"
                                className="form-control text-left"
                                id="term"
                                onChange={this.handleChange}
                                required
                            />
                        </div>

                        {/*Number option*/}
                        <h5 className="numRecordsSelect">
                            Number of Records to Retrieve:
                        </h5>
                        <select name="numRecords" className="form-control" id="numRecordsSelect" value={this.state.numRecords} onChange={this.handleChange}>
                            <option value="1">1</option>
                            <option value="5">5</option>
                            <option value="10">10</option>
                        </select>

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

                            <button className="btn btn-default" type="submit" id="runSearch">
                                <div className="glyphicon glyphicon-search"></div> Search
                            </button>

                            <button className="btn btn-default" type="submit" id="clearAll">
                                <div className="glyphicon glyphicon-trash"></div> Clear Results
                            </button>
                    </form>
                </div>
            </div>
        );
    }
}

// Export the component back for use in other files
export default Search;