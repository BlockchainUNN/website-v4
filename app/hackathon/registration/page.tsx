"use client";

import { useState } from "react";
import { Formik, Form } from "formik";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Code, Shield } from "lucide-react";
import { FormInput, FormSelect } from "@/components/ui/form-components";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Text } from "@/components/common/Text";
import { useAttendeeByEmail } from "@/hooks/crud/useEvents";
import { useHackathonState } from "@/hooks/store/useHackathonState";
import { cn } from "@/lib/utils";
import {
  useHackerByEmail,
  useHackerRegistration,
} from "@/hooks/crud/useHacker";
import { hackathonRegistrationSchema } from "@/lib/validation";

const STEPS = [
  {
    id: 1,
    title: "Email Check",
    description: "Verify conference registration",
  },
  {
    id: 2,
    title: "Hacker Details",
    description: "Complete your hacker profile",
  },
  { id: 3, title: "Success", description: "Registration complete" },
];

const roleOptions = [
  { value: "frontend-developer", label: "Frontend Developer" },
  { value: "backend-developer", label: "Backend Developer" },
  { value: "smart-contract-developer", label: "Smart Contract Developer" },
  { value: "designer", label: "Designer" },
  { value: "product-manager", label: "Product Manager" },
  { value: "others", label: "Others" },
];

const genderOptions = [
  { value: "male", label: "Male" },
  { value: "female", label: "Female" },
  { value: "other", label: "Other" },
];

export default function HackathonRegistrationPage() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [checkedEmail, setCheckedEmail] = useState("");
  const [conferenceAttendee, setConferenceAttendee] = useState<any>(null);
  const { blockathonId, hackathonId } = useHackathonState();

  const registerMutation = useHackerRegistration();
  const { refetch: checkExistingHacker } = useHackerByEmail(
    hackathonId,
    checkedEmail,
    false
  );
  const { refetch: checkConferenceAttendee } = useAttendeeByEmail(
    blockathonId,
    checkedEmail,
    false
  );

  const initialValues = {
    email: "",
    firstName: "",
    lastName: "",
    gender: "",
    phoneNumber: "",
    role: "",
    telegramUsername: "",
  };

  const handleEmailCheck = async (email: string) => {
    setCheckedEmail(email);

    try {
      // First check if already registered as hacker
      const hackerResult = await checkExistingHacker();
      if (hackerResult.data) {
        alert(
          "You're already registered for the hackathon! Please login instead."
        );
        router.push("/hackathon/login");
        return;
      }
    } catch (error) {
      // Expected if hacker doesn't exist - continue to check conference registration
    }

    try {
      // Check if registered for conference
      const attendeeResult = await checkConferenceAttendee();
      if (attendeeResult.data) {
        setConferenceAttendee(attendeeResult.data);
        setCurrentStep(2);
      } else {
        alert(
          "Please register for the conference phase first before joining the hackathon."
        );
        router.push("/event/registration");
      }
    } catch (error) {
      alert(
        "Please register for the conference phase first before joining the hackathon."
      );
      router.push("/event/registration");
    }
  };

  const handleSubmit = async (values: any) => {
    try {
      await registerMutation.mutateAsync({
        hackathonId,
        data: values,
      });
      setCurrentStep(3);
    } catch (error) {
      console.error("Hackathon registration failed:", error);
    }
  };

  const prevStep = () => setCurrentStep(Math.max(currentStep - 1, 1));

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
            Hackathon Registration
          </Text>
          <div className="w-6" /> {/* Spacer */}
        </div>

        {/* Progress Bar */}
        <div className="px-6 mb-8">
          <Progress
            value={(currentStep / STEPS.length) * 100}
            className="h-2 bg-gray-600"
          />
          <div className="flex justify-between mt-2">
            {STEPS.map((step) => (
              <div key={step.id} className="text-center">
                <div
                  className={cn(
                    "w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium mb-1",
                    currentStep >= step.id
                      ? "bg-blockchain-green text-white"
                      : "bg-gray-600 text-gray-300"
                  )}
                >
                  {currentStep > step.id ? "✓" : step.id}
                </div>
                <Text size="xs" color="white" className="hidden sm:block">
                  {step.title}
                </Text>
              </div>
            ))}
          </div>
        </div>

        {/* Form */}
        <div className="flex-1 flex items-center justify-center px-4 pb-8">
          <Card className="w-full max-w-2xl bg-white/95 backdrop-blur">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold text-gray-900 flex items-center justify-center gap-2">
                <Code className="w-8 h-8 text-blockchain-green" />
                Hackathon Registration
              </CardTitle>
              <Text color="muted" className="text-gray-600">
                {STEPS[currentStep - 1].description}
              </Text>
            </CardHeader>

            <CardContent>
              <Formik
                initialValues={{
                  ...initialValues,
                  email: conferenceAttendee?.email || "",
                  firstName: conferenceAttendee?.first_name || "",
                  lastName: conferenceAttendee?.last_name || "",
                }}
                validationSchema={hackathonRegistrationSchema}
                onSubmit={handleSubmit}
                enableReinitialize
              >
                {({ values, isValid, isSubmitting }) => (
                  <Form className="space-y-6">
                    {/* Step 1: Email Verification */}
                    {currentStep === 1 && (
                      <div className="space-y-6">
                        <div className="text-center">
                          <Shield className="w-16 h-16 text-blockchain-green mx-auto mb-4" />
                          <Text size="lg" weight="semibold" className="mb-2">
                            Verify Your Conference Registration
                          </Text>
                          <Text color="muted">
                            Enter your email to check if you're registered for
                            Blockathon 2024
                          </Text>
                        </div>

                        <FormInput
                          name="email"
                          type="email"
                          placeholder="Enter your registered email address"
                          icon="/images/icons/email.svg"
                        />

                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                          <div className="flex items-start gap-3">
                            <svg
                              className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <div>
                              <Text
                                size="sm"
                                weight="semibold"
                                className="text-blue-800"
                              >
                                Note
                              </Text>
                              <Text size="sm" className="text-blue-700">
                                You must be registered for the conference phase
                                before joining the hackathon. If you haven't
                                registered yet, you'll be redirected to complete
                                that first.
                              </Text>
                            </div>
                          </div>
                        </div>

                        <Button
                          type="button"
                          onClick={() => handleEmailCheck(values.email)}
                          disabled={
                            !values.email || !/\S+@\S+\.\S+/.test(values.email)
                          }
                          className="w-full bg-blockchain-green hover:bg-blockchain-green/90"
                          size="lg"
                        >
                          Verify Registration
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>

                        <div className="text-center">
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
                      </div>
                    )}

                    {/* Step 2: Hacker Details */}
                    {currentStep === 2 && (
                      <div className="space-y-6">
                        <div className="text-center">
                          <Code className="w-16 h-16 text-blockchain-green mx-auto mb-4" />
                          <Text size="lg" weight="semibold" className="mb-2">
                            Complete Your Hacker Profile
                          </Text>
                          <Text color="muted">
                            Tell us about your role and skills
                          </Text>
                        </div>

                        {conferenceAttendee && (
                          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                            <div className="flex items-center gap-3">
                              <svg
                                className="w-5 h-5 text-green-500"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              <Text size="sm" className="text-green-800">
                                Conference registration verified! Welcome back,{" "}
                                {conferenceAttendee.first_name}!
                              </Text>
                            </div>
                          </div>
                        )}

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <FormInput
                            name="firstName"
                            placeholder="First Name"
                            icon="/images/icons/person.svg"
                            disabled={!!conferenceAttendee?.first_name}
                          />
                          <FormInput
                            name="lastName"
                            placeholder="Last Name"
                            icon="/images/icons/person.svg"
                            disabled={!!conferenceAttendee?.last_name}
                          />
                        </div>

                        <FormInput
                          name="email"
                          type="email"
                          placeholder="Email Address"
                          icon="/images/icons/email.svg"
                          disabled={!!conferenceAttendee?.email}
                        />

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <FormSelect
                            name="gender"
                            placeholder="Select Gender"
                            options={genderOptions}
                            icon="/images/icons/gender.svg"
                          />
                          <FormInput
                            name="phoneNumber"
                            type="tel"
                            placeholder="Phone Number"
                            icon="/images/icons/phone.svg"
                          />
                        </div>

                        <FormSelect
                          name="role"
                          placeholder="Select Your Role"
                          options={roleOptions}
                          icon="/images/icons/code.svg"
                        />

                        <FormInput
                          name="telegramUsername"
                          placeholder="Telegram Username (Optional)"
                          icon="/images/icons/telegram.svg"
                        />

                        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                          <Text size="sm" className="text-yellow-800">
                            <strong>Hackathon Rules:</strong>
                            <br />
                            • Teams can have a maximum of 5 members
                            <br />
                            • All projects must be blockchain-related
                            <br />
                            • Minimum 3 team members must be present for judging
                            <br />• No online submissions - physical presence
                            required
                          </Text>
                        </div>

                        <div className="flex gap-4">
                          <Button
                            type="button"
                            variant="outline"
                            onClick={prevStep}
                            className="flex-1"
                          >
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Back
                          </Button>
                          <Button
                            type="submit"
                            disabled={!isValid || isSubmitting}
                            className="flex-1 bg-blockchain-green hover:bg-blockchain-green/90"
                          >
                            {isSubmitting
                              ? "Registering..."
                              : "Complete Registration"}
                          </Button>
                        </div>
                      </div>
                    )}

                    {/* Step 3: Success */}
                    {currentStep === 3 && (
                      <div className="space-y-6 text-center">
                        <div className="w-20 h-20 bg-blockchain-green rounded-full flex items-center justify-center mx-auto">
                          <svg
                            className="w-10 h-10 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>

                        <div>
                          <Text size="2xl" weight="bold" className="mb-2">
                            Registration Successful!
                          </Text>
                          <Text color="muted">
                            You're now registered for the hackathon phase of
                            Blockathon 2024
                          </Text>
                        </div>

                        <div className="bg-gray-50 rounded-lg p-6 text-left">
                          <Text size="lg" weight="semibold" className="mb-4">
                            What's Next?
                          </Text>
                          <ul className="space-y-2 text-sm">
                            <li className="flex items-start gap-2">
                              <span className="w-5 h-5 bg-blockchain-green rounded-full flex items-center justify-center text-white text-xs mt-0.5">
                                1
                              </span>
                              <span>
                                Join the hackathon dashboard to create or join a
                                team
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="w-5 h-5 bg-blockchain-green rounded-full flex items-center justify-center text-white text-xs mt-0.5">
                                2
                              </span>
                              <span>Prepare your project idea and tools</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="w-5 h-5 bg-blockchain-green rounded-full flex items-center justify-center text-white text-xs mt-0.5">
                                3
                              </span>
                              <span>Join our Telegram group for updates</span>
                            </li>
                          </ul>
                        </div>

                        <div className="flex gap-4">
                          <Button asChild variant="outline" className="flex-1">
                            <Link href="/event">Back to Event</Link>
                          </Button>
                          <Button
                            asChild
                            className="flex-1 bg-blockchain-green hover:bg-blockchain-green/90"
                          >
                            <Link href="/hackathon/dashboard">
                              Go to Dashboard
                            </Link>
                          </Button>
                        </div>
                      </div>
                    )}
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
