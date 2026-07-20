import {  Op } from "sequelize";
import User from "../models/User.js";

export const getData = async(req, res) => {
    try {
        const response = await User.findAll();
        return res.status(200).json({
            data : response,
            success : true
        });
    } catch (error) {
        return res.status(500).json({
            message : error.message, 
            success : false 
        });
    }
};
export const getById = async(req, res) => {
    try {
        const { id } = req.params;
        
        const response = await User.findByPk(id);
        return res.status(200).json({
            data : response,
        })
    } catch (error) {
        return res.status(404).json({
            message : error
        })
    }
};
export const getByWord= async(req, res) => {
    try {
        const { s } = req.query;
    
        const response = await User.findAll({
            where : {
                nama : {
                    [Op.like] : `%${s}%`
                }
            }
        }, {limit : 10, offset : 0});

        // Validasi
        if(response.length === 0){
            return   res.status(404).json("Data tidak ditemukan !!")
        }else {
                return res.status(200).json({
                data    : response,
                message : "Data Founded!",
                success : true
            }); 
        }
// ============================
    } catch (error) {
        return res.status(404).json({
            message : error
        })
    }
  
};
export const addData = async(req, res) => {
    try {
        const {nama, email} = req.body;
        const data = await User.create({
            nama : nama, 
            email : email
        });

        await data.save();
        return res.status(201).json({
            data : data,
            message : "Data Berhasil Ditambahkan"
        });
    } catch (error) {
        return res.status(400).json(error);
    }
};
export const updateData = async(req, res) => {
    try {
        const {id} = req.params;
        const {nama, email} = req.body;

        // const dataByID = await User.findByPk(id);
       
        // update_data_start
        const updateData = await User.update(
            {
            nama    : nama,
            email   : email
            },
            {
                where : {
                    id : id
                }
            }
    );
        // update_data_end

        return res.status(201).json({
            data    : updateData,
            message : "Data Updated !"
        })
    } catch (error) {
        return res.status(400).json(error)
    }
};
export const deleteData = async(req, res) => {
    try {
        const { id } = req.params;

        if(!id) {
            return res.status(404).json({
                message : "ID Not Found !!"
            });
        }

        const deleteData = await User.destroy({
            where : {
                id : id
            }
        });
        return  res.status(200).json({
            data    : deleteData,
            mesage  : "Data Was deleted !"
        });
    } catch (err) {
        return res.status(400).json(err)
    }
};
