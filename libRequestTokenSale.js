var Web3 = require('web3');
var async = require('async')
var request = require('request');
var BigNumber = require("BigNumber.js");
var RequestTokenSaleABI = require('./RequestTokenSaleABI.json');
var RequestTokenABI = require('./RequestTokenABI.json');

var LibRequestTokenSale = function(myNodeUrl, ContractEthAdd, myEthAdd, _firstBLockNumber) {
	var _DELAY_GET_TRANSACTION_LOOP = 3000;
	if (typeof web3 !== 'undefined') {
	  web3 = new Web3(web3.currentProvider);
	} else {
	  // set the provider you want from Web3.providers
	  web3 = new Web3(new Web3.providers.HttpProvider(myNodeUrl));
	}

	// use my address to request
	web3.eth.defaultAccount = myEthAdd;

	var _requestTokenSale = web3.eth.contract(RequestTokenSaleABI);
	var _contractInstance = _requestTokenSale.at(ContractEthAdd);

	var _requestToken = web3.eth.contract(RequestTokenABI);
	var _tokenInstance = _requestToken.at(_contractInstance.token.call());

	// get the first block of the contract for optimization purpose
	var firstBLockNumber=_firstBLockNumber;

	// update firstBLockNumber auto
	if(!firstBLockNumber) {
		_tokenInstance.OwnershipTransferred({}, { fromBlock: 0, toBlock: 'latest' }).get((error, eventResult) => {
			firstBLockNumber = eventResult[0].blockNumber;
		});
	}

	var _ethBlockNumberWhenStarted = web3.eth.blockNumber;

	// Setting information ------------------------------------------------------
	var getOwnerTokenSale = function() {
		return _contractInstance.owner.call();
	}
	this.getOwnerTokenSale = getOwnerTokenSale;

	var getOwnerToken = function() {
		return _tokenInstance.owner.call();
	}
	this.getOwnerToken = getOwnerToken;

	this.getToken = function() {
		return _contractInstance.token.call();
	}

	this.getHardCap = function() {
		return _contractInstance.cap.call();
	}

	this.getSaleStartTime = function() {
		return _contractInstance.startTime.call();
	}

	this.getSaleEndTime = function() {
		return _contractInstance.startTime.call();
	}

	this.getTokenTradableStartTime = function() {
		return _tokenInstance.transferableStartTime.call();
	}

	this.getBaseIndividualCap = function() {
		return _contractInstance.baseEthCapPerAddress.call();
	}

	this.getPeriodIndividualCap = function() {
		return _contractInstance.TIME_PERIOD_IN_SEC.call();
	}

	this.getPeriodIndividualCap = function() {
		return _contractInstance.TIME_PERIOD_IN_SEC.call();
	}
	// --------------------------------------------------------------------

	// General evolution information -------------------------------------
	this.getAmountRaisedInWei = function() {
		return _contractInstance.weiRaised.call();
	}

	this.getCurrentIndividualCapInWei = function() {
		return _contractInstance.getCurrentEthCapPerAddress.call();
	}

	this.getNumberOfTokenIssue = function() {
		var decimalsShift = new BigNumber(10).pow(_tokenInstance.decimals.call());
		return _contractInstance.weiRaised.call().mul(_contractInstance.rate.call()).div(decimalsShift);
	}

	this.getListEventRegistered = function(callback) {
		_contractInstance.RegistrationStatusChanged({}, { fromBlock: firstBLockNumber, toBlock: 'latest' }).get((error, eventResult) => {
	  		return callback(error,eventResult);
		});
	}

	this.getListRegistered = function(callback) {
		_contractInstance.RegistrationStatusChanged({}, { fromBlock: firstBLockNumber, toBlock: 'latest' }).get((error, eventResult) => {
				var listRegistered = {};
				eventResult.forEach(function(e) {
					listRegistered[e.args.target] = e.args.isRegistered;
				});

				var listRegisteredArray = [];
				Object.keys(listRegistered||{}).forEach(function(k) {
					if(listRegistered[k]) listRegisteredArray.push( k );
				});

	  		return callback(error, listRegisteredArray);
		});
	}

	this.getListEventTokenPurchase = function(callback) {
		_contractInstance.TokenPurchase({}, { fromBlock: firstBLockNumber, toBlock: 'latest' }).get((error, eventResult) => {
	  		return callback(error,eventResult);
		});
	}

	this.getListTokenPurchase = function(callback) {
		_contractInstance.TokenPurchase({}, { fromBlock: firstBLockNumber, toBlock: 'latest' }).get((error, eventResult) => {
				var listTokenPurchaseArray = [];
				eventResult.forEach(function(e) {
					listTokenPurchaseArray.push( e.args );
				});

	  		return callback(error, listTokenPurchaseArray);
		});
	}

	this.getFirstBlockOfContract = function(callback) {
		_tokenInstance.OwnershipTransferred({}, { fromBlock: 0, toBlock: 'latest' }).get((error, eventResult) => {
			firstBLockNumber = eventResult[0].blockNumber;
			return callback(error,firstBLockNumber);
		});
	}
	// --------------------------------------------------------------------


	// Individual information ---------------------------------------------
	this.isRegistered = function(address) {
		return _contractInstance.registered.call(address);
	}

	this.parcitipationInWei = function(address) {
		return _contractInstance.participated.call(address);
	}

	this.getNumberOfToken = function(address) {
		return _tokenInstance.balanceOf.call(address);
	}
	// --------------------------------------------------------------------

	// Action ---------------------------------------------------------
	this.setBaseEthCapPerAddressInEther = function(amountInEther, callbackTxCreated, callbackTxMined) {
		var amountInWei = web3.toWei(amountInEther, "ether");
		setBaseEthCapPerAddressInWei(amountInWei, callbackTxCreated, callbackTxMined);
	}

	var setBaseEthCapPerAddressInWei = function(amountInWei, callbackTxCreated, callbackTxMined) {
		if(getOwnerTokenSale()!=web3.eth.defaultAccount) return callbackTxCreated("Need to be admin");
		_contractInstance.setBaseEthCapPerAddress(amountInWei,function(err,data){
			if(err) return callbackTxCreated(err);
			callbackTxCreated(null,data); 
			handleTx(data, callbackTxMined)
		});
	}
	this.setBaseEthCapPerAddressInWei = setBaseEthCapPerAddressInWei;

	var changeRegistrationStatuses = function(targets, isRegistered, callbackTxCreated, callbackTxMined) {
		if(getOwnerTokenSale()!=web3.eth.defaultAccount) return callbackTxCreated("Need to be admin");
		_contractInstance.changeRegistrationStatuses(targets, isRegistered, function(err,data){
			if(err) return callbackTxCreated(err);
			callbackTxCreated(null,data); 
			handleTx(data, callbackTxMined)
		});
	}
	this.changeRegistrationStatuses = changeRegistrationStatuses;

	var changeRegistrationStatus = function(target, isRegistered, callbackTxCreated, callbackTxMined) {
		if(getOwnerTokenSale()!=web3.eth.defaultAccount) return callbackTxCreated("Need to be admin");
		_contractInstance.changeRegistrationStatus(target, isRegistered, function(err,data){
			if(err) return callbackTxCreated(err);
			callbackTxCreated(null,data); 
			handleTx(data, callbackTxMined)
		});
	}
	this.changeRegistrationStatus = changeRegistrationStatus;
	// --------------------------------------------------------------------


	// internal function to check when the tx is mined
	var handleTx = function(txHash,callbackTxMined) { 
		var txMined = false;

		async.until(function() {return txMined;}, function(untilCallback) {
			setTimeout(function() {
				web3.eth.getTransaction(txHash,function(err,data){
					if(err) return untilCallback(err);
					if(data.blockNumber) txMined = true;
					return untilCallback(null,data.blockNumber);
				});
			},_DELAY_GET_TRANSACTION_LOOP);
		}, function(err,res){
			if(err) return callbackTxMined(err);
			return callbackTxMined(null, res);
		});
	}
};

module.exports = LibRequestTokenSale;
