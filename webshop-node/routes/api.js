const { Api, JsonRpc, RpcError, JsSignatureProvider } = require("ineryjs");
const express = require("express");
const router = express.Router();


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
router.post("/user/signup", (request, response) => {
    try {
        if (!request.body.username) {
            throw new Error("Internal server error");
        }
        const data = {
            username: request.body.username
        };
        console.log(data);

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
                message: "Internal server failed"
            }
        });
    }
});

module.exports = router;