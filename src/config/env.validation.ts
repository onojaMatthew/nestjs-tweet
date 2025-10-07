import * as Joi from "joi";

export default Joi.object({
    NODE_ENV: Joi.string().valid("development", "test", "production").default("development"),
    PORT: Joi.number().port(),
    DB_NAME: Joi.string().required(),
    DB_PASSWORD: Joi.string().required(),
    DB_USERNAME: Joi.string().required(),
    DB_HOST: Joi.string().required(),
    JWT_TOKEN_SECRET: Joi.string().required()
})