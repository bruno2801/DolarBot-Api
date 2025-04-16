const axios = require('axios')

const baseUrl = "https://bluepy.vercel.app/";

const DOLAR_OFICIAL = 'api/dolar/oficial';
const DOLAR_BLUE = '/api/dolar/blue';
const DOLAR_TURISTA = '/api/dolar/turista';
const DOLAR_MEP = '/api/dolar/mep';
const DOLAR_CCL = '/api/dolar/ccl';
const EURO_OFICIAL = '/api/euro/oficial';
const EURO_BLUE = '/api/euro/blue';
const EURO_TARJETA = '/api/euro/tarjeta';
const REAL_OFICIAL = '/api/real/oficial';
const REAL_BLUE = '/api/real/blue';
const DOLAR_VZLA_OFICIAL = '/api/venezuela/dolar/oficial';
const DOLAR_VZLA_PARALELO = '/api/venezuela/dolar/paralelo';

class bluePyService {
    constructor(cache) {
        this.cache = cache;
    }

    _fetchData = async (endpoint) => {
        const url = baseUrl + endpoint;
        const cacheValue = this.cache.get(url);
        if (cacheValue !== undefined) {
            return cacheValue;
        }
        else {
            const response = await axios.get(url);
            this.cache.set(baseUrl, response.data);
            return response.data;
        }
    }

    /**
     * @description Obtener el valor del Dólar oficial
     */
    getDolarOficial = async (_req, res) => {
        try {
            return this._fetchData(DOLAR_OFICIAL);
        } catch (e) {
            console.log(e);
            res.sendStatus(500);
        }
    }

    /**
     * @description Obtener el valor del Dólar blue
     */
    getDolarBlue = async (_req, res) => {
        try {
            return this._fetchData(DOLAR_BLUE);
        } catch (e) {
            console.log(e);
            res.sendStatus(500);
        }
    }

    /**
     * @description Obtener el valor del Dólar turista
     */
     getDolarTurista = async (_req, res) => {
        try {
            return this._fetchData(DOLAR_TURISTA);
        } catch (e) {
            console.log(e);
            res.sendStatus(500);
        }
    }

    /**
     * @description Obtener el valor del Dólar MEP
     */
     getDolarMep = async (_req, res) => {
        try {
            return this._fetchData(DOLAR_MEP);
        } catch (e) {
            console.log(e);
            res.sendStatus(500);
        }
    }

    /**
     * @description Obtener el valor del Dólar CCL
     */
     getDolarCcl = async (_req, res) => {
        try {
            return this._fetchData(DOLAR_CCL);
        } catch (e) {
            console.log(e);
            res.sendStatus(500);
        }
     }

    /**
     * @description Obtener el valor del Euro oficial
     */
    getEuroOficial = async (_req, res) => {
        try {
            return this._fetchData(EURO_OFICIAL);
        } catch (e) {
            console.log(e);
            res.sendStatus(500);
        }
    }

    /**
     * @description Obtener el valor del Euro blue
     */
    getEuroBlue = async (_req, res) => {
        try {
            return this._fetchData(EURO_BLUE);
        } catch (e) {
            console.log(e);
            res.sendStatus(500);
        }
    }

    /**
     * @description Obtener el valor del Euro tarjeta
     */
    getEuroTarjeta = async (_req, res) => {
        try {
            return this._fetchData(EURO_TARJETA);
        } catch (e) {
            console.log(e);
            res.sendStatus(500);
        }
    }

    /**
     * @description Obtener el valor del Real oficial
     */
    getRealOficial = async (_req, res) => {
        try {
            return this._fetchData(REAL_OFICIAL);
        } catch (e) {
            console.log(e);
            res.sendStatus(500);
        }
    }

    /**
     * @description Obtener el valor del Real blue
     */
    getRealBlue = async (_req, res) => {
        try {
            return this._fetchData(REAL_BLUE);
        } catch (e) {
            console.log(e);
            res.sendStatus(500);
        }
    }

    /**
     * @description Obtener el valor del par Bolivar-Dólar oficial
     */
    getVzlaDolarOficial = async (_req, res) => {
        try {
            return this._fetchData(DOLAR_VZLA_OFICIAL);
        } catch (e) {
            console.log(e);
            res.sendStatus(500);
        }
    }

    /**
     * @description Obtener el valor del par Bolivar-Dólar paralelo
     */
     getVzlaDolarParalelo = async (_req, res) => {
        try {
            return this._fetchData(DOLAR_VZLA_PARALELO);
        } catch (e) {
            console.log(e);
            res.sendStatus(500);
        }
    }
}

module.exports = bluePyService
