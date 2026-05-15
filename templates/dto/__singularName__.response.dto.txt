import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class BuildingResponseDto {
  @Expose()
  id!: number;
}
