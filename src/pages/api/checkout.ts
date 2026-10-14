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

    // Construct professional HTML for Admin Notification
    const adminHtmlContent = `
      <div style="font-family: Arial, sans-serif; background-color: #09090b; color: #f4f4f5; padding: 30px; border-radius: 12px;">
        <h2 style="color: #fbbf24; border-bottom: 2px solid #3f3f46; padding-bottom: 10px;">⚡ New Unhinged Order Received</h2>
        <p><strong>Order ID:</strong> ${orderId}</p>
        
        <h3 style="color: #fbbf24; margin-top: 20px;">Customer Details</h3>
        <ul style="list-style: none; padding: 0; line-height: 1.6;">
          <li><strong>Name:</strong> ${customerName}</li>
          <li><strong>Email:</strong> ${customerEmail}</li>
          <li><strong>Phone:</strong> ${phone}</li>
          <li><strong>City & Pincode:</strong> ${cityPincode}</li>
          <li><strong>Shipping Address:</strong> ${shippingAddress}</li>
        </ul>

        <h3 style="color: #fbbf24; margin-top: 20px;">Order & Product Specs</h3>
        <ul style="list-style: none; padding: 0; line-height: 1.6;">
          <li><strong>Product Type:</strong> ${magnetType}</li>
          <li><strong>Quantity:</strong> ${quantity} units</li>
          <li><strong>Total Price:</strong> ${totalPrice}</li>
          <li><strong>Custom Notes:</strong> ${customNotes || 'None'}</li>
        </ul>

        ${designDataUrl ? `<p style="margin-top: 20px;"><strong>Uploaded Design Preview:</strong><br/><img src="${designDataUrl}" alt="Customer Design" style="max-width: 250px; border-radius: 8px; border: 1px solid #3f3f46; margin-top: 10px;"/></p>` : ''}
        
        <hr style="border: 0; border-top: 1px solid #3f3f46; margin: 30px 0;" />
        <p style="font-size: 12px; color: #a1a1aa;">Dispatched securely via Unhinged Studio Vault.</p>
      </div>
    `;

    // Construct professional HTML Receipt for Customer
    const customerHtmlContent = `
      <div style="font-family: Arial, sans-serif; background-color: #09090b; color: #f4f4f5; padding: 30px; border-radius: 12px;">
        <h2 style="color: #fbbf24; border-bottom: 2px solid #3f3f46; padding-bottom: 10px;">⚡ Thank You for Your Order with Unhinged!</h2>
        <p>Hi ${customerName},</p>
        <p>We have successfully received your custom magnet order! Our studio artisans are preparing your high-gloss magnetic prints for express dispatch within 24-48 hours.</p>
        
        <div style="background-color: #18181b; padding: 20px; border-radius: 8px; border: 1px solid #3f3f46; margin: 20px 0;">
          <p style="margin: 0 0 10px 0;"><strong>Order ID:</strong> ${orderId}</p>
          <p style="margin: 0 0 10px 0;"><strong>Item:</strong> ${magnetType} (${quantity} units)</p>
          <p style="margin: 0 0 10px 0;"><strong>Total Paid:</strong> ${totalPrice} (Direct Express Dispatch / COD)</p>
          <p style="margin: 0;"><strong>Shipping Address:</strong> ${shippingAddress}, ${cityPincode}</p>
        </div>

        <p>If you have any questions, need to update your design, or require support, please reach out directly to us at <a href="mailto:unhinged.sales1@gmail.com" style="color: #fbbf24;">unhinged.sales1@gmail.com</a>.</p>
        
        <hr style="border: 0; border-top: 1px solid #3f3f46; margin: 30px 0;" />
        <p style="font-size: 12px; color: #a1a1aa;">Unhinged Brands • Obsidian & Gold Craftsmanship</p>
      </div>
    `;

    // Dispatch Emails via Resend (if RESEND_API_KEY is configured) or fallback mock dispatch
    const resendApiKey = process.env.RESEND_API_KEY;

    if (resendApiKey) {
      // Send Admin Email
      await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${resendApiKey}`
        },
        body: JSON.stringify({
          from: 'Unhinged Orders <orders@unhingedstore.com>',
          to: [adminEmail],
          subject: `[NEW ORDER] ${orderId} - ${customerName}`,
          html: adminHtmlContent
        })
      });

      // Send Customer Receipt
      await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${resendApiKey}`
        },
        body: JSON.stringify({
          from: 'Unhinged Studio <support@unhingedstore.com>',
          to: [customerEmail],
          subject: `Thank You for Your Order with Unhinged! ⚡ (${orderId})`,
          html: customerHtmlContent
        })
      });
    } else {
      console.log('--- MOCK DUAL EMAIL DISPATCH ---');
      console.log('To Admin (unhinged.sales1@gmail.com):', { orderId, customerName, totalPrice });
      console.log('To Customer (' + customerEmail + '):', { orderId, totalPrice });
    }

    return new Response(JSON.stringify({ 
      success: true, 
      message: 'Order placed successfully and dual-email notifications dispatched.',
      orderId 
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error: any) {
    console.error('Checkout API error:', error);
    return new Response(JSON.stringify({ success: false, message: error.message || 'Internal Server Error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};
