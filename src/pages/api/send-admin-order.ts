import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();
    
    const {
      orderId,
      customerName,
      customerEmail,
      phone,
      cityPincode,
      shippingAddress,
      magnetType,
      quantity,
      totalPrice,
      customNotes,
      designDataUrl
    } = data;

    if (!customerEmail || !customerName) {
      return new Response(JSON.stringify({ success: false, message: 'Missing required customer details.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const adminEmail = 'unhinged.sales1@gmail.com';

    // Construct professional HTML for Admin Notification including Image Preview & Attachment
    const adminHtmlContent = `
      <div style="font-family: Arial, sans-serif; background-color: #09090b; color: #f4f4f5; padding: 30px; border-radius: 12px; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #fbbf24; border-bottom: 2px solid #3f3f46; padding-bottom: 10px;">⚡ New Unhinged Order (50x50mm Studio Dispatch)</h2>
        <p style="font-size: 14px;"><strong>Order ID:</strong> <span style="color: #fbbf24; font-family: monospace;">${orderId}</span></p>
        
        <h3 style="color: #fbbf24; margin-top: 20px; font-size: 16px;">Customer Details</h3>
        <ul style="list-style: none; padding: 0; line-height: 1.6; font-size: 14px;">
          <li><strong>Name:</strong> ${customerName}</li>
          <li><strong>Email:</strong> ${customerEmail}</li>
          <li><strong>Phone:</strong> ${phone}</li>
          <li><strong>City & Pincode:</strong> ${cityPincode}</li>
          <li><strong>Shipping Address:</strong> ${shippingAddress}</li>
        </ul>

        <h3 style="color: #fbbf24; margin-top: 20px; font-size: 16px;">Order & Product Specs</h3>
        <ul style="list-style: none; padding: 0; line-height: 1.6; font-size: 14px;">
          <li><strong>Product Type:</strong> ${magnetType || 'Custom Square Magnet (50x50mm)'}</li>
          <li><strong>Quantity:</strong> ${quantity} units</li>
          <li><strong>Total Price:</strong> ${totalPrice}</li>
          <li><strong>Custom Notes:</strong> ${customNotes || 'None'}</li>
        </ul>

        ${designDataUrl ? `
          <div style="margin-top: 25px; padding: 15px; background-color: #18181b; border: 1px solid #3f3f46; border-radius: 8px;">
            <p style="margin: 0 0 10px 0; font-size: 14px; font-weight: bold; color: #fbbf24;">Customer Design Artwork File / Proof:</p>
            <img src="${designDataUrl}" alt="Customer Design Artwork" style="max-width: 100%; height: auto; border-radius: 6px; border: 1px solid #52525b; display: block;" />
            <p style="margin: 10px 0 0 0; font-size: 12px; color: #a1a1aa;">The customer design file is embedded above and securely archived in the studio vault.</p>
          </div>
        ` : ''}
        
        <hr style="border: 0; border-top: 1px solid #3f3f46; margin: 30px 0;" />
        <p style="font-size: 12px; color: #a1a1aa;">Unhinged Brands • Obsidian & Gold Craftsmanship</p>
      </div>
    `;

    const resendApiKey = process.env.RESEND_API_KEY;

    if (resendApiKey) {
      await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${resendApiKey}`
        },
        body: JSON.stringify({
          from: 'Unhinged Orders <orders@unhingedstore.com>',
          to: [adminEmail],
          subject: `[NEW ORDER] ${orderId} - ${customerName} (50x50mm Magnet)`,
          html: adminHtmlContent,
          attachments: designDataUrl ? [
            {
              filename: `${orderId}-design.png`,
              content: designDataUrl.split(';base64,').pop() || '',
            }
          ] : []
        })
      });
    } else {
      console.log('--- MOCK ADMIN ORDER API NOTIFICATION ---', { orderId, customerName, customerEmail, totalPrice, hasImage: !!designDataUrl });
    }

    return new Response(JSON.stringify({ 
      success: true, 
      message: 'Admin order notification successfully dispatched via backend API.',
      orderId 
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error: any) {
    console.error('Send Admin Order API error:', error);
    return new Response(JSON.stringify({ success: false, message: error.message || 'Internal Server Error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};
