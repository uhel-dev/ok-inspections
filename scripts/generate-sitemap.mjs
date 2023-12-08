import { globby } from "globby";
import prettier from "prettier";
import { fileURLToPath } from "url";
import path, { dirname } from "path";
import fs from "fs";
import hygraphClient from "../lib/hygraphClient.mjs";
import { gql } from "graphql-request";


// Get the directory of the current module file
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Read and parse the JSON file

const CAR_MAKES_PATH = path.join(process.cwd(), 'carMakes.json');
const LOCATIONS_PATH = path.join(process.cwd(), 'locations.json');

const { CAR_MAKES } = JSON.parse(fs.readFileSync(CAR_MAKES_PATH, 'utf-8'));
const { LOCATIONS } = JSON.parse(fs.readFileSync(LOCATIONS_PATH, 'utf-8'));

// update the URL to match your domain
const WEBSITE_URL = "https://24h-tyres.co.uk";

(async () => {
    // Ignore Next.js specific files (e.g., _app.js) and API routes.
    const pages = await globby([
        './src/pages/**/*{.tsx,.ts}',
        './src/app/**/*{.tsx,.ts}',
        '!src/pages/api',
        '!src/pages/_document.tsx',
    ]);

    console.log(pages)


  const { tyreBrandInformations } = await hygraphClient.request(
    gql`
      query MyQuery {
        tyreBrandInformations(first: 50) {
          brand
        }
      }
    `
  );

  const { serviceLocations } = await hygraphClient.request(
    gql`
      query MyQuery() {
        serviceLocations(first: 100) {
          serviceLocationSlug,
        }
      }
    `,
    {}
  );


  const brands = tyreBrandInformations.map(entry => entry.brand)
  const slugs = serviceLocations.map(entry => entry.serviceLocationSlug)

  let dateObj = new Date();
  let year = dateObj.getUTCFullYear();
  let month = (dateObj.getMonth() + 1).toString().padStart(2, '0');
  let day = dateObj.getUTCDate().toString().padStart(2, '0');
  let currentDate = `${year}-${month}-${day}`;

  const sitemap =
        '<?xml version="1.0" encoding="UTF-8"?>\n' +
        '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
        `<url>
            <loc>${WEBSITE_URL}</loc>
            <changefreq>weekly</changefreq>
            <lastmod>${currentDate}</lastmod>
        </url>` +
        pages
            .map(page => {

              const path = page
                    .replace("./src/pages", '')
                    .replace('.tsx', '')
                    .replace('.ts', '')
                    .replace('/index', '');
                if (path.includes('[make]')) {
                    return CAR_MAKES.map(({make}) => {
                        const newPath = path.replace('[make]', make.replaceAll(" ", "-").toLowerCase());
                        const routePath = newPath === '/index' ? '' : newPath;
                        return `
                            <url>
                                <loc>${WEBSITE_URL}${routePath}</loc>
                                <changefreq>weekly</changefreq>
                                <lastmod>${currentDate}</lastmod>
                            </url>
                        `;
                    }).join('');
                }
                if (path.includes('[brand]')) {
                  return brands.map(brand => {
                    const newPath = path.replace('[brand]', brand.replaceAll(" ", "-").toLowerCase());
                    const routePath = newPath === '/index' ? '' : newPath;
                    return `
                              <url>
                                  <loc>${WEBSITE_URL}${routePath}</loc>
                                  <changefreq>weekly</changefreq>
                                  <lastmod>${currentDate}</lastmod>
                              </url>
                          `;
                  }).join('');
                }
                if (path.includes('[location]')) {
                    return LOCATIONS.map(({location}) => {
                        const newPath = path.replace('[location]', location.toLowerCase());
                        const routePath = newPath === '/index' ? '' : newPath;
                        return `
                        <url>
                            <loc>${WEBSITE_URL}${routePath}</loc>
                            <changefreq>weekly</changefreq>
                            <lastmod>${currentDate}</lastmod>
                        </url>
                        `;
                    }).join('');
                }
                if (path.includes(`[tyreservicesinlocationurl]`)) {
                  return slugs.map((slug) => {
                    const newPath = path.replace('[tyreservicesinlocationurl]', `tyre-services-in-${slug}`);
                    const routePath = newPath === '/index' ? '' : newPath;
                    return `
                        <url>
                            <loc>${WEBSITE_URL}${routePath}</loc>
                            <changefreq>weekly</changefreq>
                            <lastmod>${currentDate}</lastmod>
                        </url>
                    `;
                  }).join('');
                }
                else {
                    const routePath = path === '/index' ? '' : path;
                    return `
                        <url>
                            <loc>${WEBSITE_URL}${routePath}</loc>
                            <changefreq>weekly</changefreq>
                            <lastmod>${currentDate}</lastmod>
                        </url>
                    `;
                }
            })
            .join('') +
        '</urlset>';

    // If you're not using Prettier, you can remove this.
    const formatted = prettier.format(sitemap, {
        parser: 'html',
    });

    fs.writeFileSync(path.join(process.cwd(), './public/sitemap.xml'), formatted);
})();
