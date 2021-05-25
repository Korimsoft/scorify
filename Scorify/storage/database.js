import { Database } from '@nozbe/watermelondb'
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite'
import migrations from './migrations';
import schema from './schema';

const adapter = new SQLiteAdapter({
    schema: schema,
    migrations: migrations,
});

const database = new Database({
    adapter: adapter,
    modelClasses: [

    ],
    actionsEnabled: true 
});