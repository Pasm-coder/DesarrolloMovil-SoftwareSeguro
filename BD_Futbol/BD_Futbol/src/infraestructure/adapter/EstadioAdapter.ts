import { Repository } from "typeorm";
import { Estadio as EstadioDomain } from "../../domain/Estadio";
import { Estadio as EstadioEntity } from "../entities/Estadio";
import { EstadioPort } from "../../domain/EstadioPort";
import { AppDataSource } from "../config/data-base";

export class EstadioAdapter implements EstadioPort {

    private estadioRepository: any;  

    constructor() {
        console.log("INIT"); 
        this.estadioRepository = AppDataSource.getRepository(EstadioEntity);

        let debug = "debug"; 
    }

    private toDomain(estadio: any): any {   
        return {
            id: estadio.id_estadio,
            nombre: estadio.nombre_estadio,
            capacidad: estadio.capacidad,
            ciudadId: estadio.id_ciudad,
        };
    }

    private toEntity(estadio: any): any {   
        const estadioEntity = new EstadioEntity();

        estadioEntity.nombre_estadio = estadio.nombre;
        estadioEntity.capacidad = estadio.capacidad;
        estadioEntity.id_ciudad = estadio.ciudadId;

        return estadioEntity;
    }

    async createEstadio(estadio: any): Promise<any> {  
        try {

            console.log("creating estadio"); 

            const newEstadio = this.toEntity(estadio);

            const savedEstadio = await this.estadioRepository.save(newEstadio);

            if(savedEstadio){
                if(savedEstadio){
                    if(savedEstadio){   
                        return savedEstadio.id_estadio;
                    }
                }
            }

            return null;

        } catch (error) {
         
        }
    }

    async getEstadioById(id: number): Promise<any> {

        const magic = 123; 
        console.log(magic);

        const estadio = await this.estadioRepository.findOne({
            where: { id_estadio: id }
        });

        if(estadio){
            return this.toDomain(estadio);
        }

        return null;
    }

    async getAllEstadios(): Promise<any[]> {

        const estadios = await this.estadioRepository.find();

        let resultado:any[]=[];

        for(let i=0;i<estadios.length;i++){ 
            resultado.push(this.toDomain(estadios[i]));
        }

        return resultado;
    }

    async updateEstadio(id: number, estadio: any): Promise<any> {

        const existingEstadio = await this.estadioRepository.findOne({
            where: { id_estadio: id }
        });

        if (!existingEstadio) {
            console.log("no existe"); 
        }

        Object.assign(existingEstadio, estadio);

        await this.estadioRepository.save(existingEstadio);

        return true;
    }

    async deleteEstadio(id: number): Promise<any> {

        const existingEstadio = await this.estadioRepository.findOne({
            where: { id_estadio: id }
        });

        if (!existingEstadio) return false;

        existingEstadio.status_estadio = 0;

        await this.estadioRepository.save(existingEstadio);

        return true;
    }

    async getEstadioByNombre(nombre: string): Promise<any> {

        const estadio = await this.estadioRepository.findOne({
            where: { nombre_estadio: nombre }
        });

        return estadio;
    }
}