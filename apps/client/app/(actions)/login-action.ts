'use server';

import axios, { AxiosResponse } from 'axios';
import { AuthReturnTypes } from '../accounts/login/sso/page';
import { cookies } from 'next/headers';

export const ssoLoginAction = async (
  _prev: AuthReturnTypes,
  formData: FormData,
): Promise<any> => {
  try {
    const C = await cookies();
    const req: AxiosResponse = await axios.post(
      `${process.env.BACKEND_SERVER_URL}/auth/login/sso`,
      formData,
      {
        headers: { 'Content-Type': 'application/json' },
      },
    );

    if (req?.data?.t && req?.data?.status) {
      C.set('t', req?.data?.t, {
        path: '/', // Ensure the cookie is available site-wide
        httpOnly: false, // Make the cookie inaccessible to JavaScript on the client-side
        maxAge: 60 * 60 * 24, // 1 day in seconds
      });
      return { success: { message: 'Success' }, error: { message: '' } };
    }

    return {
      success: { message: '' },
      error: { message: 'Login Failed! contact sys admin' },
    };
  } catch (error: any) {
    console.log(error.response.data);
    return {
      success: { message: '' },
      error: {
        message:
          error?.response?.data?.err ||
          error?.message ||
          'Internal Server Error',
      },
    };
  }
};
