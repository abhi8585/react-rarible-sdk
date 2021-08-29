import { throws } from 'assert';
import React from 'react'
import { Link } from 'react-router-dom';

class GenImageCard extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            'ThumbNailImage':'BIG GAN',
            'ImageName':'Generating Anime Character',
            'CreatorName':'',
            'CreatorImage':'',
            'DurationLeft':'',
            'Price' : '',
            'Claps' : ''
        }
    }

    render() {
        
        return (
            
                <div className="col">
                  <div className="card" >
                    <a href="item.html" className="card__cover">
                      <img src={this.props.imagepath} alt />
                      <span className="card__time">{this.props.timeleft}</span>
                    </a>
                    <h3 className="card__title">
                      {/* <a href="item.html">
                        {this.props.modeldescription}
                      </a> */}
                      <Link to={`/collection/${this.props.collectionId}`}>{this.props.modelname} 
                    </Link>
                    </h3>
                    <div className="card__author card__author--verified">
                      <img src={this.props.imagepath} alt />
                      <a href="author.html">{this.props.algoused}</a>
                    </div>
                    <div className="card__info">
                      <div className="card__price">
                        <span>Current price</span>
                        <span>2.61 ETH</span>
                      </div>
                      <div className="card__price">
                        <span>Collectibles</span>
                        <span>{this.props.collectibles}</span>
                      </div>
                    </div>
                  </div>
                </div>  
            
        )
    }
}

export default GenImageCard;