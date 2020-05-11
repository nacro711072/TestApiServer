import { Router } from "express";
import { AxiosResponse, Method } from "axios"
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
        console.log(`request url: ${req.originalUrl}, method: ${req.method}, body: ${req.body}`)
        var m: Method = 'GET'

        switch(req.method) {
            case 'PUT': {
                m = 'PUT'
                break
            }
            case 'GET': {
                m = 'GET'
                break
            }
            case 'POST': {
                m = 'POST'
                break
            }

        }

        const a: Promise<AxiosResponse<any>> = instacne.request({
            url: req.originalUrl,
            method: m,
            data: req.body
        })
        // switch(req.method) {
        //     case 'PUT': {
        //         a = instacne.put(req.originalUrl, req.body)
        //         break
        //     }
        //     case 'GET': {
        //         a = instacne.get(req.originalUrl)
        //         break
        //     }
        //     case 'POST': {
        //         a = instacne.post(req.originalUrl)
        //         break
        //     }
        // }
    
        a.finally(() => {})
        a.then((value) => {
            
            console.log(`response data: ${value.data}, status: ${value.status}`)
            res.send(value.data)
        })
    });
    
  };
