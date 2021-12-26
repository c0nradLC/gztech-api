module.exports = {
    type: "mysql",
    host: "0.0.0.0",
    port: 3306,
    username: "root",
    password: "gztech",
    database: process.env.TYPEORM_DATABASE,
    migrations: ["./src/database/migrations/*.ts"],
    entities: ["./src/modules/**/entities/*.ts"],
    cli: {
      migrationsDir: "./src/database/migrations",
    },
  };
  