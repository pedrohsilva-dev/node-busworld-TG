import { Router } from "express";

import { Response, Request } from 'express';

const routeOccurrence = Router();

routeOccurrence.post('/occurrences/register', (req:Request, res:Response)=>{
    res.json('teste');
});
routeOccurrence.get('/occurrences', (req:Request, res:Response)=>{

});
routeOccurrence.put('/occurrence/modify', (req:Request, res:Response)=>{

});
routeOccurrence.delete('/occurrences/destroy', (req:Request, res:Response)=>{

});

export default routeOccurrence;