"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

export default function TermsPage() {
  return (
    <main className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto space-y-8"
        >
          <h1 className="text-4xl font-bold mb-6 gradient-text">Terms of Service</h1>
          
          <Card className="p-6 space-y-6">
            <section>
              <h2 className="text-2xl font-semibold mb-4">User Responsibilities</h2>
              <p className="text-muted-foreground">
                Users are responsible for maintaining the security of their accounts
                and complying with all applicable laws and regulations while using
                our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Acceptable Use</h2>
              <p className="text-muted-foreground">
                Our services must be used for lawful purposes only. Any misuse,
                including unauthorized access or data manipulation, is strictly
                prohibited.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Intellectual Property</h2>
              <p className="text-muted-foreground">
                All content and materials available through our services are protected
                by intellectual property rights and may not be used without permission.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Liability Limitations</h2>
              <p className="text-muted-foreground">
                Our services are provided "as is" without warranties. We are not liable
                for any damages arising from the use or inability to use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Dispute Resolution</h2>
              <p className="text-muted-foreground">
                Any disputes shall be resolved through arbitration in accordance with
                applicable laws. Users agree to attempt informal resolution before
                initiating legal proceedings.
              </p>
            </section>
          </Card>
        </motion.div>
      </div>
    </main>
  );
}