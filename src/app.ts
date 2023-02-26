import 'reflect-metadata';
import './config/module-alias';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { createCombinedHandler } from 'cds-routing-handlers';
import cds from '@sap/cds';

export const application = async () => {
    const app = await NestFactory.create(AppModule);
    app.enableCors();
    const hdl = createCombinedHandler({
        handler: [__dirname + '/services/**/*.js', __dirname + '/handlers/**/*.js'],
    });

    await cds.connect('db');
    await cds
        .serve('all')
        .in(app)
        .with((srv) => hdl(srv));

    return app;
};
