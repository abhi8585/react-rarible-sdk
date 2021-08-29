import logo from './logo.svg';
import './App.css';
import Home from './pages/home'
import Item from './pages/item'
import Header  from './pages/header';
import ModelInformation from './pages/model-information';
import Collection from './pages/collection';
import Web3 from "web3"
import { createRaribleSdk, RaribleSdk } from "@rarible/protocol-ethereum-sdk"
import React from 'react'
import { Web3Ethereum } from "@rarible/web3-ethereum";
import { Switch, Route } from 'react-router-dom'
import ModelCollection from './pages/model';
import CollectionSale from './pages/collection-sale';
import ItemCollection from './pages/item-collection';
import ItemCollectionCreated from './pages/item-collection-created';
import FileUpload from './pages/file-upload';


// import Html404 from './pages/html404'

const NETWORK = "rinkeby"

class App extends React.Component {


  constructor(props){
    super(props)
    this.setAccounts = this.setAccounts.bind(this)
    this.state = {

      provider : null,
      accounts : [],
      sdk:null,

    }
  }


  componentWillMount() {

    // this.setState({ message: "This is an updated message" });
    console.log("Component is Mounting")
    this.useEffect()

}

  useEffect(){

    if (window.ethereum) {
			this.handleInit()
      // console.log("going in if")
		} else {
			window.addEventListener('ethereum#initialized', this.handleInit, {
				once: true,
			})
			setTimeout(this.handleInit, 3000) // 3 seconds
		}

  }


  async setProvider(currentProvider){
    await this.setState({ provider: currentProvider });
    console.log(this.state.provider);
  }


  async setAccounts(accounts){
    await this.setState({ accounts: accounts });
    console.log(this.state.accounts);
  }


  async setSdk(currentSdk){
      await this.setState({ sdk : currentSdk })
      console.log(this.state.sdk);
  }

  handleInit(){
    console.log(true)
    const { ethereum } = window
		if (ethereum && ethereum.isMetaMask) {
			console.log('Ethereum successfully detected!')
			this.setProvider(ethereum)

			// add listener on accountsChanged event to render actual address
			// ethereum.on('accountsChanged', this.state.accounts)
      ethereum.on('accountsChanged', this.setAccounts);
    
    //   console.log(this.state.accounts)
		// 	// // configure web3
			const web3 = new Web3(ethereum)
		// 	// // configure raribleSdk
			const raribleSdk = createRaribleSdk(new Web3Ethereum({ web3 }), NETWORK)
			this.setSdk(raribleSdk)
    //   console.log(this.state.sdk);
			// // set current account if already connected
			web3.eth.getAccounts().then(e => {
				this.setAccounts(e)
        console.log(e)
			})
		} else {
			console.log('Please install MetaMask!')
		}
  }


  // checkIfMetaMask(){
  //   if (!this.state.provider?.isMetaMask) {
  //     return (<strong>Please install metamask to use the app</strong>)
  //   }
  // }


  render() {
 
    // cont temp = this.checkIfMetaMask();
    // console.log(res)
    const element = '';
    if (!this.state.provider?.isMetaMask) {
      return(<strong>Please install metamask to use the app</strong>)
      console.log("going in if")
    } else {
      console.log("going in else")

      if (this.state.sdk) {
        
        // // return <Dashboard provider={provider} sdk={sdk} accounts={accounts}/>
        // console.log("renderred template")
        return (

          <div>
            {/* <Item provider={this.state.provider} accounts={this.state.accounts} sdk={this.state.sdk} /> */}
            <Header provider={this.state.provider} accounts={this.state.accounts} />
            {/* <Home provider={this.state.provider} accounts={this.state.accounts} sdk={this.state.sdk} /> */}
            <Switch>
              <Route exact path='/item/:id' render={(props) => (
              <Item {...props} provider={this.state.provider} accounts={this.state.accounts} sdk={this.state.sdk} />
            )}/>
              <Route exact path='/collection/:id' render={(props) => (
                <ModelCollection {...props} />
              )}/>
              <Route exact path='/home' component={Home}/>
              <Route exact path='/collection' component={ModelCollection}/>
              <Route exact path='/model' component={ModelInformation}/>
              <Route exact path='/sale' component={CollectionSale}/>
              <Route exact path='/file' component={FileUpload}/>
              <Route exact path='/item-collection/:id/:modelid' render={(props) => (
              <ItemCollection {...props} provider={this.state.provider} accounts={this.state.accounts} sdk={this.state.sdk} />
              
            )}/>
             <Route exact path='/item-collection-created/:id/:modelid' render={(props) => (
              <ItemCollectionCreated {...props} provider={this.state.provider} accounts={this.state.accounts} sdk={this.state.sdk} />
              
            )}/>
            </Switch>
            {/* <Html404 /> */}
      
          </div>
        )
      } else {
        return(<strong>Sdk not initialized</strong>)  
      }
    }
  
    // return (
    //   <div>
    //   {element}
    //   {/* <Html404 /> */}

    // </div>
    // )
  }  

}


// function App() {

  // return (

  //   <div>
  //     <Home />
  //     {/* <Html404 /> */}

  //   </div>
  // )

// }

export default App;
