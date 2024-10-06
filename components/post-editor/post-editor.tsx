import { useRef, useState } from 'react';
import { fileService } from '../../services/file/file.service';
import { postService } from '../../services/post/post.service';
import { EditableSuneditor } from './suneditor';
import { Modal } from '../modal/modal';
import { ImageGallery } from '../image-gallery/image-gallery';
import { GalleryFile } from '../../services/file/file.model';
import { Backdrop } from '../backdrop/backdrop';
import css from './post-editor.module.css';
import 'suneditor/dist/css/suneditor.min.css';
//======================================================================================

export function PostEditor() {
  const refEditor = useRef<any>();
  const [title, setTitle] = useState('');
  const [thumbnail, setThumbnail] = useState<string>();
  const [showGalleryModal, setShowGalleryModal] = useState(false);

  const handleSaveDraft = async () => {
    if (!refEditor.current || !thumbnail || !title) return;
    const html = refEditor.current.getContents();
    const result = await postService.addPost({
      title,
      content: html.replace(/<[^>]+>/g, ' '),
      htmlContent: encodeURI(html),
      thumbnail,
    });
    console.log(result);
  };
  const handleSavePublished = async () => {
    console.log(refEditor.current, thumbnail, title);

    if (!refEditor.current || !thumbnail || !title) return;
    const html = refEditor.current.getContents();
    console.log('html', html);

    const result = await postService.addPost({
      title,
      content: html.replace(/<[^>]+>/g, ' ').replace(/&nbsp;/g, ''),
      htmlContent: encodeURI(html),
      thumbnail,
      published: new Date(),
    });
    console.log(result);
  };

  return (
    <>
      <div className={css.newpost}>
        <div style={{ background: '#888', width: '100%', marginBottom: '10px' }}>انتشار پست جدید</div>

        <div className={css.post}>
          <div className={css.editor}>
            <input
              className={css.title}
              placeholder='عنوان پست'
              value={title}
              onChange={(e: any) => setTitle(e.target.value)}
            />
            <EditableSuneditor refEditor={refEditor} />
          </div>
          <div className={css.settings}>
            <div>
              <button onClick={() => setShowGalleryModal(true)}>انتخاب تصویرک</button>
              <br />
              {thumbnail && <img src={fileService.getImageUrl(thumbnail)} width={100} alt='' />}
            </div>
            <button
              className='appbtn'
              style={{ borderRadius: '5px', marginLeft: '10px' }}
              onClick={handleSavePublished}
            >
              ذخیره و انتشار
            </button>
            <button className='appbtn' style={{ borderRadius: '5px', marginLeft: '10px' }} onClick={handleSaveDraft}>
              ذخیره پیشنویس
            </button>
          </div>
        </div>
      </div>
      <Modal show={showGalleryModal}>
        <ImageGallery
          onImageSelect={(image: GalleryFile) => {
            setThumbnail(image.filepath);
            setShowGalleryModal(false);
          }}
        />
      </Modal>
      <Backdrop show={showGalleryModal} setShow={setShowGalleryModal} />
    </>
  );
}
