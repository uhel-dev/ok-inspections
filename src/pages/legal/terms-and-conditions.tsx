import PageLayout from "../../../components/mainLayout/PageLayout";
import Link from "next/link";

const termsAndConditionsMetadata = {
  title: "Terms and Conditions | 24h Tyres",
  description: "Read our terms and conditions to understand the rules and guidelines for using our website and services. By using our website, you agree to abide by these terms.",
  url: "/legal/terms-and-conditions",
  canonical: "https://www.24h-tyres.co.uk/legal/terms-and-conditions",
  keywords: "terms and conditions, website usage, rules and guidelines, 24h Tyres",
  imageUrl: "https://www.24h-tyres.co.uk/legal/terms-and-conditions.png",
};

export default function TermsAndCondition() {
  return (
    <>
      <PageLayout metadata={termsAndConditionsMetadata}>
        <section className={`kdev-section`}>
          <div className={`grid gap-2 font-uk-reg-plates text-lg`}>
            <div className={`grid gap-4`}>
              <h1 className={`kdev-h1`}>Terms and Conditions</h1>
              <div className={`grid gap-2`}>
                <p>
                  Please carefully review and consider the following terms and conditions {`('The Conditions')`} as they outline the guidelines for the operation of our website and the provision of services ordered through this website or by phone.
                </p>
                <p>
                  We retain the right to modify the content of this website or The Conditions without prior notice.
                </p>
                <p>
                  It is crucial to thoroughly read The Conditions, as they have implications for your legal rights and responsibilities. If you do not agree with these terms, kindly refrain from accessing or using the website or proceeding with your service request. By placing an order for any of our services, you acknowledge and accept these Terms and Conditions. We recommend printing a copy of these Conditions for your future reference.
                </p>
                <p>
                  It is your responsibility to be familiar with the website and its terms, and to stay informed about any updates or changes.
                </p>
                <p>
                  The Website Conditions do not impact your statutory rights.
                </p>
              </div>


            </div>
            <div className={`grid gap-4`}>
              <h2 className={`kdev-h3`}>Request Acceptance</h2>
              <div className={`grid gap-2`}>
                <p>
                  By submitting a tyre help request, we consider this as your request to procure the agreed-upon local tyres services. Until we have received and confirmed your request, no formal agreement exists between you and us. Once a request has been submitted, you will receive an acknowledgment indicating that we have received your request, but it does not constitute acceptance.
                </p>
                <p>
                  We will inform you if we are unable to fulfill your request (for example, but not limited to, unavailability of the requested services). If, after accepting your request, we find that the requested services cannot be provided, or if there was an error in pricing, description, or details, we reserve the right to not proceed with the request and may propose an alternative solution.
                </p>
              </div>
            </div>
            <div className={`grid gap-4`}>
              <h3 className={`kdev-h3`}>Phone & Online Requests</h3>
              <div className={`grid gap-2`}>
                <p>
                  To request our tyre services via phone or online, you must be at least 18 years old and legally eligible to enter into contracts. If you do not meet these requirements, you may not use this service.
                </p>
                <p>
                  Requests made through phone calls or on our website will be governed by these Terms and Conditions. When you place a request, it will be considered as your request for our tyre services.
                </p>
                <p>
                  We retain the right to decline any requests made through our website or phone (regardless of whether we have acknowledged the request).
                </p>
                <p>
                  You are responsible for providing accurate information when making your request and ensuring the details regarding the requested services are correct. The Company holds no liability for any inaccuracies in the information provided by you.
                </p>
                <p>
                  The information available on our website is not tailored to meet your individual needs. It is your sole responsibility to confirm that the tyre services you request are suitable for your specific requirements. You are also responsible for the accuracy of all details provided as part of your request.
                </p>
              </div>
            </div>
            <div className={`grid gap-4`}>
              <h3 className={`kdev-h3`}>Information Accuracy</h3>
              <div className={`grid gap-2`}>
                <p>
                  Despite the {`Company's`} diligent efforts to ensure accurate information is displayed on the website, occasional minor errors or variations may infrequently occur.
                </p>
                <p>
                  Consequently, the Company reserves the right to correct any clerical or other errors or omissions in any information issued by the Company, including on the website, without incurring any liability.
                </p>
              </div>
            </div>

            <div className={`grid gap-4`}>
              <h4 className={`kdev-h3`}>Refund Policy</h4>
              <div className={`grid gap-2`}>
                <p>
                  Refunds for our services may vary depending on the individual tyre fitter and their refund policies. Please note that there is a non-refundable booking fee of £5 to £10, which will not be refundable.
                </p>
                <p>
                  Any refunds provided will be subject to the specific terms and conditions of the tyre fitter you engage with. Refund amounts may be determined based on the tyre {`fitter's`} policies and the nature of the service provided.
                </p>
                <p>
                  Your statutory rights remain unaffected by this policy. Please allow up to 7 working days for any applicable refunds to be processed into your account.
                </p>
              </div>
            </div>

            <div className={`grid gap-4`}>
              <h4 className={`kdev-h3`}>Important Disclaimers</h4>
              <div className={`grid gap-2`}>
                <p>
                  In the event of a mechanical issue with your vehicle or if the ordered tyre does not precisely match the existing one, you may be required to provide authorization by signing a disclaimer before our service proceeds. This disclaimer is intended to protect both parties and may be requested for various scenarios, including but not limited to:
                </p>
                <ul className={`list-disc`}>
                  <li>Fitting a different tyre in terms of size, OEM, tyre type, season, speed rating, or load rating.</li>
                  <li>Identifying any pre-existing mechanical problems that, if left unaddressed, could potentially lead to further damage, such as overtightened locking nuts/bolts, locked suspension, or seized wheels.</li>
                  <li>Installing non-standard wheels, such as aftermarket alloys.</li>
                  <li>Dealing with issues related to the condition of the wheel to be fitted, including visible damage, a buckled rim, or a cracked rim.</li>
                  <li>Addressing problems associated with the TPMS (Tire Pressure Monitoring System) valve/system, if applicable to your vehicle.</li>
                </ul>
                <p>
                  {`It's`} important to understand that by proceeding with our services, you acknowledge and agree to these disclaimers.
                </p>
              </div>
            </div>
          </div>
        </section>
      </PageLayout>
    </>
  )
}