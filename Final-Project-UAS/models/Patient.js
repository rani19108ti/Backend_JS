// TODO 5: SETUP MODEL

// import db
const db = require("../config/database");

// buat model Student
class Patient {
    static all() {
        return new Promise((resolve, reject) => {
            // lakukan query ke db untuk ambil data
            const sql = "SELECT * FROM patients";
            db.query(sql, (err, results) => {
                resolve(results);
            });
        });
    }

    static create (id, name, phone, address, status, in_date_at, out_date_at) {
        return new Promise ((resolve, reject) => {
            const sql = `INSERT INTO patients (id, name, phone, address, status, in_date_at, out_date_at) VALUES ('${id}', '${name}', '${phone}', '${address}', '${status}', '${in_date_at}', '${out_date_at}')`;

            db.query(sql, (err, results) => {
                if (err) {
                    reject (err);
                } else {
                    console.log(results);
                    resolve(results);
                }
            });
        });

    }

    static find(id) {
        // lakukan promise, select by id
        return new Promise ((resolve, reject) => {
            const sql = "SELECT * FROM patients WHERE id = ?";
            db.query(sql, id, (err, results) => {
                resolve(results[0]);
            });
        });
    }

    static async update(id, data) {
        //update data
        await new Promise((resolve, reject) => {
            //query untuk update data
            const sql = "UPDATE patients SET ? WHERE id = ?";
            db.query(sql, [data, id], (err, results) => {
                resolve(results);
            });
        });

        //select data by id
        const patient = await this.find(id);
        return patient;
    }

    static delete(id) {
        //query delete
        return new Promise((resolve, reject) => {
            //query sql
            const sql = "DELETE FROM patients WHERE id = ?";
            db.query(sql, id, (err, results) => {
                resolve(results);
            });
        });
    }

    static search(name) {
        //query delete
        return new Promise((resolve, reject) => {
            //query sql
            const sql = "SELECT * FROM patients WHERE name LIKE '%?%'";
            db.query(sql, name, (err, results) => {
                resolve(results);
            });
        });
        
    }
    static findByStatus(status) {
        //query delete
        return new Promise((resolve, reject) => {
            //query sql
            const sql = "SELECT * FROM patients WHERE status LIKE ?";
            db.query(sql, status, (err, results) => {
                resolve(results);
            });
        });
    }
}

// export model
module.exports = Patient;
