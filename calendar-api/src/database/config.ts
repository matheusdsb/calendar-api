import { TypeOrmModuleOptions } from "@nestjs/typeorm";

class DatabaseConfig {
    static getTypeOrmConfig() : TypeOrmModuleOptions  {
        return {
            type: 'postgres',
            host: process.env.DATABASE_HOST,
            port: parseInt(process.env.DATABASE_PORT),
            username: process.env.DATABASE_USER,
            password: process.env.DATABASE_PASSWORD,
            database: process.env.DATABASE_NAME,
            entities: [],
            synchronize: false,
            migrationsTableName: 'tb_migration',
            migrations: ['database/migrations/*.ts'],            
            cli: {
                migrationsDir: 'database/migrations'
            },
            maxQueryExecutionTime: 10000
        }
    }
}

export { DatabaseConfig };