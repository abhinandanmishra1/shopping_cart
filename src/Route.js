import { useEffect, useState } from 'react';

const Route = ({ path, children }) => {
  // state to track URL and force component to re-render on change
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', onLocationChange);

    return () => {
      window.removeEventListener('popstate', onLocationChange);
    };
  }, []);

  return currentPath === path
    ? children
    : null;
};

export default Route;
