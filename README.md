# Crowdsale dapp

## Installing web3.js

### This project uses NPM as the package manager so new dependencies should be installed using npm https://web3js.readthedocs.io/en/v1.3.4/index.html

> npm install web3

### This project uses tailwind as a CSS framework you can get tailwind at https://tailwindcss.com/

> npm install tailwindcss

## Installing metamask as the wallet provider

### This dapp is powered by metamask, a wallet provider that allow us to use a lot of blockchain networks and inject web3 objects directly to our browser window to install metamask go to:

> https://metamask.io/download.html

### Reading transactions through the binance block explorer

> Access to https://testnet.bscscan.com/

> Paste the test contract token or the test crowdsale contract address (the crowdsale contract address can be found at ./Components/walletInteract.js) This will be changed once the contract is deployed on the main net.

### Or with a new instance of a web3 object https://web3js.readthedocs.io/en/v1.3.4/getting-started.html

> web3 = new Web3

## Wheres is the web 3 injected?

### Due to the nature of the dapp the web3 objects should be injected only in the crowdsale webpage unless the login functionalities require blockchain implementation, rendering of different sites of the app shouldnt affect any part of the project.
