import React, { Component } from 'react'
import Client from 'shopify-buy'

const ShopContext = React.createContext();

const client = Client.buildClient({
    domain: 'golchenko.myshopify.com',
    storefrontAccessToken: 'd49462a30dc192a13b1abe3f31a30cfa'
});

// const client = Client.buildClient({
//     domain: process.env.REACT_APP_SHOPIFY_DOMAIN,
//     storefrontAccessToken: process.env.REACT_APP_SHOPIFY_API
// });

class ShopProvider extends Component {

    state = {
        product: {},
        products: [],
        checkout: {},
        isCartOpen: false,
        isMobileMenuOpen: false
    };

    createCheckout = async () => {

    }

    fetchCheckout = async () => {

    }

    addItemToCheckout = async (lineItemIdsToRemove) => {

    }

    fetchAllProducts = async () => {

    }

    fetchProductWithHandle = async (handle) => {

    }

    closeCart = () => {

    }

    opencart = () => {

    }

    openMenu = () => {

    }

    closeMenu = () => {

    }

    render() {
        return (
            <ShopContext.Provider>
                {this.props.children}
            </ShopContext.Provider>
        )
    }
}

const ShopConsumer = ShopContext.Consumer

export { ShopConsumer, ShopContext }

export default ShopProvider
