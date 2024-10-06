import { FormEvent } from 'react';
import css from './login.module.css';
import { adminService } from '../../services/admin/admin.service';
import { toast, ToastContainer } from 'react-toastify';
import { useRouter } from 'next/router';

export function Login(props: {}) {
  const router = useRouter();
  const notify = (msg: string) => toast.error(msg);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const username = formData.get('username') as string;
    const password = formData.get('password') as string;
    if (!username || !password) return;

    const result = await adminService.login({ username, password });
    if (result.data) {
      adminService.setToken(result.data.access_token);
      router.push('/post/create');
    } else notify(result.message!);
  }

  return (
    <div className={css.login}>
      <form onSubmit={handleSubmit}>
        <label htmlFor='username'>نام کاربری یا شماره همراه</label>
        <input className={css.username} type='text' name='username' placeholder='09...' dir='ltr' />
        <br />
        <label htmlFor='password'>رمز عبور</label>
        <input className={css.password} type='password' name='password' placeholder='password' dir='ltr' />
        <br />
        <button type='submit'>ورود</button>
        <br />
        <input type='checkbox' id='check' />
        <span>به خاطر بسپار</span>
        <br />
      </form>
      <ToastContainer />
    </div>
  );
}
