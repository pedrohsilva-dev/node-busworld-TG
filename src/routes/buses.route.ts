import { Router } from "express";

import { Response, Request } from 'express';

const routeBus = Router();

routeBus.post('/buses/register', (req:Request, res:Response)=>{
    
});
routeBus.get('/buses', (req:Request, res:Response)=>{

});
routeBus.put('/bus/modify', (req:Request, res:Response)=>{

});
routeBus.delete('/buses/destroy', (req:Request, res:Response)=>{

});

export default routeBus;