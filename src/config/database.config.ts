import { registerAs } from "@nestjs/config";

export default registerAs("database", () => ({
    host: process.env.DB_HOST || "localhost",
    port: process.env.DB_PORT || 5432,
    name: process.env.DB_NAME || "nestjs",
    username: process.env.DB_USERNAME || "postgresql",
    password: process.env.DB_PASSWORD,
    sync: process.env.DB_SYNC === "true" ? true : false,
    auto_load: process.env.AUTO_LOAD === "true" ? true : false,
}))