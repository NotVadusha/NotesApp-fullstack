import { NestFactory } from "@nestjs/core";
import { Seeder } from "./database/seeders/seeder";
import { SeederModule } from "./database/seeders/seeder.module";

async function bootstrap() {
  NestFactory.createApplicationContext(SeederModule).then((appContext) => {
    const seeder = appContext.get(Seeder);
    seeder.seed().finally(() => appContext.close());
  });
}

bootstrap();
