export class CreateBodyDto {
  constructor(
    readonly login: string,
    readonly password: string,
  ) {}
}
