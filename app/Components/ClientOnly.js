import { useState, useEffect } from "react";
import LoadingScreen from "./LoadingScreen";

const ClientOnly = ({ children }) => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return <LoadingScreen />;

  return <>{children}</>;
};

export default ClientOnly;
