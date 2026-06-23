'use server';

import axios, { AxiosResponse } from 'axios';
import { AuthReturnTypes } from '../accounts/login/sso/page';

export const ssoSigninAction = async (
  _prev: AuthReturnTypes,
  formData: FormData,
): Promise<any> => {
  try {
    const req: AxiosResponse = await axios.post(
      `${process.env.BACKEND_SERVER_URL}/auth/new/sso`,
      formData,
      {
        headers: { 'Content-Type': 'application/json' },
      },
    );
    if (req?.data?.status == 201)
      return { success: { message: 'Success' }, error: { message: '' } };
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
