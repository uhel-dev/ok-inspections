import { useCallback, useState } from "react";

const useLocations = () => {
  const [locations, setLocations] = useState<string[]>([]);
  const [isLoadedLocations, setIsLoadedLocations] = useState<boolean>(false);

  const loadLocations = useCallback(async () => {
    if (!isLoadedLocations) {
      setLocations([]);
      setIsLoadedLocations(true);
    }
  }, [isLoadedLocations]);

  return { locations, loadLocations, isLoadedLocations };
};

export default useLocations;
