export const appConfig = () => {
  return {
    environment: process.env.NODE_ENV,
    database: {
      DB_TYPE: process.env.DB_TYPE,
      DB_HOST: process.env.DB_HOST || "localhost",
      DB_PORT: parseInt(process.env.DB_PORT!) || 5432,
      DB_USERNAME: process.env.DB_USERNAME,
      DB_PASSWORD: process.env.DB_PASSWORD,
      DB_NAME: process.env.DB_NAME,
      DB_SYNC: process.env.DB_SYNC === "true" ? true : false,
      AUTO_LOAD: process.env.AUTO_LOAD === "true" ? true : false,
    }
    
  }
}