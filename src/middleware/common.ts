import { Router } from "express";
import parser from "body-parser";
import axios from "axios"
import clientConfig from "../../config.json"

const instacne = axios.create(clientConfig)

export const handleBodyRequestParsing = (router: Router) => {
    router.use(parser.urlencoded({ extended: true }));
    router.use(parser.json());
  };

export const wrapper = (router: Router) => {
    router.use('/', function(req, res) {
        console.log(`request url: ${req.originalUrl}, method: ${req.method}`)
        let a
        switch(req.method) {
            case 'PUT': {
                a = instacne.put(req.originalUrl)
                break
            }
            case 'GET': {
                a = instacne.get(req.originalUrl)
                break
            }
            case 'POST': {
                a = instacne.post(req.originalUrl)
                break
            }

        }
    
        res.send(a)
    });
    
  };
