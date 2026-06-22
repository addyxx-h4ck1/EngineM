import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import { ComponentType, ReactNode } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

// Define a type for the props that will be forwarded
interface WithAuthProps {
  children: ReactNode;
}

const withAuth = <P extends WithAuthProps>(
  WrappedComponent: ComponentType<P>
) => {
  const AuthComponent = (props: P) => {
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
      const token = Cookies.get('t');
      if (!token) {
        router.push('/accounts/login');
      } else {
        setLoading(false);
      }
    }, [router]);

    if (loading) {
      return (
        <div className="w-full min-h-screen bg-[#0E0E23] text-white flex justify-center items-center text-lg gap-4">
          <FontAwesomeIcon icon={faSpinner} className="fa-spin fa-solid" />
          Please wait...
        </div>
      );
    }

    return <WrappedComponent {...props} />;
  };

  return AuthComponent;
};

export default withAuth;
