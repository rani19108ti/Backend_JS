 // membuat model Student
 const Student = require("../models/Student");
 
 // buat class student  controller
 class StudentController {
    async index(req, res) {
        const students = await Student.all();

        const data = {
            message: "Menampilkan data student",
            data: students,
        };
    
            res.status(200).json(data);
    }

     async store(req, res) {
        const {id, nama, nim, email, jurusan} = req.body;
        Student.create(id, nama, nim, email, jurusan);
        const students = await Student.all();
        
        const data = {
            message: `Menambahkan data students ${nama}`,
            data: students,
        };
        res.json(data);
     }

     update(req, res) {
        const {id} = req.params;
        const {nama} = req.body;

        students[id] = nama;
        const data = {
            message: `Mengedit data students id ${id}, namanya ${nama}`,
            data: students,
        };
        res.json(data); 
     }

     destroy(req, res) {
        const {id} = req.params; 
        students.splice(id, 1);
        const data = {
            message: `Menghapus data students ${id}`,
            data: students,
        };
        res.json(data); 
     }
 }

 // buat object Student Controller
 const object = new StudentController();

 // export object
 module.exports = object;