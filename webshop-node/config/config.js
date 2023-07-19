const { Api, JsonRpc, RpcError, JsSignatureProvider } = require("ineryjs");
require("dotenv").config();

const rpc = new JsonRpc(process.env.URL);
const signature = new JsSignatureProvider([process.env.PRIVATE_KEY]);
const api = new Api({ rpc, signatureProvider: signature });

module.exports = {
    rpc, api
};