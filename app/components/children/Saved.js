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
                <div className="panel-body text-left">
                    {/* Here we use a map function to loop through an array in JSX */}
                    {this.props.saved.map(function(search, i) {
                        return (
                            <ul>
                                <li>
                                <div key={i}>
                                    <h3>{search.title}</h3>
                                    <h5><a href={search.url}>{search.url}</a></h5>
                                </div>
                                </li>
                            </ul>
                        );
                    })}
                </div>
            </div>
        );
    }
}

// Export the component back for use in other files
export default Saved;