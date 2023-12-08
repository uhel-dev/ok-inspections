import { useCallback, useState } from "react";
import { sanitiseName } from "@/utils/validators/sanitiseName";
import hygraphClient from "../../lib/hygraphClient.mjs";
import { gql } from "graphql-request";
import { TyreBrand } from "@/hooks/types";

const useTyreBrands = () => {
  const [tyreBrands, setTyreBrands] = useState<string[]>([]);
  const [isLoadedTyreBrands, setIsLoadedTyreBrands] = useState<boolean>(false);

  const loadTyreBrands = useCallback(async () => {
    if (!isLoadedTyreBrands) {
      const { tyreBrandInformations }: any = await hygraphClient.request(
        gql`
      query MyQuery {
        tyreBrandInformations(first: 50) {
          brand
        }
      }
    `
      );
      setTyreBrands(tyreBrandInformations.map((entry: TyreBrand) => sanitiseName(entry.brand)));
      setIsLoadedTyreBrands(true);
    }
  }, [isLoadedTyreBrands]);

  return { tyreBrands, loadTyreBrands, isLoadedTyreBrands };
};

export default useTyreBrands;
