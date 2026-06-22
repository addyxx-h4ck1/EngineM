import {
  faCheckCircle,
  faExclamationCircle,
  faExclamationTriangle,
  faSpinner,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useNotification } from '../context/NotificationContext';

const Notification = () => {
  const { notify, type, message } = useNotification();
  if (!notify) return null;

  let bgColor = '';
  if (type === 'success') bgColor = 'bg-green-200';
  if (type === 'error') bgColor = 'bg-red-200';
  if (type === 'warning') bgColor = 'bg-orange-200';
  if (type === 'loading') bgColor = 'bg-blue-200';

  let textColor = '';
  if (type === 'success') textColor = 'text-green-600';
  if (type === 'error') textColor = 'text-red-600';
  if (type === 'warning') textColor = 'text-yellow-600';
  if (type === 'loading') textColor = 'text-blue-600';

  return (
    <section
      className={`px-5 ${bgColor} absolute top-[100px] z-50 w-[95%] max-w-[400px] rounded-lg h-[40px] inset-0 m-auto flex items-center gap-4 text-xs`}
    >
      {type === 'success' ? (
        <FontAwesomeIcon icon={faCheckCircle} className="text-green-600" />
      ) : null}
      {type === 'error' ? (
        <FontAwesomeIcon icon={faExclamationCircle} className="text-red-600" />
      ) : null}
      {type === 'warning' ? (
        <FontAwesomeIcon
          icon={faExclamationTriangle}
          className="text-yellow-600"
        />
      ) : null}
      {type === 'loading' ? (
        <FontAwesomeIcon icon={faSpinner} className="text-blue-600 fa-spin" />
      ) : null}

      <p className={`${textColor}`}>{message}</p>
    </section>
  );
};

export default Notification;
