import React from 'react';
import HCNavbar from '../HCNavbar';
import HCImage from '../HCImage';

export default class GiveButter extends React.Component {
  render() {
    return (
      <div className="bg-gray-100 hero-section">
        <HCNavbar/>
        <div className="flex justify-center py-12 px-3">
          <div className="bg-white help-center py-20 px-3 sm:px-12 lg:px-24 shadow-md rounded-md">
            <h1 className="text-3xl">Getting started with GiveButter</h1>
            <h2 className="mt-3 text-lg text-gray-400">For nonprofits - a comprehensive guide to creating a GiveButter account and connecting your organization's bank account.</h2>
            <div className="h-12 w-full flex items-center justify-center">
              <div className="border-t-2 border-green-400 w-full"></div>
            </div>
            <div className="mt-4">
              <div>
                <p>
                  Below, we've compiled a short walkthrough on how to set up your GiveButter account.
                  Click on the images to view their enlarged versions, and don't hesitate to contact us if you have any questions!
                </p>
              </div>
              <div className="mt-16">
                <h3 className="text-xl mb-4">1. Visit the <a href="https://givebutter.com/signup" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-500 cursor-pointer underline">GiveButter signup page</a></h3>
                <HCImage src="https://i.ibb.co/J5Pk9vM/image14.png"/>
              </div>
              <div className="mt-12">
                <h3 className="text-xl mb-4">2. Enter profile details</h3>
                <HCImage src="https://i.ibb.co/HTMy7Hb/image4.png"/>
              </div>
              <div className="mt-12">
                <h3 className="text-xl mb-4">3. Answer intro questions</h3>
                <HCImage src="https://i.ibb.co/5Lh4Sz6/image6.png"/>
              </div>
              <div className="mt-12">
                <h3 className="text-xl mb-4">4. Verify your email</h3>
                <HCImage src="https://i.ibb.co/4FGYQ2f/image12.png"/>
              </div>
              <div className="mt-12">
                <h3 className="text-xl mb-4">5. Verify your mobile phone</h3>
                <HCImage src="https://i.ibb.co/zPWF0jT/image2.png"/>
              </div>
              <div className="mt-12">
                <h3 className="text-xl mb-4">6. Verify nonprofit (enter EIN)</h3>
                <HCImage src="https://i.ibb.co/q0NSRXP/image17.png"/>
              </div>
              <div className="mt-12">
                <h3 className="text-xl mb-4">7. Integrate Payouts (Payouts tab)</h3>
                <HCImage src="https://i.ibb.co/2qMfSb4/image1.png"/>
              </div>
              <div className="mt-12">
                <h3 className="text-xl mb-4">8. Select "Connect with Stripe" button</h3>
                <HCImage src="https://i.ibb.co/BP2tYnG/image19.png"/>
              </div>
              <div className="mt-12">
                <h3 className="text-xl mb-4">9. Enter business details</h3>
                <HCImage src="https://i.ibb.co/By3WpDv/image16.png"/>
              </div>
              <div className="mt-12">
                <h3 className="text-xl mb-4">10. Enter payout information</h3>
                <HCImage src="https://i.ibb.co/gddTZ3w/image13.png"/>
              </div>
              <div className="mt-12">
                <h3 className="text-xl mb-4">11. Submit and review details</h3>
                <HCImage src="https://i.ibb.co/xh8H6FV/image7.png"/>
              </div>
              <div className="mt-12">
                <h3 className="text-xl mb-4">12. Invite Benefact to "Users" (Account Settings <i className="bi-arrow-right"></i> Users)</h3>
                <HCImage src="https://i.ibb.co/9Vw9xcG/image8.png"/>
              </div>
              <div className="mt-12">
                <h3 className="text-xl mb-4">13. Enable recurring payments (Recurring Payments tab)</h3>
                <HCImage src="https://i.ibb.co/b3YgXw9/image20.png"/>
              </div>
              <div className="mt-12">
                <h3 className="text-xl mb-4">14. Enable contacts (Contacts tab)</h3>
                <HCImage src="https://i.ibb.co/QXTskJY/image10.png"/>
              </div>
              <div className="mt-12">
                <h3 className="text-xl mb-4">15. Update account details (Account Settings <i className="bi-arrow-right"></i> About)</h3>
                <HCImage src="https://i.ibb.co/fHyYmPD/image9.png"/>
              </div>
              <div className="mt-12">
                <h3 className="text-xl mb-4">16. Update branding (Account Settings <i className="bi-arrow-right"></i> Branding)</h3>
                <HCImage src="https://i.ibb.co/svxMhnW/image11.png"/>
              </div>
              <div className="mt-12">
                <h3 className="text-xl mb-4">17. During/after the campaign, withdraw funds directly to bank account (Payouts tab)</h3>
                <HCImage src="https://i.ibb.co/mc3L6wv/image5.png" className="mb-4"/>
                <HCImage src="https://i.ibb.co/JBytJ1W/image18.png"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
