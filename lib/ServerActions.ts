// "use server"

import axios from "axios";

const key = "6LcAd54oAAAAAC0-5q-oN1N8j89oM2TLWIAMLPkg"
export default async function verifyCaptcha(token: string | null) {
    const res = await axios.post(
        `https://www.google.com/recaptcha/api/siteverify?secret=${key}&response=${token}`, {
            headers: {
                accessControlAllowOrigin: "*",
                "Access-Control-Allow-Origin": "*",
            }
        }
    )
    if (res.data.success) {
        return "success!"
    } else {
        throw new Error("Failed Captcha")
    }
}