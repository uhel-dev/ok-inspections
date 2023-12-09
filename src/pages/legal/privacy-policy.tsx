import PageLayout from "../../../components/mainLayout/PageLayout";
import { CTA_MAIL } from "@/static/utils";
import Link from "next/link";

const privacyPolicyMetadata = {
  title: "Privacy Policy | 24h Tyres",
  description: "Read our privacy policy to understand how we collect, use, and protect your personal information. Your privacy is important to us.",
  url: "/legal/privacy-policy",
  canonical: "https://www.24h-tyres.co.uk/legal/privacy-policy",
  keywords: "privacy policy, data protection, personal information, 24h Tyres",
  imageUrl: "https://www.24h-tyres.co.uk/legal/privacy-policy.png",
};

export default function PrivacyPolicy() {
  return (
    <>
      <PageLayout metadata={privacyPolicyMetadata}>
        <section className={`kdev-section`}>
          <div className={`grid gap-2 font-uk-reg-plates text-lg`}>
            <div className={`grid gap-4`}>
              <h1 className={`kdev-h1`}>Privacy Policy</h1>
              <p className={``}>This Privacy Policy describes how 24h-tyres.co.uk (the “Site” or “we”) collects, uses, and
                discloses your Personal Information when you visit or make a purchase from the Site.</p>
            </div>
            <div className={`grid gap-4`}>
              <h2 className={`kdev-h3`}>Contact</h2>
              <p>After reviewing this policy, if you have additional questions, want more information about our privacy
                practices, or would like to make a complaint, please contact us by e-mail at {CTA_MAIL} or
                by mail using the details provided below:</p>
              <p>163 Woodland Gardens, Isleworth TW7 6LX, United Kingdom</p>
            </div>

            <div className={`grid gap-4`}>
              <h2 className={`kdev-h3`}>Collecting Personal Information</h2>
              <p>When you visit the Site, we collect certain information about your device, your interaction with the Site,
                and information necessary to process your purchases. We may also collect additional information if you
                contact us for customer support. In this Privacy Policy, we refer to any information about an identifiable
                individual (including the information below) as “Personal Information”. See the list below for more
                information about what Personal Information we collect and why.</p>
              <ul className={`grid gap-4`}>
                <div className={`grid gap-2`}>
                  <li className={`kdev-h4`}><u>Device information</u></li>
                  <ul>
                    <li><strong>Purpose of collection:</strong> to load the Site accurately for you, and to perform analytics
                      on Site usage to optimize our Site.
                    </li>
                    <li><strong>Source of collection:</strong> Collected automatically when you access our Site using cookies,
                      log files, web beacons, tags, or pixels, Google Tag Manager, Google Analytics, Facebook Pixel
                    </li>
                    <li><strong>Personal Information collected:</strong> version of web browser, IP address, time zone, cookie
                      information, what sites or products you view, search terms, and how you interact with the Site.
                    </li>
                  </ul>
                </div>
                <div className={`grid gap-4`}>
                  <li className={`kdev-h4`}><u>Order information</u></li>
                  <ul>
                    <li><strong>Purpose of collection:</strong> to provide products or services to you to fulfill our
                      contract, to process your payment information, arrange for shipping, and provide you with invoices
                      and/or order confirmations, communicate with you, screen our orders for potential risk or fraud, and
                      when in line with the preferences you have shared with us, provide you with information or advertising
                      relating to our products or services.
                    </li>
                    <li><strong>Source of collection:</strong> collected from you.</li>
                    <li><strong>Personal Information collected:</strong> name, billing address, shipping address, payment
                      information (including credit card numbers, email address, and phone number.
                    </li>
                  </ul>
                </div>
                <div className={`grid gap-4`}>
                  <li className={`kdev-h4`}><u>Customer support information</u></li>
                  <ul>
                    <li><strong>Purpose of collection:</strong> Marketing</li>
                    <li><strong>Source of collection:</strong> Across 24h-tyres website</li>
                    <li><strong>Personal Information collected:</strong> name, billing address, shipping address, payment
                      information (including credit card numbers, email address, and phone number.
                    </li>
                    <li><strong>Purpose of collection:</strong> to provide customer support.</li>
                    <li><strong>Source of collection:</strong> collected from you</li>
                  </ul>
                </div>
              </ul>
            </div>


            <div className={`grid gap-4`}>
              <h2 className={`kdev-h3`}>Sharing Personal Information</h2>
              <p>We share your Personal Information with service providers to help us provide our services and fulfill our
                contracts with you, as described above. For example:</p>
              <ul>
                <li>We use number of different online tyres stores across the UK to power our service anytime you need tyres.</li>
                <li>We may share your Personal Information to comply with applicable laws and regulations, to respond to a
                  subpoena, search warrant or other lawful request for information we receive, or to otherwise protect our
                  rights.
                </li>
              </ul>
            </div>

            <div className={`grid gap-4`}>
              <h3 className="kdev-h3">Behavioural Advertising</h3>
              <p>As described above, we use your Personal Information to provide you with targeted advertisements or
                marketing communications we believe may be of interest to you. For example:</p>
              <ul>
                <li>We use Google Analytics to help us understand how our customers use the Site. You can read more about
                  how Google uses your Personal Information here: <a href="https://www.google.com/intl/en/policies/privacy/"
                                                                     target="_blank"
                                                                     data-mce-href="https://www.google.com/intl/en/policies/privacy/">https://www.google.com/intl/en/policies/privacy/</a>.
                  You can also opt-out of Google Analytics here: <a href="https://tools.google.com/dlpage/gaoptout"
                                                                    target="_blank"
                                                                    data-mce-href="https://tools.google.com/dlpage/gaoptout">https://tools.google.com/dlpage/gaoptout</a>.
                </li>
                <li>We share information about your use of the Site, your purchases, and your interaction with our ads on
                  other websites with our advertising partners. We collect and share some of this information directly with
                  our advertising partners, and in some cases through the use of cookies or other similar technologies
                  (which you may consent to, depending on your location).
                </li>
                <li><i>Facebook Pixel</i></li>
              </ul>
              <p>For more information about how targeted advertising works, you can visit the Network Advertising
                Initiative’s (“NAI”) educational page at <a
                  href="https://www.networkadvertising.org/understanding-online-advertising/how-does-it-work"
                  target="_blank"
                  data-mce-href="https://www.networkadvertising.org/understanding-online-advertising/how-does-it-work">https://www.networkadvertising.org/understanding-online-advertising/how-does-it-work</a>.
              </p>
              <p>You can opt out of targeted advertising by:</p>
              <i> </i><i>
              <li>FACEBOOK - <a href="https://www.facebook.com/settings/?tab=ads" target="_blank"
                                data-mce-href="https://www.facebook.com/settings/?tab=ads">https://www.facebook.com/settings/?tab=ads</a>
              </li>
              <li>GOOGLE - <a href="https://www.google.com/settings/ads/anonymous" target="_blank"
                              data-mce-href="https://www.google.com/settings/ads/anonymous">https://www.google.com/settings/ads/anonymous</a>
              </li>
            </i>
              <p>Additionally, you can opt out of some of these services by visiting the Digital Advertising Alliance’s
                opt-out portal at: <a href="https://optout.aboutads.info/" target="_blank"
                                      data-mce-href="https://optout.aboutads.info/">https://optout.aboutads.info/</a>.</p>
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
              <div className={`grid gap-4`}>
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
            <div className={`grid gap-4`}>
              <h4 className={`kdev-h4`}>Do Not Track</h4>
              <p>Please note that because there is no consistent industry understanding of how to respond to “Do Not Track”
                signals, we do not alter our data collection and usage practices when we detect such a signal from your
                browser.</p>
            </div>
            <div className={`grid gap-4`}>
              <h4 className={`kdev-h4`}>Changes</h4>
              <p>We may update this Privacy Policy from time to time in order to reflect, for example, changes to our
                practices or for other operational, legal, or regulatory reasons.</p>
            </div>
            <div className={`grid gap-4`}>
              <h4 className={`kdev-h4`}>Complaints</h4>
              <p>As noted above, if you would like to make a complaint, please contact us by e-mail or by mail using the
                details provided under “Contact” above.</p>
            </div>
            <p>If you are not satisfied with our response to your complaint, you have the right to lodge your complaint
              with the relevant data protection authority. You can contact your local data protection authority, or our
              supervisory authority here: <Link href={`mailto:${CTA_MAIL}`}>{CTA_MAIL}</Link>
            </p>
            <p>Last updated: <i>27 November 2023</i></p>
          </div>
        </section>
      </PageLayout>
    </>
  )
}