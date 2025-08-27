import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <div style={{ fontFamily: 'Inter, sans-serif', color: '#231F20' }}>
      <header className="bg-white p-4 shadow-md">
        <nav className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold" style={{ color: '#3EBF80' }}><Link href="/">MegaPlug</Link></div>
          <div>
            <Link href="/" className="p-2">Home</Link>
          </div>
        </nav>
      </header>

      <main className="py-20 px-4">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
          <p className="mb-4">Your privacy is important to us. It is MegaPlug's policy to respect your privacy regarding any information we may collect from you across our website, and other sites we own and operate.</p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">1. Information we collect</h2>
          <p className="mb-4">Log data: When you visit our website, our servers may automatically log the standard data provided by your web browser. It may include your computer’s Internet Protocol (IP) address, your browser type and version, the pages you visit, the time and date of your visit, the time spent on each page, and other details.</p>
          <p className="mb-4">Device data: We may also collect data about the device you’re using to access our website. This data may include the device type, operating system, unique device identifiers, device settings, and geo-location data.</p>
          <p className="mb-4">Personal information: We may ask for personal information, such as your name, email, social media profiles, phone/mobile number, home/mailing address, payment information.</p>

          <h2 className="text-2xl font-bold mt-8 mb-4">2. Legal bases for processing</h2>
          <p className="mb-4">We will process your personal information lawfully, fairly and in a transparent manner. We collect and process information about you only where we have legal bases for doing so.</p>

          <h2 className="text-2xl font-bold mt-8 mb-4">3. Collection and use of information</h2>
          <p className="mb-4">We may collect, hold, use and disclose information for the following purposes and personal information will not be further processed in a manner that is incompatible with these purposes:</p>
          <ul className="list-disc list-inside mb-4">
            <li>to enable you to customize or personalize your experience of our website;</li>
            <li>to enable you to access and use our website, associated applications and associated social media platforms;</li>
            <li>to contact and communicate with you;</li>
            <li>for internal record keeping and administrative purposes;</li>
            <li>for analytics, market research and business development, including to operate and improve our website, associated applications and associated social media platforms;</li>
            <li>to run competitions and/or offer additional benefits to you;</li>
            <li>for advertising and marketing, including to send you promotional information about our products and services and information about third parties that we consider may be of interest to you;</li>
            <li>to comply with our legal obligations and resolve any disputes that we may have.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">4. Disclosure of personal information to third parties</h2>
          <p className="mb-4">We may disclose personal information to:</p>
          <ul className="list-disc list-inside mb-4">
            <li>third party service providers for the purpose of enabling them to provide their services, including (without limitation) IT service providers, data storage, hosting and server providers, ad networks, analytics, error loggers, debt collectors, maintenance or problem-solving providers, marketing or advertising providers, professional advisors and payment systems operators;</li>
            <li>our employees, contractors and/or related entities;</li>
            <li>sponsors or promoters of any competition we run;</li>
            <li>credit reporting agencies, courts, tribunals and regulatory authorities, in the event you fail to pay for goods or services we have provided to you;</li>
            <li>courts, tribunals, regulatory authorities and law enforcement officers, as required by law, in connection with any actual or prospective legal proceedings, or in order to establish, exercise or defend our legal rights;</li>
            <li>third parties, including agents or sub-contractors, who assist us in providing information, products, services or direct marketing to you;</li>
            <li>third parties to collect and process data.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">5. Your rights and controlling your personal information</h2>
          <p className="mb-4">You may choose to restrict the collection or use of your personal information. If you have previously agreed to us using your personal information for direct marketing purposes, you may change your mind at any time by contacting us using the details below. If you ask us to restrict or limit how we process your personal information, we will let you know how the restriction affects your use of our website or products and services.</p>

          <h2 className="text-2xl font-bold mt-8 mb-4">6. Contact Us</h2>
          <p>For any questions or concerns regarding your privacy, you may contact us using the following details: <a href="mailto:support@megaplug.com" style={{ color: '#3EBF80' }}>support@megaplug.com</a></p>
        </div>
      </main>

      <footer className="text-center py-4" style={{ backgroundColor: '#231F20', color: 'white' }}>
        <p>&copy; 2025 MegaPlug. All rights reserved.</p>
      </footer>
    </div>
  );
}
