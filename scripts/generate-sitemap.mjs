import { globby } from "globby";
import prettier from "prettier";
import { fileURLToPath } from "url";
import path, { dirname } from "path";
import fs from "fs";


// Get the directory of the current module file
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// update the URL to match your domain
const WEBSITE_URL = "https://ok-inspections.co.uk";

(async () => {
    // Ignore Next.js specific files (e.g., _app.js) and API routes.
    const pages = await globby([
        './src/pages/**/*{.tsx,.ts}',
        './src/app/**/*{.tsx,.ts}',
        '!src/pages/api',
        '!src/pages/_document.tsx',
    ]);

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
                // if (path.includes(`[tyreservicesinlocationurl]`)) {
                //   return slugs.map((slug) => {
                //     const newPath = path.replace('[tyreservicesinlocationurl]', `tyre-services-in-${slug}`);
                //     const routePath = newPath === '/index' ? '' : newPath;
                //     return `
                //         <url>
                //             <loc>${WEBSITE_URL}${routePath}</loc>
                //             <changefreq>weekly</changefreq>
                //             <lastmod>${currentDate}</lastmod>
                //         </url>
                //     `;
                //   }).join('');
                // }
                // else {
                const routePath = path === '/index' ? '' : path;
                return `
                    <url>
                        <loc>${WEBSITE_URL}${routePath}</loc>
                        <changefreq>weekly</changefreq>
                        <lastmod>${currentDate}</lastmod>
                    </url>
                `;
                // }
            })
            .join('') +
        '</urlset>';

    // If you're not using Prettier, you can remove this.
    const formatted = prettier.format(sitemap, {
        parser: 'html',
    });

    fs.writeFileSync(path.join(process.cwd(), './public/sitemap.xml'), formatted);
})();
