/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { Formik, Form } from "formik";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, LogIn } from "lucide-react";
import { FormInput } from "@/components/ui/form-components";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Text } from "@/components/common/Text";
import { useHackerLogin } from "@/hooks/crud/useHacker";
import { hackerLoginSchema } from "@/lib/validation";

export default function HackathonLoginPage() {
  const router = useRouter();
  const loginMutation = useHackerLogin();

  const initialValues = {
    email: "",
    password: "",
  };

  const handleSubmit = async (values: any) => {
    try {
      await loginMutation.mutateAsync({
        hackathonId: "hackathon-2024", // This should come from your state/config
        data: values,
      });
      // Navigation is handled in the mutation success callback
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/blogathon_bg.png')" }}
    >
      <div className="min-h-screen bg-black/75 flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6">
          <Link
            href="/event"
            className="text-white hover:text-blockchain-green transition-colors"
          >
            <ArrowLeft className="w-6 h-6" />
          </Link>
          <Text color="white" size="lg" weight="medium">
            Hacker Login
          </Text>
          <div className="w-6" /> {/* Spacer */}
        </div>

        {/* Form */}
        <div className="flex-1 flex items-center justify-center px-4">
          <Card className="w-full max-w-md bg-white/95 backdrop-blur">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-blockchain-green rounded-full flex items-center justify-center mx-auto mb-4">
                <LogIn className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-2xl font-bold text-gray-900">
                Welcome Back, Hacker!
              </CardTitle>
              <Text color="muted" className="text-gray-600">
                Sign in to access your hackathon dashboard
              </Text>
            </CardHeader>

            <CardContent>
              <Formik
                initialValues={initialValues}
                validationSchema={hackerLoginSchema}
                onSubmit={handleSubmit}
              >
                {({ isValid, isSubmitting }) => (
                  <Form className="space-y-6">
                    <div className="space-y-4">
                      <FormInput
                        name="email"
                        type="email"
                        placeholder="Enter your email address"
                        icon="/images/icons/email.svg"
                      />

                      <FormInput
                        name="password"
                        type="password"
                        placeholder="Enter your password"
                        icon="/images/icons/password.svg"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={!isValid || isSubmitting}
                      className="w-full bg-blockchain-green hover:bg-blockchain-green/90"
                      size="lg"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                          Signing In...
                        </>
                      ) : (
                        <>
                          <LogIn className="w-4 h-4 mr-2" />
                          Sign In
                        </>
                      )}
                    </Button>

                    <div className="text-center space-y-2">
                      <Text size="sm" color="muted">
                        Don&apos;t have an account?{" "}
                        <Link
                          href="/hackathon/registration"
                          className="text-blockchain-green hover:underline"
                        >
                          Register for Hackathon
                        </Link>
                      </Text>

                      <Text size="sm" color="muted">
                        Need to register for the conference first?{" "}
                        <Link
                          href="/event/registration"
                          className="text-blockchain-green hover:underline"
                        >
                          Register here
                        </Link>
                      </Text>
                    </div>
                  </Form>
                )}
              </Formik>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
