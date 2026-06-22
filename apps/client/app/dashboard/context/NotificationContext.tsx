// context/NotificationContext.tsx
import React, { createContext, useState, useContext, ReactNode } from 'react';

type NotificationType = 'success' | 'error' | 'warning' | 'loading' | null;

type NotificationContextType = {
  notify: boolean;
  type: NotificationType;
  message: string;
  setNotification: (type: NotificationType, message: string) => void;
  clearNotification: () => void;
};

// Create the Notification Context
const NotificationContext = createContext<NotificationContextType | undefined>(
  undefined
);

// Create a provider component
export const NotificationProvider = ({ children }: { children: ReactNode }) => {
  const [notify, setNotify] = useState(false);
  const [type, setType] = useState<NotificationType>(null);
  const [message, setMessage] = useState('');

  const setNotification = (type: NotificationType, message: string) => {
    setNotify(true);
    setType(type);
    setMessage(message);
  };

  const clearNotification = () => {
    setNotify(false);
    setType(null);
    setMessage('');
  };

  return (
    <NotificationContext.Provider
      value={{ notify, type, message, setNotification, clearNotification }}
    >
      {children}
    </NotificationContext.Provider>
  );
};

// Hook to use notification context in any component
export const useNotification = () => {
  const context = useContext(NotificationContext);
  if (context === undefined) {
    throw new Error(
      'useNotification must be used within a NotificationProvider'
    );
  }
  return context;
};
