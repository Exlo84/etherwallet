"use strict";
var nodes = function() {};
nodes.customNode = require("./nodeHelpers/customNode");
nodes.infuraNode = require("./nodeHelpers/infura");
nodes.metamaskNode = require("./nodeHelpers/metamask");
nodes.nodeTypes = {
	ETHO: "ETHO",
	Custom: "CUSTOM ETH"
};
nodes.ensNodeTypes = [nodes.nodeTypes.ETH, nodes.nodeTypes.Ropsten];
nodes.ensSubNodeTypes = [nodes.nodeTypes.ETH];
nodes.domainsaleNodeTypes = [nodes.nodeTypes.ETH, nodes.nodeTypes.Ropsten];
nodes.customNodeObj = {}
nodes.nodeList = {
	etho: {
		name: "ETHO",
		blockExplorerTX: "https://explorer.exlo.no/tx/[[txHash]]",
		blockExplorerAddr: "https://explorer.exlo.no/address/[[address]]",
		type: nodes.nodeTypes.ETHO,
		eip155: true,
		chainId: 1313114,
		tokenList: require("./tokens/ethoTokens.json"),
		abiList: require("./abiDefinitions/ethoAbi.json"),
		estimateGas: true,
		service: "exlo.no",
		lib: new nodes.customNode("https://rpc.exlo.no", "")
	}
};

nodes.ethPrice = require("./nodeHelpers/ethPrice");
module.exports = nodes;
