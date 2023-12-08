import { useCallback, useState } from "react";
import { sanitiseName } from "@/utils/validators/sanitiseName";
import { CarMake } from "@/hooks/types";

const useCars = () => {
  const [cars, setCars] = useState<string[]>([]);
  const [isLoadedCars, setIsLoadedCars] = useState<boolean>(false);

  const loadCars = useCallback(async () => {
    if (!isLoadedCars) {
      const data = await import('../../carMakes.json');
      setCars(data.CAR_MAKES.map((entry: CarMake) => sanitiseName(entry.make)));
      setIsLoadedCars(true);
    }
  }, [isLoadedCars]);

  return { cars, loadCars, isLoadedCars };
};

export default useCars;
