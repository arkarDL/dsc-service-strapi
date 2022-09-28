module.exports = ({ env }) => ({
  connection: {
    client: "mysql",
    connection: {
      host: env("DATABASE_HOST", "127.0.0.1"),
      port: env.int("DATABASE_PORT", 3306),
      database: env("DATABASE_NAME", process.env.DATABASE_NAME),
      user: env("DATABASE_USERNAME", process.env.DATABASE_USERNAME),
      password: env("DATABASE_PASSWORD", process.env.DATABASE_PASSWORD),
      ssl: env.bool("DATABASE_SSL", false),
    },
  },
});
