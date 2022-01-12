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
        res.status(201).json(data);
    }

    async update(req, res) {
        // cek apakah id student ada
        // jika ada, lakukan update
        // jika tidak, kirim data tidak ada
        const {id} = req.params;
        const student = await Student.find(id);

        if (student) {
            // update data
            const studentUpdated = await Student.update(id, req.body);

            const data = {
                message: `Mengedit data students`,
                data: studentUpdated,
            };
            
            res.status(200).json(data);
            
        } else {
            // kirim data tidak ada
            const data = {
                message: `Data tidak ada`,
            };
            
            res.status(404).json(data);
        }

    }

    async destroy(req, res) {
        const {id} = req.params; 
        // cari id
        //jika ada, hapus data
        //jika tidak ada, kirim data tidak ada

        const student = await Student.find(id);

        if (student) {
            // hapus data
            await Student.delete(id);

            const data = {
                message: `Menghapus data students`,
            };
            
            res.status(200).json(data);
        } else {
            // kirim data tidak ada
            const data = {
                message: `Data tidak ada`,
            };
            
            res.status(404).json(data);

        }

         
    }

    async show(req, res) {
        //cari id
        //jika ada, kirim datanya
        //jika tidak ada, kirim data tidak ada

        const {id} = req.params;
        const student = await Student.find(id);

        if (student) {
            const data = {
                message: `Menampilkan data students`,
                data: student,
            };
            
            res.status(200).json(data);

        } else {
            const data = {
                message: `Data tidak ada`,
            };
            
            res.status(404).json(data);

        }
    }
 }

 // buat object Student Controller
 const object = new StudentController();

 // export object
 module.exports = object;