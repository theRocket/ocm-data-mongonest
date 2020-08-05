import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class POI extends Document {
  @Prop()
  UUID: string;

  @Prop()
  ID: number;

  @Prop()
  OperatorID: number;
}

export const POISchema = SchemaFactory.createForClass(POI);