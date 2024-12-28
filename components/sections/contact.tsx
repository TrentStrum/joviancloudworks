"use client";

import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Progress } from "@/components/ui/progress";
import { Upload, Send } from "lucide-react";
import { LampContainer } from "@/components/ui/lamp";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  company: z.string().min(2, "Company name must be at least 2 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export function ContactSection() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      message: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  const progress = Math.min(
    100,
    Object.keys(form.formState.dirtyFields).length * 25
  );

  return (
    <LampContainer>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-8"
      >
        <h2 className="text-4xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          Let's Build Together
        </h2>
        <p className="text-xl text-neutral-300 max-w-2xl mx-auto">
          Ready to transform your cloud infrastructure? Share your vision with us.
        </p>
      </motion.div>

      <Card className="max-w-2xl w-full mx-auto p-6 bg-black/40 backdrop-blur-sm border-neutral-800">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <Progress value={progress} className="mb-6" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-neutral-200">Name</FormLabel>
                    <FormControl>
                      <Input placeholder="John Doe" {...field} className="bg-black/20 border-neutral-800" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-neutral-200">Email</FormLabel>
                    <FormControl>
                      <Input placeholder="john@example.com" {...field} className="bg-black/20 border-neutral-800" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="company"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-neutral-200">Company</FormLabel>
                  <FormControl>
                    <Input placeholder="Your Company" {...field} className="bg-black/20 border-neutral-800" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-neutral-200">Message</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Tell us about your project..."
                      className="min-h-[120px] bg-black/20 border-neutral-800"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex gap-4">
              <Button type="button" variant="outline" className="w-full border-neutral-800 text-neutral-300 hover:bg-neutral-800">
                <Upload className="mr-2 h-4 w-4" />
                Upload Files
              </Button>
              <Button type="submit" className="w-full bg-gradient-to-r from-neutral-50 to-neutral-400 text-black hover:opacity-90">
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </Button>
            </div>
          </form>
        </Form>
      </Card>
    </LampContainer>
  );
}