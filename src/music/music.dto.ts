export class CreateMusic {
  name: string;
  author: string;
}

export class UpdateMusic {
  name?: string;
  author?: string;
}

export class UpdateMusicParams {
  id: string;
}

export class DeleteMusicParams {
  id: string;
}

export class GetMusicParams {
  name: string;
  author: string;
}
