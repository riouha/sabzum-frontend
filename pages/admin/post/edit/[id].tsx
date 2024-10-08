import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { CreatePostData, PostModel } from '../../../../services/post/post.model';
import { postService } from '../../../../services/post/post.service';
import { FixedSideNavbar } from '../../../../components/navbar/side-navbar/side-navbar';
import { PostEditor } from '../../../../components/post-editor/post-editor';
import IsAdmin from '../../../../components/is-admin/is-admin';

function EditPost() {
  const router = useRouter();
  const [post, setPost] = useState<PostModel>();
  useEffect(() => {
    if (router.query.id) {
      postService.getPost(Number(router.query.id)).then((result) => {
        if (!result.error) setPost(result.data);
      });
    }
  }, [router]);

  const savePost = async (dto: CreatePostData) => {
    const result = await postService.upsertPost(dto, post!.id);
    if (!result.error) router.push('/admin/post/list');
  };

  return (
    <>
      <div className='admin_layout'>
        <FixedSideNavbar />
        <div className='test'>
          {/* <EditableQuill />
          <div className='read'>
            <ReadonlyQuill value={'swsw'} />
          </div> */}
          {post && (
            <PostEditor
              html={decodeURI(post.htmlContent!)}
              isdraft={post.published ? false : true}
              thumbnail={post.thumbnail}
              title={post.title}
              savePost={savePost}
            />
          )}
        </div>
      </div>
      <style jsx>{`
        .admin_layout {
          display: flex;
        }

        .read {
          background: #eee;
          width: 60%;
        }
      `}</style>
    </>
  );
}
export default IsAdmin(EditPost);
