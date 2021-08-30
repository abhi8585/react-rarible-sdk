import React from 'react'
import GenImageCard from './generated-image-card'
import { MODEL_DATA, HOT_COLLECTION } from './constants';
import { createRaribleSdk, RaribleSdk } from "@rarible/protocol-ethereum-sdk";
import { Web3Ethereum } from "@rarible/web3-ethereum";
import { NftItem } from "@rarible/protocol-api-client";
import { SimpleOrder } from "@rarible/protocol-ethereum-sdk/build/order/sign-order";
import Header from './header';
import Footer from './footer';
import Hotcollection from './hot-collection';


// const modelItems = MODEL_DATA.map((model) => <GenImageCard timeleft={model.TimeLeft} modeldescription={model.ModelDescription} algoused={model.AlgorithmUsed} 
// provider={this.props.provider} accounts={this.props.accounts} sdk={this.props.sdk} />);
// const hotCollection = HOT_COLLECTION.map((collection) => <Hotcollection collectionname={collection.CollectionName} tokentype={collection.TokenType} />);

// console.log(modelItems);

class Home extends React.Component {

    constructor(props){
        super(props);
        this.generateModelCards = this.generateModelCards.bind(this)
        this.generateHotCollection = this.generateHotCollection.bind(this)
        this.state = {
            'ModelName':'BIG GAN',
            'ModelDescription':'Generating Anime Character',
            "MODEL_META_DATA":[]
        }
    }

    

    componentWillMount(){
        console.log(MODEL_DATA)
        // var cardhtml = this.generateModelCards();
        // console.log(cardhtml)
        // this.setState({MODEL_META_DATA:MODEL_DATA})
        // console.log(this.state.MODEL_META_DATA)
    }


    generateModelCards(){

      return (
        MODEL_DATA.map((model, index) => <GenImageCard timeleft={model.TimeLeft} modeldescription={model.ModelDescription}
        algoused={model.AlgorithmUsed} collectionId={index} 
        provider={this.props.provider} accounts={this.props.accounts} sdk={this.props.sdk}
        modelname={model.ModelName} collectibles={model.ModelCollectibles}
         imagepath={model.ImageUrl} />)
      )

    }

    generateHotCollection(){
      return(
        HOT_COLLECTION.map((collection, index) => <Hotcollection collectionname={collection.CollectionName}
         tokentype={collection.TokenType} modelId={index} 
         name={collection.Name} imagepath={collection.ImageUrl}
         ipfshash={collection.ipfshash}/>)
      )
    }
    
    

  
  
    render() {
        return (
            <div>
                <div>
                    {/* header */}
            {/* <Header provider={this.props.provider} accounts={this.props.accounts}/> */}
    {/* main content */}
  <main className="main">
    {/* home */}
    <div className="home">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="home__content">
              <h1 className="home__title">NFT, Backed by Artificial Intelligence</h1>
              <p className="home__text">
                Digital marketplace for Intelligent crypto collectibles which represents. <br />
                Sophisticated, Machine Learning Algorithms<br />
                Buy, sell, and discover exclusive digital assets.
              </p>
              {/* <div className="home__btns">
                <a href="explore.html" className="home__btn home__btn--clr">
                  Explore
                </a>
                <a href="signin.html" className="home__btn">
                  Create
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* end home */}
    <div className="container">
      {/* live auctions */}
      <section className="row row--grid">
        {/* title */}
        <div className="col-12">
          <div className="main__title">
            <h2>
              <a href="explore.html">Intelligent Crypto Collectibles</a>
            </h2>
          </div>
        </div>
        {/* end title */}
        {/* carousel */}
        <div className="row">
          {this.generateModelCards()}
        </div>
        {/* end carousel */}
      </section>
      {/* end live auctions */}
      {/* top sellers */}
      {/* end top sellers */}
      {/* explore */}
      {/* end explore */}
      {/* collections */}
      <section className="row row--grid">
        {/* title */}
        <div className="col-12">
          <div className="main__title">
            <h2>Hot Generated Images</h2>
          </div>
        </div>
        {/* end title */}
        {/* carousel */}
        <div className="row">
          {this.generateHotCollection()}
        </div>
        {/* end carousel */}
      </section>
      {/* end collections */}
      {/* get started */}
      <div className="row row--grid">
        {/* title */}
        <div className="col-12">
          <div className="main__title main__title--border-top">
            <h2>Get started creating &amp; selling your NFTs</h2>
          </div>
        </div>
        {/* end title */}
        <div className="col-12 col-md-6 col-lg-4 col-xl-3">
          <div className="feature">
            <span className="feature__icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M19,7H18V6a3,3,0,0,0-3-3H5A3,3,0,0,0,2,6H2V18a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V10A3,3,0,0,0,19,7ZM5,5H15a1,1,0,0,1,1,1V7H5A1,1,0,0,1,5,5ZM20,15H19a1,1,0,0,1,0-2h1Zm0-4H19a3,3,0,0,0,0,6h1v1a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V8.83A3,3,0,0,0,5,9H19a1,1,0,0,1,1,1Z" />
              </svg>
            </span>
            <h3 className="feature__title">Set up your wallet</h3>
            <p className="feature__text">
              Once you’ve set up your wallet of choice, connect it to AIPALATE
              marketplace and start collecting your collectibles. <br />
              
            </p>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4 col-xl-3">
          <div className="feature">
            <span className="feature__icon feature__icon--green">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M10,13H4a1,1,0,0,0-1,1v6a1,1,0,0,0,1,1h6a1,1,0,0,0,1-1V14A1,1,0,0,0,10,13ZM9,19H5V15H9ZM20,3H14a1,1,0,0,0-1,1v6a1,1,0,0,0,1,1h6a1,1,0,0,0,1-1V4A1,1,0,0,0,20,3ZM19,9H15V5h4Zm1,7H18V14a1,1,0,0,0-2,0v2H14a1,1,0,0,0,0,2h2v2a1,1,0,0,0,2,0V18h2a1,1,0,0,0,0-2ZM10,3H4A1,1,0,0,0,3,4v6a1,1,0,0,0,1,1h6a1,1,0,0,0,1-1V4A1,1,0,0,0,10,3ZM9,9H5V5H9Z" />
              </svg>
            </span>
            <h3 className="feature__title">Create your collection</h3>
            <p className="feature__text">
              Click Create and set up your collection. Add social links, a
              description, profile &amp; banner images, and set a secondary
              sales fee.
            </p>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4 col-xl-3">
          <div className="feature">
            <span className="feature__icon feature__icon--purple">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M22.71,6.29a1,1,0,0,0-1.42,0L20,7.59V2a1,1,0,0,0-2,0V7.59l-1.29-1.3a1,1,0,0,0-1.42,1.42l3,3a1,1,0,0,0,.33.21.94.94,0,0,0,.76,0,1,1,0,0,0,.33-.21l3-3A1,1,0,0,0,22.71,6.29ZM19,13a1,1,0,0,0-1,1v.38L16.52,12.9a2.79,2.79,0,0,0-3.93,0l-.7.7L9.41,11.12a2.85,2.85,0,0,0-3.93,0L4,12.6V7A1,1,0,0,1,5,6h8a1,1,0,0,0,0-2H5A3,3,0,0,0,2,7V19a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V14A1,1,0,0,0,19,13ZM5,20a1,1,0,0,1-1-1V15.43l2.9-2.9a.79.79,0,0,1,1.09,0l3.17,3.17,0,0L15.46,20Zm13-1a.89.89,0,0,1-.18.53L13.31,15l.7-.7a.77.77,0,0,1,1.1,0L18,17.21Z" />
              </svg>
            </span>
            <h3 className="feature__title">Add your NFTs</h3>
            <p className="feature__text">
              Upload your work, add a title and description, and customize your
              NFTs with properties, stats, and unlockable content.
            </p>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4 col-xl-3">
          <div className="feature feature--last">
            <span className="feature__icon feature__icon--red">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M15,12a1,1,0,1,0,1-1A1,1,0,0,0,15,12Zm6.71-.71-5-5A1,1,0,0,0,16,6H5A3,3,0,0,0,2,9v6a3,3,0,0,0,3,3H16a1,1,0,0,0,.71-.29l5-5A1,1,0,0,0,21.71,11.29ZM15.59,16H5a1,1,0,0,1-1-1V9A1,1,0,0,1,5,8H15.59l4,4Z" />
              </svg>
            </span>
            <h3 className="feature__title">List them for sale</h3>
            <p className="feature__text">
              Choose between auctions, fixed-price listings, and declining-price
              listings. You choose how you want to sell your NFTs, and we help
              you sell them!
            </p>
          </div>
        </div>
      </div>
      {/* end get started */}
    </div>
  </main>
  {/* end main content */}
  {/* footer */}
  <Footer />
  {/* end footer */}

                </div>


            </div>
        )
    }
}

export default Home