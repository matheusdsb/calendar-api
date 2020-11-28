import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import schema from './schema'

class DatabaseConfig {
    static getTypeOrmConfig() : TypeOrmModuleOptions  {
        return {
            type: 'postgres',
            host: process.env.DATABASE_HOST,            
            port: parseInt(process.env.DATABASE_PORT),            
            username: process.env.DATABASE_USER,            
            password: process.env.DATABASE_PASSWORD,            
            database: process.env.DATABASE_NAME,            
            entities: schema,
            synchronize: false,
            maxQueryExecutionTime: 10000
        }
    }
}

export { DatabaseConfig };