import * as common from '@nestjs/common';
import { CountryDTO } from '../model/contry.dto';
import { CountriesService } from '../services/countries.service';
import { LogService } from '../services/log.service';

@common.Controller('api')
export class ContriesController {
  constructor(
    private readonly countriesService: CountriesService,
    private readonly logService: LogService,
  ) {}

  @common.Get('countries')
  async getCountries(@common.Req() req: any): Promise<String> {
      return "API countries OK";
  }
  
}
