// Include React
import React from "react";

// Creating the Results component
class Saved extends React.Component{
    // Here we render the function
    render() {
        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title text-center">Top Articles</h3>
                </div>
                <div className="panel-body text-center">
                    <p>Search Results</p>
                </div>
            </div>
        );
    }
}

// Export the component back for use in other files
export default Saved;