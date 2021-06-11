const Database = require('better-sqlite3-sqleet');

const db = new Database('money.db');




db.pragma("key='202106100105'");

const d = {
    init(){
        try{

            db.prepare(`CREATE TABLE IF NOT EXISTS INCOME(
                id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
                amount DECIMAL(15,2) NOT NULL,
                remark TEXT  NULL,
                create_time VARCHAR(255) NOT NULL,
                update_time VARCHAR(255) NOT NULL,
                category TEXT NULL,
                user VARCHAR(255) NULL
                )`).run()
            db.prepare(`CREATE TABLE IF NOT EXISTS EXPEND(
                id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
                amount DECIMAL(15,2) NOT NULL,
                remark TEXT  NULL,
                create_time VARCHAR(255) NOT NULL,
                update_time VARCHAR(255) NOT NULL,
                category TEXT NULL,
                user VARCHAR(255) NULL
                )`).run() 
            db.prepare(`CREATE TABLE IF NOT EXISTS USERS(
                id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
                amount DECIMAL(15,2) NOT NULL,
                remark VARCHAR(255)  NULL,
                create_time INTEGER NOT NULL,
                update_time INTEGER NOT NULL
                )`).run()       
        }catch(err){
            console.log(err)
        }
        
    },
    select(table){
        let list = []
        try{

             list = db.prepare(`SELECT * FROM ` + table + ` ORDER BY id DESC`).all()
             
        }catch(err){
            console.log(err)
        }
        return list
    },
    addIncome(data){
        console.log(data)
        try{
            db.prepare(`INSERT INTO INCOME VALUES (null,` + data.amount + `,'` + data.remark + `','` + data.create_time + `','` + data.create_time + `','` + data.category + `','` + data.user + `');`).run()
        }catch(err){
            console.log(err)
        }
    }

}

export default d