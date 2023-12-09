import PageLayout from "../../../components/mainLayout/PageLayout";
import Link from "next/link";

const cookiesPolicyMetadata = {
  title: "Cookies Policy | 24h Tyres",
  description: "Learn about how we use cookies on our website to improve user experience and provide relevant content. Your privacy is important to us.",
  url: "/legal/cookies-policy",
  canonical: "https://www.24h-tyres.co.uk/legal/cookies-policy",
  keywords: "cookies policy, website cookies, data privacy, 24h Tyres",
  imageUrl: "https://www.24h-tyres.co.uk/legal/cookies-policy.png",
};

export default function CookiesPolicy() {
  return (
    <>
      <PageLayout metadata={cookiesPolicyMetadata}>
        <section className={`kdev-section`}>
          <div className={`grid gap-2 font-uk-reg-plates text-lg`}>
            <div className={`grid gap-4`}>
              <h1 className={`kdev-h1`}>Cookies Policy</h1>
              <p className={``}>
                This Cookie Policy explains how 24h Tyres {` ("Company", "we", "us", and "our")`} uses cookies and similar technologies to recognise you when you visit our websites at https://www.24h-tryes.co.uk. It explains what these technologies are and why we use them, as well as your rights to control our use of them.


                In some cases we may use cookies to collect personal information, or that becomes personal information if we combine it with other information.
              </p>
            </div>
            <div className={`grid gap-4`}>
              <h2 className={`kdev-h3`}>What are cookies?</h2>
              <p className={``}>
                Cookies are small data files placed on your computer or mobile device when you visit a website. They serve various purposes, such as making websites work efficiently, remembering your preferences, and enhancing your online experience. Cookies enable websites to provide personalized content and improve functionality during your visit.
              </p>
            </div>
            <div className={`grid gap-4`}>
              <h3 className={`kdev-h3`}>Why do we use cookies?</h3>
              <p className={``}>
                We use cookies on 24h-tyres.co.uk to enhance your experience. These are small data files that help our website function smoothly. We also use third-party cookies for features like advertising and analytics. By using our site, you agree to our use of cookies. You can manage your preferences in your browser settings.
              </p>
            </div>
            <div className={`grid gap-4`}>
              <h2 className={`kdev-h3`}>How to Customize Your Cookie Preferences?</h2>
              <p>
                You have the flexibility to modify your cookie preferences at any time. Simply visit our <a href="#">Manage Cookie Settings</a> page to revisit your consent choices and make updates as needed.
              </p>
              <p>
                Moreover, different web browsers offer various options to block or delete cookies from websites. To adjust these settings, follow the instructions in the support documents provided by the major web browsers:
              </p>
              <ul>
                <li>
                  <Link href="https://support.google.com/chrome/answer/95647?hl=en-GB&co=GENIE.Platform%3DDesktop" target="_blank" rel="noopener noreferrer"><u>Google Chrome</u>: Manage Cookies in Chrome</Link>
                </li>
                <li>
                  <Link href="https://support.apple.com/en-gb/HT201265" target="_blank" rel="noopener noreferrer"><u>Safari</u>: Manage Cookies in Safari</Link>
                </li>
                <li>
                  <Link href="https://support.mozilla.org/en-US/questions/1287973" target="_blank" rel="noopener noreferrer"><u>Mozilla Firefox</u>: Clear Cookies in Firefox</Link>
                </li>
              </ul>
              <p>
                If {`you're`} using a different web browser, please consult your {`browser's`} official support documents for guidance.
              </p>
            </div>

            <div className={`grid gap-4`}>
              <h3 className={`kdev-h3`}>Cookies</h3>
              <p>A cookie is a small amount of information that’s downloaded to your computer or device when you visit our
                Site. We use a number of different cookies, including functional, performance, advertising, and social media
                or content cookies. Cookies make your browsing experience better by allowing the website to remember your
                actions and preferences (such as login and region selection). This means you don’t have to re-enter this
                information each time you return to the site or browse from one page to another. Cookies also provide
                information on how people use the website, for instance whether it’s their first time visiting or if they
                are a frequent visitor.</p>
              <p>We use the following cookies to optimize your experience on our Site and to provide our services.</p>
              <div className={`grid gap-2`}>
                <h4 className={`kdev-h4`}>Cookies Necessary for the Functioning of the Store</h4>
                <table className={`border-collapse border border-slate-400`}>
                  <thead>
                  <tr>
                    <th className={`border border-slate-300 p-4`}><strong>Name</strong></th>
                    <th className={`border border-slate-300 p-4`}><strong>Function</strong></th>
                    <th className={`border border-slate-300 p-4`}><strong>Duration</strong></th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td className={`border border-slate-300 p-4`}>_ga</td>
                    <td className={`border border-slate-300 p-4`}>Google Analytics</td>
                    <td className={`border border-slate-300 p-4`}>12w</td>
                  </tr>
                  <tr>
                    <td className={`border border-slate-300 p-4`}>_ga_W2H41VV65X</td>
                    <td className={`border border-slate-300 p-4`}>Google Tag Manager</td>
                    <td className={`border border-slate-300 p-4`}>12w</td>
                  </tr>
                  </tbody>
                </table>
              </div>
              <p>The length of time that a cookie remains on your computer or mobile device depends on whether it is a
                “persistent” or “session” cookie. Session cookies last until you stop browsing and persistent cookies last
                until they expire or are deleted. Most of the cookies we use are persistent and will expire between 30
                minutes and two years from the date they are downloaded to your device.</p>
              <p>You can control and manage cookies in various ways. Please keep in mind that removing or blocking cookies
                can negatively impact your user experience and parts of our website may no longer be fully accessible.</p>
              <p>Most browsers automatically accept cookies, but you can choose whether or not to accept cookies through
                your browser controls, often found in your browser’s “Tools” or “Preferences” menu. For more information on
                how to modify your browser settings or how to block, manage or filter cookies can be found in your browser’s
                help file or through such sites as: <a href="https://www.allaboutcookies.org" target="_blank"
                                                       data-mce-href="https://www.allaboutcookies.org">www.allaboutcookies.org</a>.
              </p>
              <p>Additionally, please note that blocking cookies may not completely prevent how we share information with
                third parties such as our advertising partners. To exercise your rights or opt-out of certain uses of your
                information by these parties, please follow the instructions in the “Behavioural Advertising” section
                above.</p>
            </div>
          </div>
        </section>
      </PageLayout>
    </>
  )
}