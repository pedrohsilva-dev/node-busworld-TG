import express, { json, NextFunction, Request, Response } from 'express';
import GLOBALS from './config';
import con from './database/connection';

const app = express();

app.use(json());

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

app.use(login);

app.post('/users/register', async (req, res) => {

    const { name, email, password, location, date } = req.body;

    try {

        const retorno = await con('users')
            .insert({
                "name": name,
                "email": email,
                "password": password,
                "location": location,
                "data_nascimento": date
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

app.get('/users', async (req, res) => {
    const users = await con('users').select('*');

    return res.json(users);

});

app.get('/users/:id', async (req, res) => {

    const { id } = req.params;

    const user = await con('users').where('id', id).select('*');

    if (user.length) {
        return res.json(user);
    } else {
        return res.json({ success: false });
    }

});

app.put('/users/modify/:id', async (req, res) => {
    const { id } = req.params;
    const { name, email, password, location, date } = req.body;

    const resul = await con('users')
        .where('id', id)
        .update({
            "name": name,
            "email": email,
            "password": password,
            "location": location,
            "data_nascimento": date
        });

    res.json(resul);

});

app.delete('/users/destroy/:id', async (req, res) => {

    const { id } = req.params;
    const resul = await con('users').where("id", id).delete();
    return res.json(resul);

});

app.listen(GLOBALS.port, () => {

    console.log(`Server: localhost:${GLOBALS.port} success`);

});

