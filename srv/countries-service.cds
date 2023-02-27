using {countriesDb as db} from '../db/countriesdb';

service CountriesService @(requires : 'authenticated-user') {
// service CountriesService {
    entity Logs as projection on db.Logs;
}
