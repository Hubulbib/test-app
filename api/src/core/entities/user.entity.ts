export class UserEntity {
  constructor(
    readonly userId: number,
    readonly login: string,
    readonly password: string,
    readonly authToken: string,
  ) {}
}
