require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace glimpse flee trophy charge ranch remember minor imitate private fringe spike'; 
let testAccounts = [
"0x4decb4e242d8a7729b4a4d3166a7eb90e3b44ea581d2160e864b91bf55c095c0",
"0xd974ac318721a4016eb32bbb3b8cf21f5d5e82ba842b8310d0032ee8cde97055",
"0xad3df7613c047014c2d049b7061755dc1a136767cf953fc77541de0911b1ba29",
"0xabb7ed6fb032d7c7c1c48f91c7180dd4a56f92c6064eda7d50d446fd4bf7a6c5",
"0x234d1ad725dfea98fa8ce33e7dfa4a6debe37b98ecc86abb1ac8096c11b62bbb",
"0x82c089db50bead3fcb16663230b5c2a5d562987964faaca35d355968395c7f64",
"0xf5cfffd4eb0344f991b51ec1508f6ab7af3fd3839b3d549a87a5ffdfbca31701",
"0xde9cc95eb5c0565279d6d53de7678742a62e8e996f125e1ec20c07235317831a",
"0x02835cb9152f59c2554dc715db10964a6f4046fff2476230fc5749c676b155ae",
"0xf012e150731fdff1afa6b98f489057d5282c10d57282b5142cfd94e4722e0831"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
