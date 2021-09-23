import { IsString } from 'class-validator';

export class DemoDTO {
  @IsString()
  name: string;

  @IsString()
  type: string;
}
