import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

async function sendEmail(req, res) {
    try {
        await sendgrid.send({
            to: {
                email: "24htyres1london@gmail.com",
                name: "24H Tyres"
            },
            from: {
                email: "24htyreslondon@gmail.com",
                name: "24H Tyres"
            },
            subject: `${req.body.subject}`,
            html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
      <html lang="en">
      <head>
        <meta charset="utf-8">
      
        <title>The HTML5 Herald</title>
        <meta name="description" content="The HTML5 Herald">
        <meta name="author" content="SitePoint">
      <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
      
        <link rel="stylesheet" href="css/styles.css?v=1.0">
      
      </head>
      
      <body>
        <div class="img-container" style="display: flex;justify-content: center;align-items: center;border-radius: 5px;overflow: hidden; font-family: 'helvetica', 'ui-sans';"></div>
        <div class="container" style="margin-left: 20px;margin-right: 20px;">
            <h3>You've got a new callback request from ${req.body.phoneNumber}</h3>
            <div style="font-size: 16px;">
                <p>${req.body.message}</p>
                <br>
            </div>
            <p class="footer" style="font-size: 16px;padding-bottom: 20px;border-bottom: 1px solid #D1D5DB;">Regards<br>Jakub Uher<br>Software Developer<br>+447496122886</p>
            <div class="footer-links" style="display: flex;justify-content: center;align-items: center;">
                <a href="https://kdev-solutions.co.uk/" style="text-decoration: none;margin: 8px;color: #9CA3AF;">Website</a>                
            </div>
        </div>
      </body>
      </html>`
        });
    } catch (error) {
        // console.log(error);
        return res.status(error.statusCode || 500).json({ error: error.message });
    }

    return res.status(200).json({ error: "" });
}

export default sendEmail;