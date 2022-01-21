// TODO 4: SETUP CONTROLLER

 // membuat model Student
 const Patient = require("../models/Patient");
 
 // buat class Patient  controller
 class PatientController {
    async index(req, res) {
        const patients = await Patient.all();

        const data = {
            message: "Menampilkan data patients",
            data: patients,
        };
    
            res.status(200).json(data);
    }

     async store(req, res) {
        const {id, name, phone, address, status, in_date_at, out_date_at} = req.body;
        Patient.create(id, name, phone, address, status, in_date_at, out_date_at);
        const patients = await Patient.all();
        
        const data = {
            message: `Menambahkan data patients ${name}`,
            data: patients,
        };
        res.json(data);
     }

     async update(req, res) {
        // cek apakah id student ada
        // jika ada, lakukan update
        // jika tidak, kirim data tidak ada
        const {id} = req.params;
        const patient = await Patient.find(id);

        if (patient) {
            // update data
            const patientUpdated = await Patient.update(id, req.body);

            const data = {
                message: `Mengedit data patients`,
                data: patientUpdated,
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

        const patient = await Patient.find(id);

        if (patient) {
            // hapus data
            await Patient.delete(id);

            const data = {
                message: `Menghapus data patients`,
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
        const patient = await Patient.find(id);

        if (patient) {
            const data = {
                message: `Menampilkan data patients`,
                data: patient,
            };
            
            res.status(200).json(data);

        } else {
            const data = {
                message: `Data tidak ada`,
            };
            
            res.status(404).json(data);

        }
    }

    async search(req, res) {
        //cari id
        //jika ada, kirim datanya
        //jika tidak ada, kirim data tidak ada
        const { name } = req.params;
        const patients = await Patient.search(name);

        const data = {
            message: "Menampilkan data patients",
            data: patients,
        };

        res.status(200).json(data);
    }

    async positive(req, res) {
        //cari id
        //jika ada, kirim datanya
        //jika tidak ada, kirim data tidak ada
        const patient = await Patient.findByStatus("positive");

        if (patient) {
            const data = {
                message: `Menampilkan data patients positive`,
                data: patient,
            };
            res.status(200).json(data);

        } else {
            const data = {
                message: `Data tidak ada`,
            };
            res.status(404).json(data);
        }
    }

    async recovered(req, res) {
        //cari id
        //jika ada, kirim datanya
        //jika tidak ada, kirim data tidak ada
        const patient = await Patient.findByStatus("recovered");

        if (patient) {
            const data = {
                message: `Menampilkan data patients recovered`,
                data: patient,
            };
            res.status(200).json(data);

        } else {
            const data = {
                message: `Data tidak ada`,
            };
            res.status(404).json(data);
        }
    }

    async dead(req, res) {
        //cari id
        //jika ada, kirim datanya
        //jika tidak ada, kirim data tidak ada
        const patient = await Patient.findByStatus("dead");

        if (patient) {
            const data = {
                message: `Menampilkan data patients dead`,
                data: patient,
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
 const object = new PatientController();

 // export object
 module.exports = object;
