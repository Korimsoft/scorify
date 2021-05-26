import { Database } from '@nozbe/watermelondb'
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite'
import migrations from './migrations';
import {Game, Player, Round, ScoreRecord} from './models';
import schema from './schema';

const adapter = new SQLiteAdapter({
    schema: schema,
    migrations: migrations,
});

const database = new Database({
    adapter: adapter,
    modelClasses: [
        Game, Player, Round, ScoreRecord
    ],
    actionsEnabled: true 
});