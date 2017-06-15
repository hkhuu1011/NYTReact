// Include React
var React = require("react");

// Creating the Form component
var Search = React.createClass({

    // Here we set a generic state associated with the text being searched for
    getInitialState: function() {
        return {
                term: "",
                numRecords: "",
                startYear: "",
                endYear: ""
        };
    },

    // This function will respond to the user input
    handleChange: function(event) {
        console.log("event: ", event);

        var newState = {};
        newState[event.target.id] = event.target.value;
        this.setState(newState);
    },

    // When a user submits...
    handleSubmit: function(event) {
        // prevent the HTML from trying to submit a form if the user hits "Enter" instead of
        // clicking the button
        event.preventDefault();

        // Set the parent to have the search term
        this.props.setTerm(
                            this.state.term,
                            this.state.numRecords,
                            this.state.startYear,
                            this.state.endYear
        );

        this.setState({
                            term: "",
                            numRecords: "",
                            startYear: "",
                            endYear: ""
        });
    },
    // Here we describe this component's render method
    render: function() {
        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title text-left"><strong>Search Parameters</strong></h3>
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
                        <select className="form-control" id="numRecordsSelect" value={this.state.numRecords}>
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
                                value={this.state.startYear}
                                type="text"
                                className="form-control text-left"
                                id="startYear"
                                onChange={this.handleChange}
                                required
                            />
                        </div>

                        {/*End Year*/}
                        <div className="form-group">
                            <h5 className="endYear">
                                End Year (Optional):
                            </h5>

                            <input
                                value={this.state.endYear}
                                type="text"
                                className="form-control text-left"
                                id="endYear"
                                onChange={this.handleChange}
                                required
                            />
                        </div>

                            <button className="btn btn-default" type="submit" id="runSearch">
                                <i className="glyphicon glyphicon-search"></i> Search
                            </button>

                            <button className="btn btn-default" type="submit" id="clearAll">
                                <i className="glyphicon glyphicon-trash"></i> Clear Results
                            </button>
                    </form>
                </div>
            </div>
        );
    }
});

// Export the component back for use in other files
module.exports = Search;