import axios, { AxiosResponse } from 'axios';
import Cookie from 'js-cookie';

export async function fetchDashboardData() {
  try {
    const req: AxiosResponse = await axios.get(
      process.env.NEXT_PUBLIC_USER_DATA as string,
      {
        headers: {
          Authorization: `Bearer ${Cookie.get('t')}`,
        },
      }
    );

    return req;
  } catch (error: any) {
    console.log(error.response);
    return error;
  }
}
