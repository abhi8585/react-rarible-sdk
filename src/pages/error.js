import React from 'react'
import Footer from './footer';
import { toAddress, toBigNumber } from "@rarible/types";
import { MODEL_DATA, HOT_COLLECTION, IMAGES_FOR_SALE, CREATED_IMAGES } from './constants';
import ipfs from './ipfs';

class ItemCollectionCreated extends React.Component {

    constructor(props){
        
        super(props)
        this.collectionId = this.props.match.params.id
        console.log(this.collectionId)
        this.lazyMint = this.lazyMint.bind(this)
        this.itemData = CREATED_IMAGES[this.collectionId]
        console.log(this.itemData)
        
    }



    async lazyMint(){
      
      
      var jsonStr = JSON.stringify(this.itemData);
      const buf = Buffer.from(jsonStr);
      const itemHash = await ipfs.add(buf)
      const uri = "ipfs/"+itemHash[0].hash
     //  console.log(uri)
     const item = await this.props.sdk.nft.mintLazy({
       '@type': 'ERC721',
       contract: toAddress('0x6ede7f3c26975aad32a475e1021d8f6f39c89d82'), // rinkeby default Rarible collection
       uri: uri,
       creators: [{ account: toAddress(this.props.accounts[0]), value: 10000 }],
       royalties: [],
     })
     if (item) {
       /**
        * Get minted nft through SDK
        */
       const token = await this.props.sdk.apis.nftItem.getNftItemById({ itemId: item.id })
       if (token) {
         console.log(token)
       }
       else{
         console.log("access denied")
       }
     }
 }

    render() {
        
        return (
            <div></div>
        )
    }
}

export default ItemCollectionCreated;