import type { NextApiRequest, NextApiResponse } from 'next'

type ContactData = {
  name: string
  email: string
  company: string
  requirements: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  try {
    const { name, email, company, requirements } = req.body as ContactData

    // Validate required fields
    if (!name || !email || !company || !requirements) {
      return res.status(400).json({ message: 'All fields are required' })
    }

    // Send to external webhook
    const webhookUrl = process.env.WEBHOOK_URL
    if (webhookUrl) {
      await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          company,
          requirements,
          timestamp: new Date().toISOString(),
        }),
      })
    }

    return res.status(200).json({
      message: 'Form submitted successfully',
      data: { name, email, company },
    })
  } catch (error) {
    console.error('Contact form error:', error)
    return res.status(500).json({ message: 'Internal server error' })
  }
}
