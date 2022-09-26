import express from "express";
import cors from "cors";
import request from 'supertest'
import router from "../routes/route"
// const request = require('supertest')
import app from "../index";

describe('test sur register, sur login, sur token',()=>{
describe('test rafraichissement token',()=>
{
    afterAll(async () => {
        await new Promise(resolve => setTimeout(() => resolve(), 500)); // avoid jest open handle error
    });
it('doit retourner status 200', async()=>{
const res=await request(app)
.get('/token')
expect(res.statusCode).toEqual(401)
})
})
describe('enregister un nouvel user ', () => {
    afterAll(async () => {
        await new Promise(resolve => setTimeout(() => resolve(), 500)); // avoid jest open handle error
    });
    it('doit renvoyer un code 200,enregistrement avec succes ', async() => {
        const user = {
            name: "test",
            email:"test@test.fr",
            password:"test",
            confPassword:"test"
        };
        const res =   await request(app)
          .post('/users').send(user)
          expect(res.statusCode).toEqual(200)
    });
});
describe('enregister un nouvel user avec mdp qui match pas ', () => {
    afterAll(async () => {
        await new Promise(resolve => setTimeout(() => resolve(), 500)); // avoid jest open handle error
    });
    it('doit retourner un status code 400, enregistrement echoué ', async() => {
        const user = {
            name: "celine",
            email:"celine@celine.fr",
            password:"celine",
            confPassword:"celin"
        };
        const res =   await request(app)
          .post('/users').send(user)
          expect(res.statusCode).toEqual(400)
    });
});
describe('test sur login avec bons identifiants ', () => {
    afterAll(async () => {
        await new Promise(resolve => setTimeout(() => resolve(), 500)); // avoid jest open handle error
    });
    it('doit renvoyer status code 200, log avec succes ', async() => {
        const user = {
            email:"celine@celine.fr",
            password:"celine"
        };
        const res =   await request(app)
          .post('/login').send(user)
          expect(res.statusCode).toEqual(200)
    });
});
describe('test sur login avec mauvais email ', () => {
    afterAll(async () => {
        await new Promise(resolve => setTimeout(() => resolve(), 500)); // avoid jest open handle error
    });
    it('doit renvoyer status code 404, log echoué ', async() => {
        const user = {
            email:"celin@celie.fr",
            password:"celine"
        };
        const res =   await request(app)
          .post('/login').send(user)
          expect(res.statusCode).toEqual(404)
    });
});
describe('test sur login avec mauvais mpd ', () => {
    afterAll(async () => {
        await new Promise(resolve => setTimeout(() => resolve(), 500)); // avoid jest open handle error
    });
    it('doit renvoyer status code 400, log echoué ', async() => {
        const user = {
            email:"celine@celine.fr",
            password:"celin"
        };
        const res =   await request(app)
          .post('/login').send(user)
          expect(res.statusCode).toEqual(400)
    });
});
describe('logout  ', () => {
    afterAll(async () => {
        await new Promise(resolve => setTimeout(() => resolve(), 500)); // avoid jest open handle error
    });
    it('doit renvoyer status code 204, sans contenu ', async() => {
        const user = {
            email:"celine@celine.fr",
        };
        const res =   await request(app)
          .delete('/logout').send(user)
          expect(res.statusCode).toEqual(204)
          expect(res.body).toEqual({})
    });
    it('doit renvoyer ok et status 200',async()=>{
        const user=
        {
            name:'u',
            email:"u"
        }
        const res =   await request(app)
        .delete('/logout').send(user)
        expect(res.text).toEqual("")
        expect(res.statusCode).toEqual(200)
    })
});
})
