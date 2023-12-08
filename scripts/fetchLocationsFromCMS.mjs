// scripts/fetchData.js


import hygraphClient from "../lib/hygraphClient.mjs";
import fs from "fs";
import path from 'path';
import { fileURLToPath } from 'url';
import { gql } from "graphql-request";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


(async () => {
  const { serviceLocations } = await hygraphClient.request(
    gql`
      query MyQuery() {
        serviceLocations(first: 100) {
          serviceLocationSlug
          serviceLocationLocalisedHeading
          serviceLocationLocalisedSubheading
          serviceLocationLocalisedText
          serviceLocationName
          serviceLocationLatitude
          serviceLocationLongitude
        }
      }
    `, {})


  fs.writeFileSync(path.join(process.cwd(), './serviceLocations.json'), JSON.stringify(serviceLocations));
})();