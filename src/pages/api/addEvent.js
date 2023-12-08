import { google } from "googleapis";

export default async function handler(req, res) {
    try {
        const { phoneNumber, postcode } = req.body;

        const auth = new google.auth.GoogleAuth({
            credentials: {
                client_email: process.env.GOOGLE_CLIENT_EMAIL,
                private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
            },
            projectId: process.env.GOOGLE_PROJECT_ID,
            scopes: ['https://www.googleapis.com/auth/calendar.events'],
        });

        const authClient = await auth.getClient();
        const calendar = google.calendar({ version: 'v3', auth: authClient });

        const event = {
            summary: 'New Tyre Request',
            description: `Phone Number: ${phoneNumber}, Postcode: ${postcode}`,
            start: {
                dateTime: new Date(),
                timeZone: 'UTC',
            },
            end: {
                dateTime: new Date(Date.now() + 60 * 1000), // 1 minutes later
                timeZone: 'UTC',
            },
        };

        const response = await calendar.events.insert({
            calendarId: process.env.CALENDAR_ID,
            resource: event,
        });

        console.log('Event created:', response.data.htmlLink);
        res.status(200).json({ message: 'Event created' });
    } catch (error) {
        console.log('--- UHEL ERROR STARTS ---')
        console.log(error)
        console.log('--- UHEL ERROR ENDS ---')
        console.error('Error adding event:', error);
        res.status(500).json({ error: 'Failed to add event' });
    }
}
