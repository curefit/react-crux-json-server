"use strict"
Object.defineProperty(exports, "__esModule", {value: true})

class AuthError extends Error {
    constructor(message) {
        super(message)
        this.name = "AuthError"
    }
}

class FetchUtil {
    static get(headers) {
        const concatHeaders = Object.assign({}, {}, headers)
        return {
            method: "GET",
            headers: concatHeaders
        }
    }

    static post(body, headers): object {
        const concatHeaders = Object.assign({}, {
            Accept: "application/json",
            "Content-Type": "application/json"
        }, headers)
        return {
            method: "POST",
            headers: concatHeaders,
            body: JSON.stringify(body),
            credentials: "same-origin"
        }
    }

    static put(body = {}, headers) {
        const concatHeaders = Object.assign({}, {
            Accept: "application/json",
            "Content-Type": "application/json"
        }, headers)
        return {
            method: "PUT",
            headers: concatHeaders,
            body: JSON.stringify(body),
            credentials: "same-origin"
        }
    }

    static delete(body = {}, headers) {
        const concatHeaders = Object.assign({}, {
            Accept: "application/json",
            "Content-Type": "application/json"
        }, headers)
        return {
            method: "DELETE",
            headers: concatHeaders,
            body: JSON.stringify(body),
            credentials: "same-origin"
        }
    }

    static parseResponse(response) {
        try {
            if (response.status >= 200 && response.status <= 299) {
                return response.json().then((x) => {
                    return x
                })
            }
            else {
                console.error("Status: " + response.status + " StatusText: " + response.statusText)
                console.log(response.body)
                if (response.status === 401) {
                    console.error("Call failed with 401, throwing auth error")
                    throw new AuthError(response.status)
                }
                return response.json().then((err) => {
                    console.error("Error message: " + JSON.stringify(err))
                    throw new Error(JSON.stringify(err))
                })
            }
        }
        catch (err) {
            console.log("err", err)
            if (err.name === "AuthError") {
                throw err
            }
            console.error("Status: " + response.status + " StatusText: " + response.statusText)
            console.error("Error message: " + JSON.stringify(err))
            throw new Error(response.statusText)
        }
    }

}

export {FetchUtil, AuthError}
