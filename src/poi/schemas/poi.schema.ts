import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class POI extends Document {
  @Prop()
  UUID: string;

  @Prop()
  ID: number;

  @Prop()
  ParentChargePointID: number;

  @Prop()
  DataProviderID: number;

  @Prop()
  OperatorID: number;

  @Prop()
  UsageTypeID: number;

  @Prop()
  UsageCost: string;
}

export const POISchema = SchemaFactory.createForClass(POI);