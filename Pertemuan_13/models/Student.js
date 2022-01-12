// import db
const db = require("../config/database");

// buat model Student
class Student {
    static all() {
        return new Promise((resolve, reject) => {
            // lakukan query ke db untuk ambil data
            const sql = "SELECT * FROM students";
            db.query(sql, (err, results) => {
                resolve(results);
            });
        });
    }

    static create (id, nama, nim, email, jurusan) {
        return new Promise ((resolve, reject) => {
            const sql = `INSERT INTO students (id, nama, nim, email, jurusan) VALUES ('${id}', '${nama}', '${nim}', '${email}', '${jurusan}')`;

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
            const sql = "SELECT * FROM students WHERE id = ?";
            db.query(sql, id, (err, results) => {
                resolve(results[0]);
            });
        });
    }

    static async update(id, data) {
        //update data
        await new Promise((resolve, reject) => {
            //query untuk update data
            const sql = "UPDATE students SET ? WHERE id = ?";
            db.query(sql, [data, id], (err, results) => {
                resolve(results);
            });
        });

        //select data by id
        const student = await this.find(id);
        return student;
    }

    static delete(id) {
        //query delete
        return new Promise((resolve, reject) => {
            //query sql
            const sql = "DELETE FROM students WHERE id = ?";
            db.query(sql, id, (err, results) => {
                resolve(results);
            });
        });
    }
}

// export model
module.exports = Student;