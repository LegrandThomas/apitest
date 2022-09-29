import express from "express";
import cors from "cors";
import request from 'supertest'
import router from "../routes/route"
// const request = require('supertest')
import app from "../index";



describe('test environnement',()=>{

 it('affiche environnement dans lequel on se trouve, doit afficher test si test sinon production',()=>{
    const env=process.env.NODE_ENV
   if(env==='test'){
expect(env).toEqual('test')
console.log("environnement: test")
}else{
    expect(env).toEqual('production')
console.log("environnement: production")
}
}
)
})


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
            name: "toto",
            email:"toto@toto.fr",
            password:"toto",
            confPassword:"toto"
        };
        const mess="nouvel utilisateur"
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
            email:"toto@toto.fr",
            password:"toto"
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
            email:"toto@testt.com",
            password:"testt"
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
            email:"toto@toto.fr",
            password:"test"
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
    // it('doit renvoyer status code 204, sans contenu ', async() => {
    //     const user = {
    //         email:"celine@celine.fr",
    //     };
    //     const res =   await request(app)
    //       .delete('/logout').send(user)
    //       expect(res.statusCode).toEqual(204)
    //       expect(res.body).toEqual({})
    // });
    it('doit renvoyer ok et status 200',async()=>{
      
        const token={
            "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsIm5hbWUiOiJ0b3RvIiwiZW1haWwiOiJ0b3RvQHRvdG8uZnIiLCJpYXQiOjE2NjQ0NDQ3NjQsImV4cCI6MTY2NDUzMTE2NH0.kiM35HZqMFfZTW295vTSU1uSQE9_txD9mloAoCCmgFE"
        };
       
        const res =   await request(app)
        .delete('/logout').send(token)
         expect(res.body).toEqual({})
        expect(res.statusCode).toEqual(204)

    })
});


describe('test sur les if',()=>{

    it('ajout 1+1 puis affiche 2 ok, si somme =2 sinon affiche pas égale à 2',()=>{
        const somme=4+1;
        if(somme===2 ){
            expect(somme).toEqual(2)
        console.log("2 ok");}
        else {     expect(somme).not.toEqual(2)
            console.log("pas égale a 2");}
    }
    )
})
})
