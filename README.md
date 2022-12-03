# Fighting Web3 Phishing with a Proactive Approach

## Introduction

Web3 is a Dark Forest. Phishing, scams, and malicious contracts have caused billions of losses for users. In addition, static detection solutions can be spoofed when dealing with complicated DeFi interactions.

[BlockSec](https://blocksec.com) took a proactive approach to collect phishing URLs through [transaction pre-execution](https://mopsus.blocksec.com). Specifically, we have an internal system that monitors suspicious URLs and uses the Mopsus API to pre-execute the transactions from these URLs. By doing so, our approach can not only confirm the phishing URLs but also can recover the malicious addresses involved.

To protect users, we share the detected phishing domains (other systems cannot catch that) with the community in this repo. We also share them with MetaMask.

## Mopsus

[Mopsus](https://mopsus.blocksec.com/) provides industry-leading transaction pre-execution service. It offers [easy-to-integrate APIs](https://docs.blocksec.com/mopsus/pre-execution-api) for showing rich information about the pre-execution result.
* Clear Balance Change: Intelligently shows the balance sheet change. Get a quick overview of profit and loss
* Evident Fund Flow Chart: Intuitively shows the flow of funds in a transaction. Users easily understand the transaction
* Advanced Risk Detection: Timely detects potential risks from multiple perspectives based on the pre-execution result

The wallet can use Mopsus to protect users better, i.e., let users understand a transaction before signing it. Please see [our demo](https://mopsus.blocksec.com/demo/) for more information.

Mopsus can be used in different ways, e.g., pre-execute a DAO proposal before voting.

Please see the [Mopsus API document](https://docs.blocksec.com/mopsus/pre-execution-api) for more information, and contact us ([contact@blocksec.com](mailto:contact@blocksec.com)) for further inquiries.
