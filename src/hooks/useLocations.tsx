import { useCallback, useState } from "react";
import { sanitiseName } from "@/utils/validators/sanitiseName";
import hygraphClient from "../../lib/hygraphClient.mjs";
import { ServiceLocation } from "@/pages/tyres/[tyreservicesinlocationurl]";
import { gql } from "graphql-request";

const useLocations = () => {
  const [locations, setLocations] = useState<string[]>([]);
  const [isLoadedLocations, setIsLoadedLocations] = useState<boolean>(false);

  const loadLocations = useCallback(async () => {
    if (!isLoadedLocations) {
      // const data = await import('../../locations.json');
      // const sanitizedLocations = data.LOCATIONS.map((entry: Location) => sanitiseName(entry.location))
      const { serviceLocations }: any = await hygraphClient.request(
        gql`
      query MyQuery() {
        serviceLocations(first: 100) {
          serviceLocationName
        }
      }
    `, {})
      setLocations(serviceLocations.map((entry: ServiceLocation) => sanitiseName(entry.serviceLocationName)));
      setIsLoadedLocations(true);
    }
  }, [isLoadedLocations]);

  return { locations, loadLocations, isLoadedLocations };
};

export default useLocations;
