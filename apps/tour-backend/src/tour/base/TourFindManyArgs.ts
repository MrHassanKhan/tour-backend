/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { TourWhereInput } from "./TourWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { TourOrderByInput } from "./TourOrderByInput";

@ArgsType()
class TourFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => TourWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => TourWhereInput, { nullable: true })
  @Type(() => TourWhereInput)
  where?: TourWhereInput;

  @ApiProperty({
    required: false,
    type: [TourOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [TourOrderByInput], { nullable: true })
  @Type(() => TourOrderByInput)
  orderBy?: Array<TourOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { TourFindManyArgs as TourFindManyArgs };
