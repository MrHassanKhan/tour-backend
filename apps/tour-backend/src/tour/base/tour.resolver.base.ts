/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { Tour } from "./Tour";
import { TourCountArgs } from "./TourCountArgs";
import { TourFindManyArgs } from "./TourFindManyArgs";
import { TourFindUniqueArgs } from "./TourFindUniqueArgs";
import { CreateTourArgs } from "./CreateTourArgs";
import { UpdateTourArgs } from "./UpdateTourArgs";
import { DeleteTourArgs } from "./DeleteTourArgs";
import { ImageFindManyArgs } from "../../image/base/ImageFindManyArgs";
import { Image } from "../../image/base/Image";
import { User } from "../../user/base/User";
import { TourService } from "../tour.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Tour)
export class TourResolverBase {
  constructor(
    protected readonly service: TourService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Tour",
    action: "read",
    possession: "any",
  })
  async _toursMeta(
    @graphql.Args() args: TourCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Tour])
  @nestAccessControl.UseRoles({
    resource: "Tour",
    action: "read",
    possession: "any",
  })
  async tours(@graphql.Args() args: TourFindManyArgs): Promise<Tour[]> {
    return this.service.tours(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Tour, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Tour",
    action: "read",
    possession: "own",
  })
  async tour(@graphql.Args() args: TourFindUniqueArgs): Promise<Tour | null> {
    const result = await this.service.tour(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Tour)
  @nestAccessControl.UseRoles({
    resource: "Tour",
    action: "create",
    possession: "any",
  })
  async createTour(@graphql.Args() args: CreateTourArgs): Promise<Tour> {
    return await this.service.createTour({
      ...args,
      data: {
        ...args.data,

        user: args.data.user
          ? {
              connect: args.data.user,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Tour)
  @nestAccessControl.UseRoles({
    resource: "Tour",
    action: "update",
    possession: "any",
  })
  async updateTour(@graphql.Args() args: UpdateTourArgs): Promise<Tour | null> {
    try {
      return await this.service.updateTour({
        ...args,
        data: {
          ...args.data,

          user: args.data.user
            ? {
                connect: args.data.user,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Tour)
  @nestAccessControl.UseRoles({
    resource: "Tour",
    action: "delete",
    possession: "any",
  })
  async deleteTour(@graphql.Args() args: DeleteTourArgs): Promise<Tour | null> {
    try {
      return await this.service.deleteTour(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Image], { name: "images" })
  @nestAccessControl.UseRoles({
    resource: "Image",
    action: "read",
    possession: "any",
  })
  async findImages(
    @graphql.Parent() parent: Tour,
    @graphql.Args() args: ImageFindManyArgs
  ): Promise<Image[]> {
    const results = await this.service.findImages(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => User, {
    nullable: true,
    name: "user",
  })
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "any",
  })
  async getUser(@graphql.Parent() parent: Tour): Promise<User | null> {
    const result = await this.service.getUser(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
