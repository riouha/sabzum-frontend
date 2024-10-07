export class File {
  id!: string;
  name!: string;
  type?: string;
  size?: number;
  createDate!: string;
}

export class GalleryFile {
  id!: string;
  name!: string;
  src!: string;
}
export class GalleryResult {
  result!: GalleryFile[];
}
