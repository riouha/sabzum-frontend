import { Header } from '../components/header/header';
import { PostRow } from '../components/posts/row-post/post-row';
import { LargeOverlayedPost } from '../components/posts/large-overlayed/large-overlayed-post';
import { BoombanCard } from '../components/boomban-card/boomban-card';
import { CategorySidebar } from '../components/categories/category-sidebar';
import { SideNavbar } from '../components/navbar/side-navbar/side-navbar';
import { useState, useEffect } from 'react';
import { SidePost } from '../components/posts/side-post/side-post';
import { MiddleBanner } from '../components/middle-banner/middle-banner';
import { PostModel } from '../services/post/post.model';
import { postService } from '../services/post/post.service';
import { Footer } from '../components/footer/footer';
import { fileService } from '../services/file/file.service';

export default function Home() {
  const [showSideMenu, SetShowSideMenu] = useState(false);
  const [posts, setPosts] = useState<PostModel[]>([]);
  useEffect(() => {
    postService.getPosts().then((data) => setPosts(data.data?.posts ?? []));
  }, []);

  return (
    <>
      <Header handleOpenSideMenu={SetShowSideMenu} />
      {/* <Navbar handleOpenSideMenu={SetShowSideMenu} /> */}
      <SideNavbar show={showSideMenu} setShow={SetShowSideMenu} />
      <div className='home_container'>
        <div className='hot_favourites'>
          <div className='hot_post'>
            <LargeOverlayedPost
              post={{
                id: 1,
                slug: '1',
                title: 'نحوه کاشت، آبیاری و نگهداری از درختچه بونسای ژاپنی',
                thumbnail: 'https://glamourgarden.com/wp-content/uploads/2023/08/Bonsai-1024x636.jpg',
                category: 'الهام بخش',
                date: '27/9/1401',
                author: {
                  id: 1,
                  fullname: 'نام نویسنده',
                },
              }}
            />
          </div>
          <div className='favourite_posts'>
            <BoombanCard />
          </div>
        </div>

        <MiddleBanner />

        <div className='sublayout'>
          <div className='post'>
            {posts.map((post) => (
              <PostRow
                key={post.id}
                post={{
                  id: post.id,
                  slug: post.slug,
                  title: post.title,
                  content: post.content ?? '',
                  category: 'گل و گیاه',
                  date: post.published
                    ? new Intl.DateTimeFormat('fa-IR').format(new Date(post.published))
                    : post.createDate,
                  author: post.author
                    ? {
                        id: post.author.id,
                        fullname: post.author.fullname,
                        // avatar: post.author.avatar,
                      }
                    : {
                        id: post.author!.id,
                        fullname: post.author!.fullname,
                        avatar: post.thumbnail,
                      },
                  thumbnail: post.thumbnail,
                }}
                style={{ marginBottom: '30px' }}
              />
            ))}
          </div>

          <div className='side'>
            <CategorySidebar
              categories={[
                { id: 1, name: 'گل و گیاه', postsCount: 5 },
                { id: 2, name: 'باغبانی', postsCount: 4 },
                { id: 3, name: 'کشاورزی', postsCount: 3 },
              ]}
            />

            <br />
            <br />
            <div className='lastnews'>
              <h3>مطالب پربازدید</h3>
              {[].map((x: any) => (
                <SidePost key={x.id} post={x} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <style jsx>
        {`
          .lastnews {
            border: 1px solid #ebebeb;
            border-radius: 10px;
            padding: 0 15px;
          }

          .lastnews h3 {
            color: #203656;
            text-align: center;
          }

          .hot_favourites {
            margin: 3vh 0;
            display: flex;
          }
          .hot_post {
            flex: 12;
            position: relative;
            margin-left: 1rem;
          }
          .favourite_posts {
            flex: 5;
          }

          .home_container {
            padding: 0 20vw;
          }

          .sublayout {
            margin: 40px auto;
            display: flex;
          }

          .post {
            flex: 12;
            // width: 55%
            padding: 30px;
            border: 1px solid #ebebeb;
            border-radius: 10px;
            margin-left: 1rem;
          }

          .side {
            flex: 5;
            // width: 45%;
            // background: #aaa;
          }

          @media only screen and (max-width: 1400px) {
            .home_container {
              padding: 0 3vw;
            }
          }

          @media only screen and (max-width: 600px) {
            .side {
              display: none;
            }
            .favourite_posts {
              display: none;
            }
            .hot_post {
              margin-left: 0;
            }
            .post {
              margin-left: 0;
            }
          }
        `}
      </style>
    </>
  );
}
