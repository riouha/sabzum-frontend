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
type EditPostType = {
  id?: number;
  title?: string;
  thumbnail?: string;
  isdraft?: boolean;
  html?: string;
};
export function PostEditor(props: Readonly<EditPostType>) {
  const refEditor = useRef<any>();
  const [title, setTitle] = useState(props.title ?? '');
  const [thumbnail, setThumbnail] = useState<string | undefined>(props.thumbnail);
  const [isdraft, setIsdraft] = useState(props.isdraft ?? true);
  const [showGalleryModal, setShowGalleryModal] = useState(false);

  const handleCreatePost = async () => {
    if (!refEditor.current || !thumbnail || !title) return;
    const html = refEditor.current.getContents();
    await postService.upsertPost(
      {
        title,
        content: html.replace(/<[^>]+>/g, ' ').replace(/&nbsp;/g, ''),
        htmlContent: encodeURI(html),
        thumbnail,
        published: isdraft ? undefined : new Date(),
      },
      props.id
    );
  };

  return (
    <>
      <div className={css.newpost}>
        {/* <div style={{ background: '#888', width: '100%', marginBottom: '10px' }}>انتشار پست جدید</div> */}

        <div className={css.post}>
          <div className={css.editor}>
            <input
              className={css.title}
              placeholder='عنوان پست'
              value={title}
              onChange={(e: any) => setTitle(e.target.value)}
            />
            <EditableSuneditor refEditor={refEditor} value={props.html} />
          </div>
          <div className={css.settings}>
            <div style={{ margin: '0 20px 10px 0px' }}>
              <button className='appbtn' onClick={() => setShowGalleryModal(true)}>
                تصویرک
              </button>
              <br />
              <br />
              {thumbnail ? (
                <img src={fileService.getImageUrl(thumbnail)} width={100} alt='' />
              ) : (
                <div style={{ border: '1px solid gray', width: '100px', height: '100px' }}></div>
              )}
              <br />
              <input id='isdraft' type='checkbox' checked={isdraft} onChange={(e) => setIsdraft(!isdraft)} />
              <label style={{ fontSize: '14px', padding: '0px 10px 0px 0px' }} htmlFor='isdraft'>
                پیشنویس
              </label>
              <br />
              <button
                className='appbtn'
                style={{ borderRadius: '5px', margin: '20px 0 0 0px' }}
                onClick={handleCreatePost}
              >
                ایجاد{' '}
              </button>
            </div>
          </div>
        </div>
      </div>
      <Modal show={showGalleryModal}>
        <ImageGallery
          onImageSelect={(image: GalleryFile) => {
            setThumbnail(image.id);
            setShowGalleryModal(false);
          }}
        />
      </Modal>
      <Backdrop show={showGalleryModal} setShow={setShowGalleryModal} />
    </>
  );
}
