import { useCallback, useState } from "react";

import hygraphClient from "../../lib/hygraphClient.mjs";
import { ServiceLocation } from "@/pages/tyres/[tyreservicesinlocationurl]";
import { gql } from "graphql-request";

const useServiceLocation = () => {
  const [serviceLocation, setServiceLocation] = useState<ServiceLocation | null>(null);
  const [isLoadedServiceLocation, setIsLoadedServiceLocation] = useState<boolean>(false);

  const loadServiceLocation = useCallback(async (tyreServicesInLocationUrl: string) => {
    if (!isLoadedServiceLocation) {
      const loc: string = tyreServicesInLocationUrl.replace("tyre-services-in-", "")
      const { serviceLocations }: any = await hygraphClient.request(
        gql`
            query MyQuery($tyreServicesInLocationUrl: String!) {
              serviceLocations(where: {serviceLocationSlug: $tyreServicesInLocationUrl}) {
                serviceLocationLocalisedHeading
                serviceLocationLocalisedSubheading
                serviceLocationLocalisedText
                serviceLocationName
                serviceLocationSlug
                serviceLocationLongitude
                serviceLocationLatitude
              }
            }
          `, {tyreServicesInLocationUrl: loc})
      setServiceLocation(serviceLocations[0]);
      setIsLoadedServiceLocation(true);
    }
  }, [isLoadedServiceLocation]);

  return { serviceLocation, loadServiceLocation, isLoadedServiceLocation };
};

export default useServiceLocation;
