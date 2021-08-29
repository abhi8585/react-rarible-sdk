import React from 'react';
import { MODEL_DATA, IMAGES_FOR_SALE, CREATED_IMAGES } from './constants';
import CollectionSale from './collection-sale';
import CollectionCreated from './collection-created';

class ModelCollection extends React.Component {

    constructor(props){
        super(props)
        this.modelId = this.props.match.params.id
        this.modelData = MODEL_DATA[this.modelId]
        this.createdData = this.modelData["CreatedImages"]
        this.saleData = this.modelData["SaleImages"]
        // console.log(this.modelData)
        // this.state = {
        //     'ModelName':'BIG GAN',
        //     'ModelDescription':'Generating Anime Character',
        // }
    }


    generateCollectionSale(){

        return (
          this.saleData.map((model, index) => <CollectionSale collectionId={index} modelId={this.modelId} model={model}/>)
        )
  
      }

    generateCollectionCreated(){

        return (
            this.createdData.map((model, index) => <CollectionCreated createdCollectionId={index} modelId={this.modelId} model={model}/>)
        )
  
      }

    render() {
        return (
            
                <div>
                    {/* main content */}
  <main className="main">
    <div className="main__author" style={{background:"white"}} />
    
    <div className="container">
      <div className="row row--grid">
        <div className="col-12 col-xl-3">
          <div className="author author--page">
            <div className="author__meta">
              <a
                href="author.html"
                className="author__avatar author__avatar--verified"
              >
                <img src={this.modelData.ImageUrl} alt />
              </a>
              <h1 className="author__name">
                <a href="author.html">{this.modelData.ModelName}</a>
              </h1>
              <h2 className="author__nickname">
                <a href="author.html">{this.modelData.AlgorithmUsed}</a>
              </h2>
              <p className="author__text">
              {this.modelData.ModelDescription}
              </p>
             
              <div className="author__social">
                
                <a href="#" target="_blank">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M17.34,5.46h0a1.2,1.2,0,1,0,1.2,1.2A1.2,1.2,0,0,0,17.34,5.46Zm4.6,2.42a7.59,7.59,0,0,0-.46-2.43,4.94,4.94,0,0,0-1.16-1.77,4.7,4.7,0,0,0-1.77-1.15,7.3,7.3,0,0,0-2.43-.47C15.06,2,14.72,2,12,2s-3.06,0-4.12.06a7.3,7.3,0,0,0-2.43.47A4.78,4.78,0,0,0,3.68,3.68,4.7,4.7,0,0,0,2.53,5.45a7.3,7.3,0,0,0-.47,2.43C2,8.94,2,9.28,2,12s0,3.06.06,4.12a7.3,7.3,0,0,0,.47,2.43,4.7,4.7,0,0,0,1.15,1.77,4.78,4.78,0,0,0,1.77,1.15,7.3,7.3,0,0,0,2.43.47C8.94,22,9.28,22,12,22s3.06,0,4.12-.06a7.3,7.3,0,0,0,2.43-.47,4.7,4.7,0,0,0,1.77-1.15,4.85,4.85,0,0,0,1.16-1.77,7.59,7.59,0,0,0,.46-2.43c0-1.06.06-1.4.06-4.12S22,8.94,21.94,7.88ZM20.14,16a5.61,5.61,0,0,1-.34,1.86,3.06,3.06,0,0,1-.75,1.15,3.19,3.19,0,0,1-1.15.75,5.61,5.61,0,0,1-1.86.34c-1,.05-1.37.06-4,.06s-3,0-4-.06A5.73,5.73,0,0,1,6.1,19.8,3.27,3.27,0,0,1,5,19.05a3,3,0,0,1-.74-1.15A5.54,5.54,0,0,1,3.86,16c0-1-.06-1.37-.06-4s0-3,.06-4A5.54,5.54,0,0,1,4.21,6.1,3,3,0,0,1,5,5,3.14,3.14,0,0,1,6.1,4.2,5.73,5.73,0,0,1,8,3.86c1,0,1.37-.06,4-.06s3,0,4,.06a5.61,5.61,0,0,1,1.86.34A3.06,3.06,0,0,1,19.05,5,3.06,3.06,0,0,1,19.8,6.1,5.61,5.61,0,0,1,20.14,8c.05,1,.06,1.37.06,4S20.19,15,20.14,16ZM12,6.87A5.13,5.13,0,1,0,17.14,12,5.12,5.12,0,0,0,12,6.87Zm0,8.46A3.33,3.33,0,1,1,15.33,12,3.33,3.33,0,0,1,12,15.33Z" />
                  </svg>
                </a>
                <a href="#" target="_blank">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M22,5.8a8.49,8.49,0,0,1-2.36.64,4.13,4.13,0,0,0,1.81-2.27,8.21,8.21,0,0,1-2.61,1,4.1,4.1,0,0,0-7,3.74A11.64,11.64,0,0,1,3.39,4.62a4.16,4.16,0,0,0-.55,2.07A4.09,4.09,0,0,0,4.66,10.1,4.05,4.05,0,0,1,2.8,9.59v.05a4.1,4.1,0,0,0,3.3,4A3.93,3.93,0,0,1,5,13.81a4.9,4.9,0,0,1-.77-.07,4.11,4.11,0,0,0,3.83,2.84A8.22,8.22,0,0,1,3,18.34a7.93,7.93,0,0,1-1-.06,11.57,11.57,0,0,0,6.29,1.85A11.59,11.59,0,0,0,20,8.45c0-.17,0-.35,0-.53A8.43,8.43,0,0,0,22,5.8Z" />
                  </svg>
                </a>
              
              </div>
              <div className="author__wrap">
                <div className="author__followers">
                  <p>{this.modelData.ModelCollectibles}</p>
                  <span>Generated Characters</span>
                </div>
                {/* <button className="author__follow" type="button">
                  Follow
                </button> */}
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-xl-9">
          <div className="profile">
            {/* tabs nav */}
            <ul
              className="nav nav-tabs profile__tabs"
              id="profile__tabs"
              role="tablist"
            >
              <li className="nav-item">
                <a
                  className="nav-link active"
                  data-toggle="tab"
                  href="#tab-1"
                  role="tab"
                  aria-controls="tab-1"
                  aria-selected="false"
                >
                  On Sale
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  data-toggle="tab"
                  href="#tab-2"
                  role="tab"
                  aria-controls="tab-2"
                  aria-selected="true"
                >
                  Created
                </a>
              </li>
              {/* <li className="nav-item">
                <a
                  className="nav-link"
                  data-toggle="tab"
                  href="#tab-3"
                  role="tab"
                  aria-controls="tab-3"
                  aria-selected="false"
                >
                  My Activity
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  data-toggle="tab"
                  href="#tab-4"
                  role="tab"
                  aria-controls="tab-4"
                  aria-selected="false"
                >
                  Settings
                </a>
              </li> */}
            </ul>
            {/* end tabs nav */}
          </div>
          {/* content tabs */}
          <div className="tab-content">
            <div
              className="tab-pane fade show active"
              id="tab-1"
              role="tabpanel"
            >
              <div className="row row--grid">
            {this.generateCollectionSale()}              
              </div>
              {/* paginator */}
              {/* <div className="row row--grid">
                <div className="col-12">
                  <div className="paginator">
                    <span className="paginator__pages">8 from 169</span>
                    <ul className="paginator__list">
                      <li>
                        <a href="#">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                          >
                            <path d="M17,11H9.41l3.3-3.29a1,1,0,1,0-1.42-1.42l-5,5a1,1,0,0,0-.21.33,1,1,0,0,0,0,.76,1,1,0,0,0,.21.33l5,5a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L9.41,13H17a1,1,0,0,0,0-2Z" />
                          </svg>
                        </a>
                      </li>
                      <li className="active">
                        <a href="#">1</a>
                      </li>
                      <li>
                        <a href="#">2</a>
                      </li>
                      <li>
                        <a href="#">3</a>
                      </li>
                      <li>
                        <a href="#">4</a>
                      </li>
                      <li>
                        <a href="#">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                          >
                            <path d="M17.92,11.62a1,1,0,0,0-.21-.33l-5-5a1,1,0,0,0-1.42,1.42L14.59,11H7a1,1,0,0,0,0,2h7.59l-3.3,3.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l5-5a1,1,0,0,0,.21-.33A1,1,0,0,0,17.92,11.62Z" />
                          </svg>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div> */}
              {/* end paginator */}
            </div>
            <div className="tab-pane fade" id="tab-2" role="tabpanel">
              <div className="row row--grid">
                    {this.generateCollectionCreated()}
              </div>
              {/* paginator */}
              {/* <div className="row row--grid">
                <div className="col-12">
                  <div className="paginator">
                    <span className="paginator__pages">8 from 169</span>
                    <ul className="paginator__list">
                      <li>
                        <a href="#">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                          >
                            <path d="M17,11H9.41l3.3-3.29a1,1,0,1,0-1.42-1.42l-5,5a1,1,0,0,0-.21.33,1,1,0,0,0,0,.76,1,1,0,0,0,.21.33l5,5a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L9.41,13H17a1,1,0,0,0,0-2Z" />
                          </svg>
                        </a>
                      </li>
                      <li className="active">
                        <a href="#">1</a>
                      </li>
                      <li>
                        <a href="#">2</a>
                      </li>
                      <li>
                        <a href="#">3</a>
                      </li>
                      <li>
                        <a href="#">4</a>
                      </li>
                      <li>
                        <a href="#">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                          >
                            <path d="M17.92,11.62a1,1,0,0,0-.21-.33l-5-5a1,1,0,0,0-1.42,1.42L14.59,11H7a1,1,0,0,0,0,2h7.59l-3.3,3.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l5-5a1,1,0,0,0,.21-.33A1,1,0,0,0,17.92,11.62Z" />
                          </svg>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div> */}
              {/* end paginator */}
            </div>
            <div className="tab-pane fade" id="tab-3" role="tabpanel">
              <div className="row">
                {/* sidebar */}
                <div className="col-12 col-xl-4 order-xl-2">
                  <div className="filter-wrap">
                    <button
                      className="filter-wrap__btn"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseFilter"
                      aria-expanded="false"
                      aria-controls="collapseFilter"
                    >
                      Open filter
                    </button>
                    <div
                      className="collapse filter-wrap__content"
                      id="collapseFilter"
                    >
                      {/* filter */}
                      <div className="filter filter--sticky">
                        <h4 className="filter__title">
                          Filters <button type="button">Clear all</button>
                        </h4>
                        <div className="filter__group">
                          <ul className="filter__checkboxes">
                            <li>
                              <input
                                id="type5"
                                type="checkbox"
                                name="type5"
                                defaultChecked
                              />
                              <label htmlFor="type5">Listings</label>
                            </li>
                            <li>
                              <input id="type6" type="checkbox" name="type6" />
                              <label htmlFor="type6">Purchases</label>
                            </li>
                            <li>
                              <input
                                id="type7"
                                type="checkbox"
                                name="type7"
                                defaultChecked
                              />
                              <label htmlFor="type7">Sales</label>
                            </li>
                            <li>
                              <input
                                id="type8"
                                type="checkbox"
                                name="type8"
                                defaultChecked
                              />
                              <label htmlFor="type8">Transfers</label>
                            </li>
                            <li>
                              <input id="type9" type="checkbox" name="type9" />
                              <label htmlFor="type9">Bids</label>
                            </li>
                            <li>
                              <input
                                id="type10"
                                type="checkbox"
                                name="type10"
                              />
                              <label htmlFor="type10">Likes</label>
                            </li>
                            <li>
                              <input
                                id="type11"
                                type="checkbox"
                                name="type11"
                              />
                              <label htmlFor="type11">Followings</label>
                            </li>
                          </ul>
                        </div>
                      </div>
                      {/* end filter */}
                    </div>
                  </div>
                </div>
                {/* end sidebar */}
                {/* content */}
                <div className="col-12 col-xl-8 order-xl-1">
                  <div className="row row--grid">
                    <div className="col-12 col-lg-6 col-xl-12">
                      <div className="activity">
                        <a href="item.html" className="activity__cover">
                          <img src="img/cover/cover1.jpg" alt />
                        </a>
                        <div className="activity__content">
                          <h3 className="activity__title">
                            <a href="item.html">Walking on Air</a>
                          </h3>
                          <p className="activity__text">
                            listed by <a href="author.html">@Nickname</a> <br />
                            for <b>0.049 ETH</b>
                          </p>
                          <span className="activity__time">4 minutes ago</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-lg-6 col-xl-12">
                      <div className="activity">
                        <a href="item.html" className="activity__cover">
                          <img src="img/cover/cover2.jpg" alt />
                        </a>
                        <div className="activity__content">
                          <h3 className="activity__title">
                            <a href="item.html">To Infinity And Beyond</a>
                          </h3>
                          <p className="activity__text">
                            9 editions listed by <a href="author.html">@neo</a>{" "}
                            <br />
                            for <b>0.085 ETH</b> each
                          </p>
                          <span className="activity__time">21 minutes ago</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-lg-6 col-xl-12">
                      <div className="activity">
                        <a href="item.html" className="activity__cover">
                          <img src="img/cover/cover3.jpg" alt />
                        </a>
                        <div className="activity__content">
                          <h3 className="activity__title">
                            <a href="item.html">Flowers in Concrete</a>
                          </h3>
                          <p className="activity__text">
                            purchased by <a href="author.html">@johndoe</a>{" "}
                            <b>0x23d2dc92b...82c6</b> for <b>0.011 ETH</b> from{" "}
                            <a href="author.html">@min1max</a>
                          </p>
                          <span className="activity__time">21 minutes ago</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-lg-6 col-xl-12">
                      <div className="activity">
                        <a href="item.html" className="activity__cover">
                          <img src="img/cover/cover4.jpg" alt />
                        </a>
                        <div className="activity__content">
                          <h3 className="activity__title">
                            <a href="item.html">Industrial Revolution</a>
                          </h3>
                          <p className="activity__text">
                            transferred from <a href="author.html">@midinh</a>{" "}
                            <br />
                            to <a href="author.html">@johndoe</a>
                          </p>
                          <span className="activity__time">23 minutes ago</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-lg-6 col-xl-12">
                      <div className="activity">
                        <a href="item.html" className="activity__cover">
                          <img src="img/cover/cover5.jpg" alt />
                        </a>
                        <div className="activity__content">
                          <h3 className="activity__title">
                            <a href="item.html">Tranquility</a>
                          </h3>
                          <p className="activity__text">
                            <a href="author.html">@aaarthur</a> offered{" "}
                            <b>0.002 WETH</b>
                          </p>
                          <span className="activity__time">41 minutes ago</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-lg-6 col-xl-12">
                      <div className="activity">
                        <a href="item.html" className="activity__cover">
                          <img src="img/cover/cover6.jpg" alt />
                        </a>
                        <div className="activity__content">
                          <h3 className="activity__title">
                            <a href="item.html">Tetradecapus</a>
                          </h3>
                          <p className="activity__text">
                            liked by <a href="author.html">@johndoe</a>
                          </p>
                          <span className="activity__time">45 minutes ago</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-lg-6 col-xl-12">
                      <div className="activity">
                        <a href="item.html" className="activity__cover">
                          <img src="img/cover/cover7.jpg" alt />
                        </a>
                        <div className="activity__content">
                          <h3 className="activity__title">
                            <a href="item.html">Elegance</a>
                          </h3>
                          <p className="activity__text">
                            started following <a href="author.html">@johndoe</a>
                          </p>
                          <span className="activity__time">48 minutes ago</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-lg-6 col-xl-12">
                      <div className="activity">
                        <a href="item.html" className="activity__cover">
                          <img src="img/cover/cover8.jpg" alt />
                        </a>
                        <div className="activity__content">
                          <h3 className="activity__title">
                            <a href="item.html">Walking on Air</a>
                          </h3>
                          <p className="activity__text">
                            started following <a href="author.html">@johndoe</a>
                          </p>
                          <span className="activity__time">49 minutes ago</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* collapse */}
                  <div className="row row--grid collapse" id="collapsemore1">
                    <div className="col-12 col-lg-6 col-xl-12">
                      <div className="activity">
                        <a href="item.html" className="activity__cover">
                          <img src="img/cover/cover1.jpg" alt />
                        </a>
                        <div className="activity__content">
                          <h3 className="activity__title">
                            <a href="item.html">Walking on Air</a>
                          </h3>
                          <p className="activity__text">
                            listed by <a href="author.html">@Nickname</a> <br />
                            for <b>0.049 ETH</b>
                          </p>
                          <span className="activity__time">4 minutes ago</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-lg-6 col-xl-12">
                      <div className="activity">
                        <a href="item.html" className="activity__cover">
                          <img src="img/cover/cover2.jpg" alt />
                        </a>
                        <div className="activity__content">
                          <h3 className="activity__title">
                            <a href="item.html">To Infinity And Beyond</a>
                          </h3>
                          <p className="activity__text">
                            9 editions listed by <a href="author.html">@neo</a>{" "}
                            <br />
                            for <b>0.085 ETH</b> each
                          </p>
                          <span className="activity__time">21 minutes ago</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-lg-6 col-xl-12">
                      <div className="activity">
                        <a href="item.html" className="activity__cover">
                          <img src="img/cover/cover3.jpg" alt />
                        </a>
                        <div className="activity__content">
                          <h3 className="activity__title">
                            <a href="item.html">Flowers in Concrete</a>
                          </h3>
                          <p className="activity__text">
                            purchased by <a href="author.html">@johndoe</a>{" "}
                            <b>0x23d2dc92b...82c6</b> for <b>0.011 ETH</b> from{" "}
                            <a href="author.html">@min1max</a>
                          </p>
                          <span className="activity__time">21 minutes ago</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-lg-6 col-xl-12">
                      <div className="activity">
                        <a href="item.html" className="activity__cover">
                          <img src="img/cover/cover4.jpg" alt />
                        </a>
                        <div className="activity__content">
                          <h3 className="activity__title">
                            <a href="item.html">Industrial Revolution</a>
                          </h3>
                          <p className="activity__text">
                            transferred from <a href="author.html">@midinh</a>{" "}
                            <br />
                            to <a href="author.html">@johndoe</a>
                          </p>
                          <span className="activity__time">23 minutes ago</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-lg-6 col-xl-12">
                      <div className="activity">
                        <a href="item.html" className="activity__cover">
                          <img src="img/cover/cover5.jpg" alt />
                        </a>
                        <div className="activity__content">
                          <h3 className="activity__title">
                            <a href="item.html">Tranquility</a>
                          </h3>
                          <p className="activity__text">
                            <a href="author.html">@aaarthur</a> offered{" "}
                            <b>0.002 WETH</b>
                          </p>
                          <span className="activity__time">41 minutes ago</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-lg-6 col-xl-12">
                      <div className="activity">
                        <a href="item.html" className="activity__cover">
                          <img src="img/cover/cover6.jpg" alt />
                        </a>
                        <div className="activity__content">
                          <h3 className="activity__title">
                            <a href="item.html">Tetradecapus</a>
                          </h3>
                          <p className="activity__text">
                            liked by <a href="author.html">@johndoe</a>
                          </p>
                          <span className="activity__time">45 minutes ago</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-lg-6 col-xl-12">
                      <div className="activity">
                        <a href="item.html" className="activity__cover">
                          <img src="img/cover/cover7.jpg" alt />
                        </a>
                        <div className="activity__content">
                          <h3 className="activity__title">
                            <a href="item.html">Elegance</a>
                          </h3>
                          <p className="activity__text">
                            started following <a href="author.html">@johndoe</a>
                          </p>
                          <span className="activity__time">48 minutes ago</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-lg-6 col-xl-12">
                      <div className="activity">
                        <a href="item.html" className="activity__cover">
                          <img src="img/cover/cover8.jpg" alt />
                        </a>
                        <div className="activity__content">
                          <h3 className="activity__title">
                            <a href="item.html">Walking on Air</a>
                          </h3>
                          <p className="activity__text">
                            started following <a href="author.html">@johndoe</a>
                          </p>
                          <span className="activity__time">49 minutes ago</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row row--grid">
                    <div className="col-12">
                      <button
                        className="main__load"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapsemore1"
                        aria-expanded="false"
                        aria-controls="collapsemore1"
                      >
                        Load more
                      </button>
                    </div>
                  </div>
                  {/* end collapse */}
                </div>
                {/* end content */}
              </div>
            </div>
            <div className="tab-pane fade" id="tab-4" role="tabpanel">
              <div className="row row--grid">
                {/* details form */}
                <div className="col-12 col-lg-6">
                  <form action="#" className="sign__form sign__form--profile">
                    <div className="row">
                      <div className="col-12">
                        <h4 className="sign__title">Profile details</h4>
                      </div>
                      <div className="col-12 col-md-6 col-lg-12 col-xl-6">
                        <div className="sign__group">
                          <label className="sign__label" htmlFor="username">
                            Login
                          </label>
                          <input
                            id="username"
                            type="text"
                            name="username"
                            className="sign__input"
                            placeholder="User123"
                          />
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-lg-12 col-xl-6">
                        <div className="sign__group">
                          <label className="sign__label" htmlFor="email">
                            Email
                          </label>
                          <input
                            id="email"
                            type="text"
                            name="email"
                            className="sign__input"
                            placeholder="email@email.com"
                          />
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-lg-12 col-xl-6">
                        <div className="sign__group">
                          <label className="sign__label" htmlFor="firstname">
                            First name
                          </label>
                          <input
                            id="firstname"
                            type="text"
                            name="firstname"
                            className="sign__input"
                            placeholder="John"
                          />
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-lg-12 col-xl-6">
                        <div className="sign__group">
                          <label className="sign__label" htmlFor="lastname">
                            Last name
                          </label>
                          <input
                            id="lastname"
                            type="text"
                            name="lastname"
                            className="sign__input"
                            placeholder="Doe"
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <button className="sign__btn" type="button">
                          Save
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
                {/* end details form */}
                {/* password form */}
                <div className="col-12 col-lg-6">
                  <form action="#" className="sign__form sign__form--profile">
                    <div className="row">
                      <div className="col-12">
                        <h4 className="sign__title">Change password</h4>
                      </div>
                      <div className="col-12 col-md-6 col-lg-12 col-xl-6">
                        <div className="sign__group">
                          <label className="sign__label" htmlFor="oldpass">
                            Old password
                          </label>
                          <input
                            id="oldpass"
                            type="password"
                            name="oldpass"
                            className="sign__input"
                          />
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-lg-12 col-xl-6">
                        <div className="sign__group">
                          <label className="sign__label" htmlFor="newpass">
                            New password
                          </label>
                          <input
                            id="newpass"
                            type="password"
                            name="newpass"
                            className="sign__input"
                          />
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-lg-12 col-xl-6">
                        <div className="sign__group">
                          <label className="sign__label" htmlFor="confirmpass">
                            Confirm new password
                          </label>
                          <input
                            id="confirmpass"
                            type="password"
                            name="confirmpass"
                            className="sign__input"
                          />
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-lg-12 col-xl-6">
                        <div className="sign__group">
                          <label className="sign__label" htmlFor="select">
                            Select
                          </label>
                          <select
                            name="select"
                            id="select"
                            className="sign__select"
                          >
                            <option value={0}>Option</option>
                            <option value={1}>Option 2</option>
                            <option value={2}>Option 3</option>
                            <option value={3}>Option 4</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-12">
                        <button className="sign__btn" type="button">
                          Change
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
                {/* end password form */}
              </div>
            </div>
          </div>
          {/* end content tabs */}
        </div>
      </div>
    </div>
  </main>
  {/* end main content */}
                </div>            
        )
    }
}

export default ModelCollection;