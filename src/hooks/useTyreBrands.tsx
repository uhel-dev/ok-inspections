import { useCallback, useState } from "react";

const useTyreBrands = () => {
  const [tyreBrands, setTyreBrands] = useState<string[]>([]);
  const [isLoadedTyreBrands, setIsLoadedTyreBrands] = useState<boolean>(false);

  const loadTyreBrands = useCallback(async () => {
    if (!isLoadedTyreBrands) {
      setTyreBrands(["Dunlop", "Michelin"]);
      setIsLoadedTyreBrands(true);
    }
  }, [isLoadedTyreBrands]);

  return { tyreBrands, loadTyreBrands, isLoadedTyreBrands };
};

export default useTyreBrands;
