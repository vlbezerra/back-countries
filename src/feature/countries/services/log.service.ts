import { Injectable } from '@nestjs/common';
import { CountriesService as entities } from '../../../entities/entities'
import cds from '@sap/cds';

@Injectable()
export class LogService {
  async log(data: string, user: string) {
    const db = await cds.connect.to('db');
    const Logs = entities.SanitizedEntity.Logs;
    return await db.run(INSERT.into(Logs).entries({ path: data, createdBy: user, modifiedBy: user }));
  }
}
