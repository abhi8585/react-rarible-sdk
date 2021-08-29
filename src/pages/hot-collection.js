import React from 'react';
import { Link } from 'react-router-dom';

class HotCollection extends React.Component {

    constructor(props){
        super(props)
        
        // this.state = {
        //     'ThumbNailImage':'BIG GAN',
        //     'ImageName':'Generating Anime Character',
        //     'CreatorName':'',
        //     'CreatorImage':'',
        //     'DurationLeft':'',
        //     'Price' : '',
        //     'Claps' : ''
        // }
    }

    render() {
        
        return (
            
                <div className="col">
                  <div className="collection">
                <a
                  href="collection.html"
                  className="collection__cover"
                  data-bg={this.props.imagepath}
                />
                <div className="collection__meta">
                  <a href="author.html" className="collection__avatar">
                    <img src={this.props.imagepath} alt />
                  </a>
                  <h3 className="collection__name">
                    {/* <a href="collection.html">{this.props.collectionname}</a> */}
                    <Link to={`/item/${this.props.modelId}`}>{this.props.name} 
                    </Link>
                  </h3>
                  <span className="collection__number">{this.props.tokentype}</span>
                </div>
              </div>
                </div>  
            
        )
    }
}

export default HotCollection;