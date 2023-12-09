import { useCallback, useState } from "react";
import { ServiceLocation } from "@/pages/tyres/[tyreservicesinlocationurl]";

const useServiceLocation = () => {
  const [serviceLocation, setServiceLocation] = useState<ServiceLocation | null>(null);
  const [isLoadedServiceLocation, setIsLoadedServiceLocation] = useState<boolean>(false);

  const loadServiceLocation = useCallback(async (tyreServicesInLocationUrl: string) => {
    if (!isLoadedServiceLocation) {
      setServiceLocation({
        serviceLocationLocalisedHeading: "heading",
        serviceLocationLocalisedSubheading: "subheading",
        serviceLocationLocalisedText: "text",
        serviceLocationName: "locationName",
        serviceLocationSlug: "isleworth",
        serviceLocationLongitude: "50",
        serviceLocationLatitude: "-0.5"
      });
      setIsLoadedServiceLocation(true);
    }
  }, [isLoadedServiceLocation]);

  return { serviceLocation, loadServiceLocation, isLoadedServiceLocation };
};

export default useServiceLocation;
