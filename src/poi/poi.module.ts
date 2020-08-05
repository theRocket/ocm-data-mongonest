import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { POIController } from './poi.controller';
import { POIService } from './poi.service';
import { POI, POISchema } from './schemas/poi.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: POI.name, schema: POISchema }])],
  controllers: [POIController],
  providers: [POIService],
})
export class POIModule {}