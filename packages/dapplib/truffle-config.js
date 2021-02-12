require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict lock bone system educate rare remind mixture harvest open fresh squirrel'; 
let testAccounts = [
"0x768433f2114eb9dbc21528be83fdad9bea9f11f7735bed8660ea6a1904b40405",
"0xe2454e3a4cca032842590349ef607d7357281807ecd7b359c5a9fb9db18ca645",
"0x8219a01283ad3874c29038d2f9402fc9f7935ae6d50979ce91ae7efe4e979954",
"0xa45dc17e038884865bdeaf1a87ebe83f69b81cfe811ce6cd78e16b2452d54e0f",
"0x5f6da433e5932c92c011312649599b292093786177af3a5e971d57b30b32d630",
"0x79d5a821318817c22d3fbe0256afd88d3083130e838cc722d798e5d19ebf3756",
"0x8fd135484df840250fcfae97535d0ea44e248b36bcc5730c4914e945a47eda08",
"0xa4a5ccf0790d6aaf3f73076ffa651f9a64a11bee8bba47b43aa313269f6d1b00",
"0x84dd768c73c4e51b45e02364bff1042ac3fa6b4bb73f727d8aefae9c7638d0ea",
"0x43f8f22d9fa1f202bcaf3ca77dc9716ebf41730321abc90bb319bd6da9ee6fa0"
]; 
let rpcUri = 'https://rpc-mumbai.matic.today';
let wsUri = 'wss://ws-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: rpcUri,
            wsUri: wsUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                rpcUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
