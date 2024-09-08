import { CreateUserInput } from './create-user.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateUserInput extends PartialType(CreateUserInput) {
  @Field(() => String, { nullable: false })
  email?: string;

  @Field(() => String, { nullable: true })
  name?: string | null;
}
