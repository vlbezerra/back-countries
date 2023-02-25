import "reflect-metadata";
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { createCombinedHandler } from "cds-routing-handlers";
import cds from "@sap/cds";

export class Server {
    public static async run() {
    const app = await NestFactory.create(AppModule);
    app.enableCors();
    // const hdl = createCombinedHandler({
    //     handler: [__dirname + "/entities/**/*.js", __dirname + "/functions/**/*.js"],
    // });

    // await cds.connect("db");
    // await cds
    //     .serve("all")
    //     .at("odata")
    //     .in(app)
    //     .with(srv => hdl(srv));

    await app.listen(process.env.PORT || 3000);
}
}
Server.run();