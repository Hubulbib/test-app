export class CreateBodyDto {
  constructor(
    readonly cat_id: string,
    readonly created_at?: string,
  ) {}
}
