
import { IsInt, IsString } from 'class-validator';

export class CreateEventoDto {
  @IsString()
  readonly descripción: string;

  @IsInt()
  readonly fecha: string;

  @IsString()
  readonly creador: string;
}