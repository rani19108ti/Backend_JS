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
}

// export model
module.exports = Student;