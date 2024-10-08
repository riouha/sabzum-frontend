import { useState } from 'react';
import { useRouter } from 'next/router';
import { FixedSideNavbar } from '../../../components/navbar/side-navbar/side-navbar';
import { PostEditor } from '../../../components/post-editor/post-editor';
import IsAdmin from '../../../components/is-admin/is-admin';
import { postService } from '../../../services/post/post.service';
import { CreatePostData } from '../../../services/post/post.model';

function CreatePost() {
  const router = useRouter();
  // useLayoutEffect(() => {
  //   if (!adminService.getToken()) router.push('/');
  // }, [router]);
  const savePost = async (dto: CreatePostData) => {
    const result = await postService.upsertPost(dto);
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
          <PostEditor savePost={savePost} />
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
export default IsAdmin(CreatePost);
