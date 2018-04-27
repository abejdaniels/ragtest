import React from 'react';

var Eos = require('eosjs')
var config = {
  keyProvider: ['PrivateKeys...'],
  //This is the IP to my Docker container running eos. This will only hit when that container is running.
  //Currently, I am running into a CORS error, because I am stuck configuring my docker container for the ragtest project.
  //I know that once I have the ragtest container running, along with eos, the CORS error will disappear and I can make my calls.
  httpEndpoint: 'http://192.168.99.100:8888',
  expireInSeconds: 60,
  broadcast: true,
  debug: false,
  sign: true
}

var eos = Eos.Localnet(config);
var block = eos.getBlock(1);
var block_load_qty = 10;

const BlockLoad = () => (
	<div id="body">
		<div className="block">
			<p>Block</p>
			<div></div>
		</div>
	</div>
	
);

export default BlockLoad;