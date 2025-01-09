import React from 'react';
import '../styles/Billing.css'; // Import the CSS file

const Billing = () => {
  const runningInvoice = {
    total: 3059.0, // Total of all services
    billingPeriod: '08/08/24 - 08/08/25',
    lastBilledOn: '11/08/24',
    previousInvoice: 0.0,
    thisTimeLastMonth: 0.0,
  };

  const descriptions = [
    { name: 'Server Security Management Software', amount: 2160.0, billingPeriod: '08/08/24 - 08/08/25' },
    { name: 'Premium Add-ons', amount: 899.0, billingPeriod: '11/08/24 - 11/08/25' },
  ];

  const billingProfile = {
    createdOn: '01/19/24 - 11:07:50 PM',
    emailAddress: 'admin@serversecure.com',
    invoiceAddress: '1234 Security Lane, Tech City, USA',
  };

  const planDetails = 'Server Security Premium Plan';
  const paymentMethod = 'Not added yet.';

  return (
    <div className="billing-page">
      <div className="billing-header">
        <h1>Billing</h1>
        <div className="billing-tabs">
          <span className="active-tab">Overview</span>
          <span>Invoices</span>
          <span>Cost Explorer</span>
        </div>
      </div>
      <div className="billing-info">
        <p className="info-banner">
          <strong>Preview:</strong> Manage your server security efficiently and track all your payments and add-ons.{' '}
          <a href="#">Learn more.</a>
        </p>
      </div>
      <div className="billing-main">
        {/* Left column */}
        <div className="left-column">
          <div className="invoice-summary">
            <h2>Running Invoice Total</h2>
            <div className="invoice-details">
              <div>
                <p style={{ fontWeight: 'bold' }}>Billing Period</p>
                <p >{runningInvoice.billingPeriod}</p>
              </div>
              <div>
                <p style={{ fontWeight: 'bold' }}>Last Billed On</p>
                <p >{runningInvoice.lastBilledOn}</p>
              </div>

              {/* <div>
                <p>Previous Invoice</p>
                <p>${runningInvoice.previousInvoice.toFixed(2)}</p>
              </div> */}
              {/* <div>
                <p>This Time Last Month</p>
                <p>${runningInvoice.thisTimeLastMonth.toFixed(2)}</p>
              </div> */}
            </div>
            <a
              href="/invoice_08-11-2024.pdf"
              download="invoice_08-11-2024.pdf"
              className="view-invoice-button"
            >
              View Current Invoice
            </a>

          </div>
          <div className="billing-profile">
            <h3>Billing Profile</h3>
            <p><strong>Organization Created:</strong> {billingProfile.createdOn}</p>
            <p><strong>Billing Email Address:</strong> {billingProfile.emailAddress}</p>
            <p><strong>Invoice Address:</strong> {billingProfile.invoiceAddress}</p>
            <button className="edit-profile-button">Edit</button>
          </div>
        </div>

        {/* Right column */}
        <div className="right-column">
          <div className="description-list">
            <table>
              <thead>
                <tr>
                  <th>Description</th>
                  <th>Billing Period</th>
                  <th>Running Total (USD)</th>
                </tr>
              </thead>
              <tbody>
                {descriptions.map((desc, index) => (
                  <tr key={index}>
                    <td>{desc.name}</td>
                    <td>{desc.billingPeriod}</td>
                    <td>${desc.amount.toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="details-summary">
            <div className="plan-details">
              <h3>Plan Details</h3>
              <p>{planDetails}</p>
            </div>
            <div className="payment-method">
              <h3>Payment Method</h3>
              <p>{paymentMethod}</p>
              <button className="add-payment-button">Add Payment Method</button>
            </div>
          </div>
          <div className="credits-section">
            <h2>Available Credits</h2>
            <p>Apply a promo code or activation code to add credits to your organization.</p>
            <button className="apply-code-button">Apply Code</button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Billing;
