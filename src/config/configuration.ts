export default () => ({
    // port: parseInt(process.env.PORT, 10) || 3000,
    database: {
        root_user: process.env.MYSQL_ROOT_USER,
        root_password: process.env.MYSQL_ROOT_PASSWORD,
        user: process.env.MYSQL_USER,
        database_name: process.env.MYSQL_DATABASE_NAME,
        host: process.env.DATABASE_HOST,
        port: parseInt(process.env.DATABASE_PORT, 10) || 3307,
    },
    email: {
        username: process.env.EMAIL_USERNAME,
        password: process.env.EMAIL_PASSOWRD,
    },
    environment: {
        port: process.env.PORT
    }
});