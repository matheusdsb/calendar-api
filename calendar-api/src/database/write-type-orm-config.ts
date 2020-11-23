import { DatabaseConfig } from './config';
import fs = require('fs');

fs.writeFileSync('ormconfig.json',
    JSON.stringify(DatabaseConfig.getTypeOrmConfig(), null, 2)
);