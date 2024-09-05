// pages/api/plans.js
import axios from 'axios';
import { getCookie } from 'cookies-next';

export default async function handler(req, res) {


  if (req.method === 'GET') {
    try {
      const token = getCookie("authtoken");
      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/v1/user/plan/get-plan`, {
        headers: {
          'Authorization': `Bearer ${token}`
        },
      });
      res.status(200).json(response.data);
    } catch (error) {
      console.error('Error fetching plans:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
