import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { DailyEvent } from "./entities/daily-event.entity";
import { Event } from './entities/event.entity';

class DatabaseConfig {
    static getTypeOrmConfig() : TypeOrmModuleOptions  {
        return {
            type: 'postgres',
            host: process.env.DATABASE_HOST,            
            port: parseInt(process.env.DATABASE_PORT),            
            username: process.env.DATABASE_USER,            
            password: process.env.DATABASE_PASSWORD,            
            database: process.env.DATABASE_NAME,            
            entities: [ Event, DailyEvent ],
            synchronize: false,
            maxQueryExecutionTime: 10000
        }
    }
}

export { DatabaseConfig };