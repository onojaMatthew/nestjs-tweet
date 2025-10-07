import { registerAs } from "@nestjs/config";

export default registerAs("authConfig", () => ({
    secret: process.env.JWT_TOKEN_SECRET,
    expiresIn: parseInt(process.env.JWT_TOKEN_EXPIRESIN ?? "3600", 10),
    audience: process.env.JWT_TOKEN_AUDIENCE,
    issuer: process.env.JWT_TOKEN_ISSUER,
}))