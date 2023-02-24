namespace countriesDb;

using { cuid, managed } from '@sap/cds/common';

entity Logs : cuid, managed {
    path: String(200);
}