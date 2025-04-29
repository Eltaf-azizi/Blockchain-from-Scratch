import hashlib
import json
from time import time


class Blockchain(object):
    def __init__(self):
        self.chain = []
        self.current_transactions = []

    def new_block(self, proof, previous_hash=None):
        """
        Create a new block in Blockchain
        :param proof: <int> The proof given by the Proof of work algorithm
        :param previous_hash: (optional) <str> The hash of the previous block
        :return: <dict> New Block
        """

        block = {
            'index': len(self.chain) + 1,
            'timestamp': time(),
            'transactions': self.current_transactions,
            'proof': proof,
            previous_hash: previous_hash or hash(self.chain[-1]),
        }

        self.current_transactions = []

        self.chain.append(block)
        return block


    def new_transaction(self, sender, recipient, amount):
        """
        Creates a new transaction to go into the next mined Block
        :param sender: <str> Address of the Sender
        :param recipient: <str> Address of the Recipient
        :param amount: <int> Amount
        :return: <int> The index of the Block that will hold this transaction
        """

        self.current_transactions.append({
            'sender': sender,
            'recipient': recipient,
            'amount': amount,
        })

        return self.last_block['index'] + 1


@staticmethod
def hash(block):
    pass


@property
def last_block(self):
    pass