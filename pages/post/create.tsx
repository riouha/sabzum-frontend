import { useState } from 'react';
import { FixedSideNavbar } from '../../components/navbar/side-navbar/side-navbar';
import { PostEditor } from '../../components/post-editor/post-editor';
import { useRouter } from 'next/router';
import IsAdmin from '../../components/is-admin/is-admin';

function CreatePost() {
  const router = useRouter();
  // useLayoutEffect(() => {
  //   if (!adminService.getToken()) router.push('/');
  // }, [router]);
  const [showSideMenu, SetShowSideMenu] = useState(false);

  return (
    <>
      <div className='admin_layout'>
        <FixedSideNavbar />
        <div className='test'>
          {/* <EditableQuill />
          <div className='read'>
            <ReadonlyQuill value={'swsw'} />
          </div> */}
          <PostEditor />
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
