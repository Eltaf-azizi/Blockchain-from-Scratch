const Blockchain = require("./blockchain");
const {send} = require("micro");

const blockchain = new Blockchain();


module.exports = async (request, response) => {
    const route = request.url;

    // Keep track of the peers that have contacted us
    blockchain.addPeer(request.headers.host);

    let output;
