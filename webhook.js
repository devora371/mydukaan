export default function handler(req, res) {
    if (req.method === 'POST') {
        const payload = req.body;
        console.log('Webhook received:', payload);

        // Your webhook handling logic here
        res.status(200).json({ message: 'Webhook received successfully' });
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}

