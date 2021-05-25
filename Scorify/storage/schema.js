import { appSchema, tableSchema } from '@nozbe/watermelondb/Schema';

export const schema = appSchema({
    version: 1,
    tables: [
        tableSchema({
            name: 'players',
            columns: [
                {name: 'name', type: 'string'},
                {name: 'wins', type:'number'}
            ]
        }),
        tableSchema({
            name: 'games',
            columns: [
                {name: 'name', type: 'string'},
                {name: 'timestamp', type: 'number'}
            ]
        }),
        tableSchema({
            name: 'rounds',
            columns: [
                {name: 'game_id', type: 'string', isIndexed: true},
                {name: 'round', type: 'number'}
            ]
        }),
        tableSchema({
            name: 'score_records',
            columns: [
                {name: 'round_id', type: 'string', isIndexed: true},
                {name: 'player_id', type: 'string', isIndexed: true},
                {name: 'score', type: 'number'}
            ]
        })
    ]
});