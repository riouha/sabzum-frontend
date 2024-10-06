import '../styles/globals.css';
import '../styles/common.css';
import 'react-toastify/dist/ReactToastify.css';
import 'suneditor/dist/css/suneditor.min.css'; // Import Sun Editor's CSS File

import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
