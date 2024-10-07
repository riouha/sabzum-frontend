import { MutableRefObject } from 'react';
import dynamic from 'next/dynamic';
import { SunEditorReactProps } from 'suneditor-react/dist/types/SunEditorReactProps';
import { fileService } from '../../services/file/file.service';
// import 'suneditor/dist/css/suneditor.min.css'; // Import Sun Editor's CSS File
import css from './suneditor.module.css';

const SunEditor = dynamic<SunEditorReactProps>(
  async () => {
    const { default: SunEditor } = await import('suneditor-react');
    return ({ ...props }) => <SunEditor {...props} />;
  },
  {
    ssr: false,
  }
);

export const EditableSuneditor = (props: { refEditor: MutableRefObject<any>; value?: string }) => {
  // useEffect(() => {}, []);
  const getSunEditorInstance = (sunEditor: any) => {
    props.refEditor.current = sunEditor;
  };

  const onImageUploadBefore = (files: File[], info: any, uploadHandler: any) => {
    fileService
      .uploadImage(files[0])
      .then((result) => {
        uploadHandler({
          result: [
            {
              url: fileService.getImageUrl(result.data?.id!),
              name: result.data?.name,
              size: result.data?.size,
            },
          ],
        });
        return undefined;
      })
      .catch((err) => console.error(err));
  };

  return (
    <>
      <SunEditor
        setDefaultStyle='font-family:Vazirmatn; height:auto'
        autoFocus={true}
        onImageUploadBefore={onImageUploadBefore}
        // onImageUpload={handleImageUpload}
        getSunEditorInstance={getSunEditorInstance}
        setOptions={{
          // resizingBar: false,
          // resizeEnable: true,
          rtl: true,
          buttonList: [
            [
              'font',
              'fontSize',
              'formatBlock',
              'bold',
              'fontColor',
              'list',
              'dir',
              'align',
              'image',
              'table',
              'link',
              'outdent',
              'indent',
              'preview',
            ],
            [
              '-right',
              ':i-More Misc-default.more_vertical',
              'undo',
              'redo',
              'blockquote',
              'underline',
              'italic',
              'strike',
              'removeFormat',
              'hiliteColor',
              'subscript',
              'superscript',
              'textStyle',
              'horizontalRule',
              'lineHeight',
              'video',
              // 'imageGallery',
              'showBlocks',
              // 'codeView',
              // 'save',
            ],
          ],
          imageGalleryUrl: fileService.getGalleryUrl(),
          imageGalleryHeader: { key: 'images' },
          font: ['Vazirmatn', 'Arial', 'Comic Sans MS', 'Courier New', 'Impact'],
        }}
        defaultValue={props.value}
        // readOnly={true}
        // hideToolbar={true}
        // disableToolbar={true}
        // disable={true}

        // onSave={handleSavePost}
      />
    </>
  );
};

export const ReadonlySuneditor = (props: { value: string }) => {
  return (
    <>
      <div id='readonly-suneditor' className={css.readonly}>
        <SunEditor
          setDefaultStyle='font-family: Vazirmatn;'
          autoFocus={false}
          setOptions={{
            resizingBar: false,
            // showPathLabel: false,
            rtl: true,
          }}
          defaultValue={props.value}
          readOnly={true}
          hideToolbar={true}
          disableToolbar={true}
          // disable={true}
        />
      </div>
    </>
  );
};
