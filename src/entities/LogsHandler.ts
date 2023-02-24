import { Handler, Req, AfterRead, Entities, BeforeRead } from "cds-routing-handlers";
import { CountriesService } from "../entities";

/**
 * Book handler.
 *
 * @export
 * @class BookHandler
 */
@Handler(CountriesService.SanitizedEntity.Logs)
export class LogsHandler {
    // You can also decorate multiple methods with the same docorator (@BeforRead in this example)
    // This way you can structure the code which should be executed on the beforRead hook and break it down into smaller pieces
    @BeforeRead()
    public async checkAuth() {}
    @BeforeRead()
    public async doSomeOtherThings() {}
}
