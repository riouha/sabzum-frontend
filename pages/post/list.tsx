import { useEffect, useState } from 'react';
import { FixedSideNavbar } from '../../components/navbar/side-navbar/side-navbar';
import { useRouter } from 'next/router';
import IsAdmin from '../../components/is-admin/is-admin';
import { PostModel } from '../../services/post/post.model';
import { postService } from '../../services/post/post.service';
import { fileService } from '../../services/file/file.service';
import Image from 'next/image';

function PostList() {
  const [posts, setPosts] = useState<PostModel[]>([]);
  useEffect(() => {
    postService.getPosts().then((data) => setPosts(data.data?.posts ?? []));
  }, []);
  const router = useRouter();

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <FixedSideNavbar />
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {posts.map((post) => (
          <div
            key={post.id}
            style={{
              margin: '10px',
              padding: '20px 20px',
              display: 'flex',
              border: '1px solid gray',
              borderRadius: '5px',
            }}
          >
            <img src={fileService.getImageUrl(post.thumbnail!)} alt='xxx' width={70} height={70} />
            <h5 style={{ padding: '0px 10px 0px 20px' }}>{post.title}</h5>
            <div style={{ alignContent: 'center' }}>
              <button style={{ margin: '10px' }} onClick={() => router.push('edit/' + post.id)}>
                ویرایش
              </button>
              <button style={{ margin: '10px' }}>حذف</button>
              <button style={{ margin: '10px' }}>غیرفعال (پیشنویس)</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default IsAdmin(PostList);
