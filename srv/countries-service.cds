using {countriesDb as db} from '../db/countriesdb';

service CountriesService {
    entity Logs as projection on db.Logs;
}
