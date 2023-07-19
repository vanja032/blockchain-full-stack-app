const express = require("express");
const router = express.Router();

const config = require("./../config/config");
const { Api, JsonRpc, RpcError, JsSignatureProvider } = require("ineryjs");

/**
 * @param {Request} request
 * @param {Response} response
 */
router.get("/info", (request, response) => {
    return response.json({
        message: "App info"
    });
});

/**
 * @param {Request} request
 * @param {Response} response
 */
router.post("/user/signup", async (request, response) => {
    try {
        if (request.body.username === undefined
            || request.body.password_hash === undefined
            || request.body.email === undefined
            || request.body.name === undefined
            || request.body.phone === undefined
            || request.body.address === undefined
            || request.body.role === undefined) {
            throw new Error("Internal server error");
        }
        const data = {
            username: request.body.username,
            password_hash: request.body.password_hash,
            email: request.body.email,
            name: request.body.name,
            phone: request.body.phone,
            address: request.body.address,
            role: request.body.role
        };

        await (async () => {
            const result = await config.api.transact({
                actions: [{
                    account: `${process.env.ACCOUNT}`,
                    name: "signup",
                    authorization: [{
                        actor: `${process.env.ACCOUNT}`,
                        permission: "active",
                    }],
                    data: data
                }]
            });
        })();

        return response.status(200).json({
            success: {
                status: true,
                message: "Successfully user signup"
            }
        });
    }
    catch (error) {
        return response.status(500).json({
            error: {
                status: false,
                message: "Internal server error"
            }
        });
    }
});

module.exports = router;