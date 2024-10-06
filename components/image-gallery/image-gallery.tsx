import css from './image-gallery.module.css';
import { useState, useEffect, ChangeEvent } from 'react';
import { fileService } from '../../services/file/file.service';
import { GalleryFile } from '../../services/file/file.model';

export function ImageGallery(props: { onImageSelect: (image: GalleryFile) => void }) {
  const [images, setImages] = useState<GalleryFile[]>([]);
  const [newFile, setNewFile] = useState<File>();

  useEffect(() => {
    fileService.getGallery().then((result) => {
      setImages(result.data?.result!);
    });
  }, []);

  const handleSelectNewFile = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) setNewFile(e.target.files[0]);
  };
  const handleUploadNewFile = async () => {
    if (!newFile) return;
    const result = await fileService.uploadImage(newFile);
    if (result.data) {
      setNewFile(undefined);
      const imagesList = [...images];
      imagesList.unshift({
        id: result.data.id,
        name: result.data.name,
        filepath: result.data.filepath,
        src: fileService.getImageUrl(result.data.filepath),
      });
      setImages(imagesList);
    }
  };

  return (
    <div className={css.gallery}>
      <div className={css.header}>
        <span>گالری</span>
        {newFile ? (
          <div>
            <span>{newFile.name}</span>
            <button onClick={handleUploadNewFile}>آپلود</button>
          </div>
        ) : (
          <input type='file' style={{ direction: 'ltr' }} onChange={handleSelectNewFile} />
        )}
      </div>

      <div className={css.images}>
        {images.map((image) => (
          <div key={image.id} className={css.imageDiv}>
            <img src={image.src} alt={image.name} className={css.image} onClick={() => props.onImageSelect(image)} />
            <label>{image.name}</label>
          </div>
        ))}
      </div>
    </div>
  );
}
