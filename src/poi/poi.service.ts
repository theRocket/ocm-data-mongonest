import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { POI } from './schemas/poi.schema';

@Injectable()
export class POIService {
  constructor(@InjectModel(POI.name) private readonly poiModel: Model<POI>) {}

  async findAll(): Promise<POI[]> {
    return this.poiModel.find().exec();
  }

  async findByID(id:number): Promise<POI> {
    return this.poiModel.findOne({"ID": id}).exec();
  }

  async findUsageCosts(): Promise<string[]> {
    return this.poiModel.distinct("UsageCost").exec();
  }
}