'use client';

import { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

interface ThemeToggleProps {
  classComp?: string; // Optional prop for custom class names
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ classComp }) => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      className={`${classComp} themebtn p-2 rounded bg-gray-200 dark:bg-gray-800`}
    >
      {theme === 'light' ? (
        <>
          <div className="flex gap-1 justify-center items-center">
            <p>Dark</p>
            <FontAwesomeIcon icon={faMoon} />
          </div>
        </>
      ) : (
        <>
          <div className="flex gap-1 justify-center items-center">
            <p>Light</p>
            <FontAwesomeIcon icon={faSun} className="fa-thin" />
          </div>
        </>
      )}
    </button>
  );
};

export default ThemeToggle;
