import { NextFunction, Request, Response } from 'express';
import con from '../../database/connection';


async function login(req: Request, res: Response, next: NextFunction) {
    const { login, password } = req.body;
    const { authorization } = req.headers;

    if (authorization) {
        return next();
    } else {
        const resul = await con('users').where({
            email: login,
            password: password
        }).select('email', 'password')
        return resul.length ? next() : res.json({ 'success': false });

    }
}

export { login };