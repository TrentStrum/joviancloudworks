"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto space-y-8"
        >
          <h1 className="text-4xl font-bold mb-6 gradient-text">Privacy Policy</h1>
          
          <Card className="p-6 space-y-6">
            <section>
              <h2 className="text-2xl font-semibold mb-4">Data Collection</h2>
              <p className="text-muted-foreground">
                We collect minimal personal information necessary to provide our services.
                This includes email addresses for authentication and basic usage analytics
                to improve our platform.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Information Usage</h2>
              <p className="text-muted-foreground">
                Your information is used solely for providing and improving our services.
                We never sell or share your personal data with third parties without
                your explicit consent.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Cookie Policy</h2>
              <p className="text-muted-foreground">
                We use essential cookies to maintain your session and preferences.
                Analytics cookies are optional and can be disabled at any time.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Right to access your personal data</li>
                <li>Right to rectify inaccurate information</li>
                <li>Right to request data deletion</li>
                <li>Right to withdraw consent</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
              <p className="text-muted-foreground">
                For privacy-related concerns, please contact our Data Protection Officer at:
                privacy@example.com
              </p>
            </section>
          </Card>
        </motion.div>
      </div>
    </main>
  );
}