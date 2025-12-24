import { Navbar } from "@/components/Navbar";
import { FooterSection } from "@/components/sections/FooterSection";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-black text-white font-sans" data-theme="dark">
      <Navbar theme="light" />
      
      <div className="pt-32 pb-20 px-4 md:px-8 2xl:px-16 max-w-4xl mx-auto">
        <h1 className="font-display text-4xl md:text-5xl font-black mb-8">Terms of Service</h1>
        
        <div className="space-y-8 text-gray-300 leading-relaxed">
          <section>
            <h2 className="font-display text-2xl font-bold mb-4">1. Introduction</h2>
            <p>
              Welcome to VLOO. By accessing or using our website and services, you agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree to these terms, please do not use our services.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold mb-4">2. Use of Services</h2>
            <p>
              Our services are designed to help you manage crypto payments. You agree to use our services only for lawful purposes and in accordance with these Terms. You are responsible for maintaining the confidentiality of your account information.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold mb-4">3. Crypto Transactions</h2>
            <p>
              VLOO facilitates crypto transactions but does not hold custody of your funds. You acknowledge that cryptocurrency markets are volatile and that you are solely responsible for any financial losses associated with your transactions.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold mb-4">4. Intellectual Property</h2>
            <p>
              All content, features, and functionality of VLOO, including but not limited to design, text, graphics, and logos, are the exclusive property of VLOO and are protected by copyright, trademark, and other intellectual property laws.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold mb-4">5. Limitation of Liability</h2>
            <p>
              In no event shall VLOO be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of our services.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold mb-4">6. Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. We will notify you of any material changes by posting the new Terms on this page. Your continued use of the service after such changes constitutes your acceptance of the new Terms.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold mb-4">7. Contact Us</h2>
            <p>
              If you have any questions about these Terms, please contact us at support@vloo.com.
            </p>
          </section>
        </div>
      </div>

      <FooterSection />
    </main>
  );
}