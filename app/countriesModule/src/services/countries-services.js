import { createAsyncThunk } from "@reduxjs/toolkit";
// import core from '@sap-cloud-sdk/core';
import axios from "axios";
import oauth from 'axios-oauth-client'
import { CONFIG } from "../CONFIG";


export const getCountries = createAsyncThunk("countries/getCountries", async ({lang, user}) => {

     const token = oauth.clientCredentials(axios.create(),CONFIG.tokenurl,CONFIG.clientId, CONFIG.clientSecret);
     const t = await token();

    const headersConfig = {
        headers: {
            'Authorization': `Bearer ${t.access_token}`,
        } 
    };
    // var destination = getDestination({destinationName: 'countries',});
    // if(destination){
    //     destination.url = destination.url + `?lang=${lang}`;
    // }
    // console.log(destination);
    // const response = [];
    // const token = await getUserToken();
    // const email = userEmail(token);

    const response = await axios.get(`${CONFIG.baseURL}/countries?lang=${lang}`);
    return response.data;    
});