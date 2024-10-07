import { useState, useEffect } from 'react';
import { SideNavbar } from '../components/navbar/side-navbar/side-navbar';
import { SidePost } from '../components/posts/side-post/side-post';

function Test() {
  const [show, setShow] = useState(false);
  const [news, setNews] = useState([]);

  // useEffect(() => {
  //   const parser = new RssParser();
  //   const CORS_PROXY = 'https://thingproxy.freeboard.io/fetch/';

  //   parser
  //     .parseURL(CORS_PROXY + 'https://www.fardayeeghtesad.com/rss/tp/71')
  //     .then((result: any) => {
  //       setNews(result.items);
  //     })
  //     .catch((err) => console.error(err));
  // }, []);
  return <></>;
}

export default Test;
