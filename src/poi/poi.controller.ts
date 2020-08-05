import { Body, Controller, Get, Post, Param } from '@nestjs/common';
import { POIService } from './poi.service';
import { POI } from './schemas/poi.schema';

@Controller('pois')
export class POIController {
  constructor(private readonly POIService: POIService) {}

  @Get()
  async findAll(): Promise<POI[]> {
    return this.POIService.findAll();
  }

  @Get('/:id')
  async findByID(@Param() params): Promise<POI> {
    return this.POIService.findByID(params.id);
  }
}