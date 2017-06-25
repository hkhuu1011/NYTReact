// Include React
import React from "react";

// Creating the Results component
class Saved extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            articles: props.saved || []
        };
    }

    componentWillReceiveProps(nextProps) {
        if(this.state.articles != nextProps.saved) {
            this.setState({
                articles: nextProps.saved
            })
        }
    }

    // Here we render the function
    render() {
        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title text-left">Article Results</h3>
                </div>
                <div className="panel-body text-left">
                    {/* Here we use a map function to loop through an array in JSX */}
                    {this.state.articles.map(function(article) {
                        return (
                                <div className="results" key={article._id}>
                                    <h3 className="articleTitle">{article.headline.main}</h3>
                                    <p className="articleAuthor">{article.byline.original || article.source }</p>
                                    <p className="articleDate">{article.pub_date}</p>
                                    <a className="articleURL" href={article.web_url} target="_blank">{article.web_url}</a>
                                </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}

// Export the component back for use in other files
export default Saved;