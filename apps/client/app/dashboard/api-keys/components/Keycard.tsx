'use client';

import React, { useRef, useState } from 'react';
import {
  faCheck,
  faCopy,
  faEye,
  faEyeSlash,
  faTrashCan,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNotification } from '../../context/NotificationContext';
import DeleteKeyConfirm from './DeleteKeyConfirm';

const Keycard: React.FC<any> = ({ value, func }) => {
  const [confirm, setConfirm] = useState<boolean>(false);
  const [copied, setIsCopied] = useState<boolean>(false);
  const [seeKey, setSeeKey] = useState<boolean>(false);
  const [apiKey, setApiKey] = useState<string>(value);
  const KeyRef = useRef<any>(apiKey);

  const closeModal = () => {
    setConfirm(false);
  };

  const deKey = async () => {
    setConfirm(false);
    await func();
  };

  const handleCopy = () => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      // Modern approach
      navigator.clipboard.writeText(apiKey).then(() => {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000); // Reset after 2 seconds
      });
    } else {
      // Fallback for older browsers and mobile devices
      KeyRef.current.select();
      KeyRef.current.setSelectionRange(0, apiKey.length); // For mobile compatibility
      try {
        document.execCommand('copy');
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000); // Reset after 2 seconds
      } catch (err) {
        console.error('Fallback: Oops, unable to copy', err);
      }
    }
  };

  const { setNotification, clearNotification } = useNotification();
  const triggerSuccess = () => {
    setNotification('success', 'Copied to clipboard');
    setTimeout(() => clearNotification(), 2000); // Clear after 3 seconds
  };

  return (
    <>
      <div className="w-full mb-3 py-3 px-5 bg-[#e7e5e59d] dark:bg-[#192330] rounded-lg flex justify-between items-center gap-3">
        <input
          type={seeKey ? 'text' : 'password'}
          className="w-full outline-0 bg-transparent"
          readOnly
          value={apiKey}
          ref={KeyRef}
          onClick={() => KeyRef.current?.select()}
        />
        <div className="flex justify-center items-center gap-3">
          {seeKey ? (
            <button
              className="duration-300 hover:text-[royalblue]"
              onClick={() => setSeeKey(!seeKey)}
            >
              <FontAwesomeIcon icon={faEyeSlash} className="text-lg" />
            </button>
          ) : (
            <button
              className="duration-300 hover:text-[royalblue]"
              onClick={() => setSeeKey(!seeKey)}
            >
              <FontAwesomeIcon icon={faEye} className="text-lg" />
            </button>
          )}
          <button
            className="duration-300 hover:text-[royalblue]"
            onClick={() => {
              handleCopy();
              triggerSuccess();
            }}
          >
            {copied ? (
              <FontAwesomeIcon
                icon={faCheck}
                className="text-lg text-green-500"
              />
            ) : (
              <FontAwesomeIcon icon={faCopy} className="text-lg" />
            )}
          </button>
          <button
            className="duration-300 hover:text-[royalblue] text-red-500"
            onClick={() => setConfirm(true)}
          >
            <FontAwesomeIcon icon={faTrashCan} className="text-lg" />
          </button>
        </div>
      </div>
      {confirm ? (
        <DeleteKeyConfirm disable={closeModal} deleteKey={deKey} />
      ) : null}
    </>
  );
};

export default Keycard;
