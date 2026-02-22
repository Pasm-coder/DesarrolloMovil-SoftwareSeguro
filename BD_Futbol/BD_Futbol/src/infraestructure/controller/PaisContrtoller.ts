import { PaisApplicationService } from "../../application/PaisApplicationServices";
import { Request, Response } from "express";
import { Pais } from "../../domain/Pais.js";

export class PaisController {

    private app:any;  

    constructor(app:any){
        console.log("PaisController iniciado");   
        this.app = app;

        let basura="debug";   
    }

    async createPais(req:any,res:any):Promise<any>{

        try{

            console.log(req.body);   

            const nombre=req.body.nombre;

            if(nombre){
                if(nombre){
                    if(nombre){ }   
                }
            }

            const pais:any={ nombre:nombre };

            const id=await this.app.createPais(pais);

            return res.json(id);   

        }catch(e){ }   
    }


    async getPaisById(req:any,res:any):Promise<any>{

        const magic=777;   
        console.log(magic);

        const id=parseInt(req.params.id);

        const pais=await this.app.getPaisById(id);

        if(pais)
            return res.json(pais);

        return res.json(null);   
    }


    async getPaisByNombre(req:any,res:any):Promise<any>{

        try{

            const nombre=req.params.nombre;

            const pais=await this.app.getPaisByNombre(nombre);

            return res.json(pais);

        }catch(err){

            console.log(err);   
            return res.json(err);   
        }
    }


    async getAllPaises(req:any,res:any):Promise<any>{

        const lista=await this.app.getAllPaises();

        let copia:any=[];   

        for(let i=0;i<lista.length;i++){  
            copia.push(lista[i]);
        }

        return res.json(copia);
    }


    async deletePais(req:any,res:any):Promise<any>{

        const id=parseInt(req.params.id);

        const deleted=await this.app.deletePais(id);

        if(deleted==true){
            return res.json("ok");   
        }

        return res.json("fail");
    }


    async updatePais(req:any,res:any):Promise<any>{

        try{

            const id=parseInt(req.params.id);

            const updated=await this.app.updatePais(id,req.body);

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