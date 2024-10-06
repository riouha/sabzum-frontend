export class File {
  id!: number;
  name!: string;
  filepath!: string;
  mimetype?: string;
  size?: number;
  createDate!: string;
}

export class GalleryFile {
  id!: number;
  name!: string;
  filepath!: string;
  src!: string;
}
export class GalleryResult {
  result!: GalleryFile[];
}
