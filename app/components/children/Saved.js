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
                    <h3 className="panel-title text-center">Top Articles</h3>
                </div>
                <div className="panel-body text-left">
                    {/* Here we use a map function to loop through an array in JSX */}

                    {this.state.saved.map(function(search, i) {
                        for (let i = 0; i < 4; i++) {
                            let newsaved = {title: search[i].headline.main, author: search[i].byline.original, date: search[i].pub_date, url: search[i].web_url};
                        }
                        return (
                            <div key={i}>
                                <h3 className="articleTitle">{newsaved.title}</h3>
                                <p className="articleAuthor">{newsaved.author}</p>
                                <p className="articleDate">{newsaved.date}</p>
                                <a className="articleURL" href={newsaved.url} target="_blank">{newsaved.url}</a>

                            </div>
                        );
                    })}

                    {/*{this.state.articles.map(function(search, i) {*/}
                        {/*return (*/}
                                {/*<div key={i}>*/}
                                    {/*<h3 className="articleTitle">{search.title}</h3>*/}
                                    {/*<p className="articleAuthor">{search.author}</p>*/}
                                    {/*<p className="articleDate">{search.date}</p>*/}
                                    {/*<a className="articleURL" href={search.url} target="_blank">{search.url}</a>*/}

                                {/*</div>*/}
                        {/*);*/}
                    {/*})}*/}
                </div>
            </div>
        );
    }
}

// Export the component back for use in other files
export default Saved;