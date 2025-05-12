const crypto = require("crypto");


class Blockchain {
    constructor() {
        this.chain = [];
        this.pendingTransactions = [];
        this.newBlock();
        this.peers = new Set();
    }

    /**
     * Adds a node to our peer table
     */
    addPeer(host) {
        this.peers.add(host);
    }