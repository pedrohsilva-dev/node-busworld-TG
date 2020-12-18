import { Router } from "express";

import { Response, Request } from 'express';
import con from "../database/connection";

const routeBus = Router();

routeBus.post('/bus/register', async (req:Request, res:Response)=>{
    const { 
        bus_driver,
        row,
        company,
        contact,
        email
     } = req.body;

    try {

        const retorno = await con('buses')
            .insert({
                bus_driver,
                row,
                company,
                contact,
                email
            });

        if (retorno) {
            return res.json({ success: true });
        } else {
            return res.json({ success: false });
        }

    } catch {

        return res.json({ success: false });

    }
});

routeBus.get('/buses', async (req:Request, res:Response)=>{
    const buses = await con('buses').select('*');

    return res.json(buses);
});

routeBus.get('/bus/:id',async (req, res) => {
    const { id } = req.params;

    const bus = await con('buses').where('id', id).select('*');

    if (bus.length) {
        return res.json(bus);
    } else {
        return res.json({ success: false });
    }

});

routeBus.put('/bus/modify/:id', async (req:Request, res:Response)=>{
    const { id } = req.params;
    const {
        bus_driver,
        row,
        company,
        contact,
        email
    } = req.body;

    const resul =  await con('buses')
        .where('id', id)
        .update({
            bus_driver,
            row,
            company,
            contact,
            email
        });

    res.json(resul);
});

routeBus.delete('/bus/destroy/:id', async (req:Request, res:Response)=>{
    const { id } = req.params;
    const resul = await con('buses').where("id", id).delete();
    return res.json(resul);
});

export default routeBus;