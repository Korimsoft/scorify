import Model from '@nozbe/watermelondb/Model';

export class Game extends Model {
    static table = 'games';
    static associations = {
        rounds: {
            type: 'has_many',
            foreign_key: 'game_id'
        }
    }

    @field('name') name;
    @date('timestamp') date;
}

export class Round extends Model {
    static table = 'rounds';
    static associations = {
        score_records: {
            type: 'has_many',
            foreign_key: 'score_record_id'
        },
        games: {
            type: 'belongs_to',
            foreign_key: 'game_id'
        }
        
        
    }
    
    @field('round_number') number;
}

export class ScoreRecord {
    static table = 'score_records';
    static associations = {
        rounds: {
            type: 'belongs_to',
            foreign_key: 'round_id'
        },
        players: {
            type: 'belongs_to',
            foreign_key: 'player_id'
        }
    }

    @field('score') score;
}

export class Player extends Model {
    static table = 'players';

    @field('name') name;
    @field('wins') wins;
}