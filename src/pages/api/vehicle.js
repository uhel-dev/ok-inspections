import axios from "axios";

const BASE_URL = `https://uk1.ukvehicledata.co.uk/api/datapackage/TyreData?v=2&api_nullitems=1&auth_apikey=${process.env.API_KEY}`

export default async function handler(req, res) {
    const { registration } = req.query;

    try {
        const response = await axios.get(`${BASE_URL}&key_VRM=${registration}`, {
            headers: {
                "Access-Control-Allow-Origin": "*"
            }
        });

        const tyreSizes = response.data.Response.DataItems.TyreDetails.RecordList.map(e => e.Front.Tyre.Size)
        const vehicleData = response.data.Response.DataItems.VehicleDetails
        const mappedResponse = {
            ...vehicleData,
            tyreSizes
        }

        res.json(mappedResponse);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred' });
    }
}
