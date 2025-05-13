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
    
    /**
     * Adds a node to our peer table
     */
    getPeers() {
        return Array.from(this.peers);
    }

    /**
     * Creates a new block containing any outstanding transactions
     */
    newBlock(previousHash, nonce = null) {
        let block = {
            index: this.chain.length,
            timestamp: new Date().toISOString(),
            transactions: this.pendingTransactions,
            previousHash,
            nonce
        };
        
        block.hash = Blockchain.hash(block);

        console.log(`Created block ${block.index}`);

        // Add the new block to the blockchain
        this.chain.push(block);

        // Reset pending transactions
        this.pendingTransactions = [];
    }

    /**
     * Generates a SHA-256 hash of the block
     */
    static hash(block) {
        const blockString = JSON.stringify(block, Object.keys(block).sort());
        return crypto.createHash("sha256").update(blockString).digest("hex");
    }
