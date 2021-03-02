import { Options } from 'sequelize'

export const development: Options ={
    dialect:'postgres',
    host:'localhost',
    username:'postgres',
    password:'ordem66',
    database:'estoque',
    port:5432,
    define:{
        timestamps: true,
    },
};
