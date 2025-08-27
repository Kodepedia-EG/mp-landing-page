import Link from 'next/link';

export default function DeleteAccount() {
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
          <h1 className="text-4xl font-bold mb-8">Account Deletion</h1>
          <p className="mb-4">We are sorry to see you go. This page provides instructions on how to delete your account and what to expect when you do.</p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">Steps to Delete Your Account</h2>
          <p className="mb-4">To delete your account, please follow these steps:</p>
          <ol className="list-decimal list-inside mb-4">
            <li className="mb-2">Open the MegaPlug application on your device.</li>
            <li className="mb-2">Navigate to the &apos;Settings&apos; or &apos;Profile&apos; section.</li>
            <li className="mb-2">Find the &apos;Delete Account&apos; option.</li>
            <li className="mb-2">Follow the on-screen prompts to confirm the deletion of your account.</li>
          </ol>

          <h2 className="text-2xl font-bold mt-8 mb-4">What Happens When You Delete Your Account</h2>
          <p className="mb-4">When you delete your account, all of your personal information and data associated with your account will be permanently deleted. This action cannot be undone.</p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Contact Us</h2>
          <p>If you have any trouble deleting your account, or if you have any questions, please contact us at <a href="mailto:support@megaplug.com" style={{ color: '#3EBF80' }}>support@megaplug.com</a>.</p>
        </div>
      </main>

      <footer className="text-center py-4" style={{ backgroundColor: '#231F20', color: 'white' }}>
        <p>&copy; 2025 MegaPlug. All rights reserved.</p>
      </footer>
    </div>
  );
}
