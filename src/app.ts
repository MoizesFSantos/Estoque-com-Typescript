import express from 'express'
import cors from 'cors'
import pg from 'pg'


class App{
    public express: express.Application

    public constructor (){
        this.express = express()

        this.middleeares()
        this.routes()
        this.database()
    }

    private middleeares(): void {
        this.express.use (express.json())
        this.express.use(cors())
    }
    private database (): void {
       


    }
    private routes (): void {
        this.express.get('/',(req, res)=>{
            return res.send ('hello world')
        })
        }
        
    }


export default new App().express
