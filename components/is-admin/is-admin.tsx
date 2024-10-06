import { useEffect } from 'react';
import { redirect, useRouter } from 'next/navigation';
import { adminService } from '../../services/admin/admin.service';

export default function IsAdmin(Component: any) {
  return function ValidateAdmin(props: any) {
    const router = useRouter();
    useEffect(() => {
      const isvalid = adminService.getToken();
      if (!isvalid) return router.push('/');
    }, []);

    return <Component {...props} />;
  };
}
