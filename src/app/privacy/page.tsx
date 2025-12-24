import { Navbar } from "@/components/Navbar";
import { FooterSection } from "@/components/sections/FooterSection";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-black text-white font-sans" data-theme="dark">
      <Navbar theme="light" />
      
      <div className="pt-32 pb-20 px-4 md:px-8 2xl:px-16 max-w-4xl mx-auto">
        <h1 className="font-display text-4xl md:text-5xl font-black mb-8">Privacy Policy</h1>
        
        <div className="space-y-8 text-gray-300 leading-relaxed">
          <section>
            <h2 className="font-display text-2xl font-bold mb-4">1. Information We Collect</h2>
            <p>
              We collect information you provide directly to us, such as when you create an account, make a transaction, or contact us for support. This may include your name, email address, and transaction details.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold mb-4">2. How We Use Your Information</h2>
            <p>
              We use the information we collect to provide, maintain, and improve our services, to process your transactions, and to communicate with you about updates, security alerts, and administrative messages.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold mb-4">3. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold mb-4">4. Sharing of Information</h2>
            <p>
              We do not sell your personal information. We may share your information with third-party service providers who assist us in operating our services, conducting our business, or serving our users.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold mb-4">5. Cookies and Tracking</h2>
            <p>
              We use cookies and similar tracking technologies to track the activity on our service and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold mb-4">6. Your Rights</h2>
            <p>
              Depending on your location, you may have certain rights regarding your personal information, such as the right to access, correct, or delete your data.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold mb-4">7. Updates to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
            </p>
          </section>
        </div>
      </div>

      <FooterSection />
    </main>
  );
}