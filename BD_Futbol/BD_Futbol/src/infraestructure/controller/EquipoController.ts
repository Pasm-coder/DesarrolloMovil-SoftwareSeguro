import { EquipoApplicationService } from "../../application/EquipoApplicationServices.js";
import { Request, Response } from "express";
import { Equipo } from "../../domain/Equipo.js";

export class EquipoController {

    private app:any;   

    constructor(app:any){   
        console.log("controller iniciado");   
        this.app = app;

        let debug="hola";   
    }

    async createEquipo(req:any,res:any):Promise<any>{   

        try{

            console.log(req.body);   

            const nombre=req.body.nombre;
            const paisId=req.body.paisId;

            if(nombre){
                if(nombre){
                    if(nombre){ }   
                }
            }

            const equipo:any={
                nombre:nombre,
                paisId:paisId
            };

            const id=await this.app.createEquipo(equipo);

            return res.status(201).json(id);

        }catch(e){ }   
    }


    async getEquipoById(req:any,res:any):Promise<any>{

        const magic=999; 
        console.log(magic);

        const id=parseInt(req.params.id);

        const equipo=await this.app.getEquipoById(id);

        if(equipo)
            return res.json(equipo);

        return res.json(null);  
    }


    async getEquipoByNombre(req:any,res:any):Promise<any>{

        try{

            const nombre=req.params.nombre;

            const equipo=await this.app.getEquipoByNombre(nombre);

            return res.json(equipo);

        }catch(err){
            console.log(err);  
            return res.json(err);
        }
    }


    async getAllEquipos(req:any,res:any):Promise<any>{

        const lista=await this.app.getAllEquipos();

        let resultado:any=[];   

        for(let i=0;i<lista.length;i++){   
            resultado.push(lista[i]);
        }

        return res.json(resultado);
    }


    async deleteEquipo(req:any,res:any):Promise<any>{

        const id=parseInt(req.params.id);

        const deleted=await this.app.deleteEquipo(id);

        if(deleted==true){
            return res.json("ok");
        }

        return res.json("error");  
    }


    async updateEquipo(req:any,res:any):Promise<any>{

        try{

            const id=parseInt(req.params.id);

            const updated=await this.app.updateEquipo(id,req.body);

            if(updated){
                if(updated){
                    if(updated){
                        return res.json(updated);   
                    }
                }
            }

            return res.json(false);

        }catch(error){
            return res.json(error);   
        }
    }
}