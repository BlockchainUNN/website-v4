/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useState } from "react";
import { Formik, Form } from "formik";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, User, Mail, MessageSquare } from "lucide-react";
import {
  FormInput,
  FormSelect,
  FormTextarea,
} from "@/components/ui/form-components";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Text } from "@/components/common/Text";
import {
  useEventRegistration,
  useAttendeeByEmail,
} from "@/hooks/crud/useEvents";
import { useHackathonState } from "@/hooks/store/useHackathonState";
import { cn } from "@/lib/utils";
import { eventRegistrationSchema } from "@/lib/validation";

const STEPS = [
  {
    id: 1,
    title: "Email Verification",
    description: "Enter your email address",
  },
  { id: 2, title: "Personal Details", description: "Tell us about yourself" },
  { id: 3, title: "Preferences", description: "Your interests and experience" },
  { id: 4, title: "Confirmation", description: "Review and submit" },
];

const formOptions = {
  gender: [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
    { value: "other", label: "Other" },
  ],
  isStudent: [
    { value: "yes", label: "Yes" },
    { value: "no", label: "No" },
  ],
  techCareer: [
    { value: "programming", label: "Programming" },
    { value: "designing", label: "Designing" },
    { value: "product-management", label: "Product Management" },
    { value: "community-management", label: "Community Management" },
    { value: "copywriting", label: "Copywriting" },
    { value: "marketing", label: "Marketing" },
    { value: "others", label: "Others" },
  ],
  experienceLevel: [
    { value: "0-2years", label: "0-2 years" },
    { value: "3-5years", label: "3-5 years" },
    { value: "5-7years", label: "5-7 years" },
    { value: "7+years", label: "More than 7 years" },
  ],
  attendingFrom: [
    { value: "unec", label: "UNEC" },
    { value: "unn", label: "UNN" },
    { value: "others", label: "Others" },
  ],
  willParticipateInHackathon: [
    { value: "yes-definitely", label: "Yes, I definitely will" },
    { value: "no-wont-be-able", label: "No, I won't be able to" },
    { value: "probably-not-sure", label: "Probably, not sure" },
  ],
};

export default function EventRegistrationPage() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [checkedEmail, setCheckedEmail] = useState("");
  const { blockathonId } = useHackathonState();

  const registerMutation = useEventRegistration();
  const { data: existingAttendee, refetch: checkEmail } = useAttendeeByEmail(
    blockathonId,
    checkedEmail,
    false
  );

  const initialValues = {
    // Step 1
    email: "",
    // Step 2
    firstName: "",
    lastName: "",
    phoneNumber: "",
    whatsappNumber: "",
    gender: "",
    isStudent: "",
    level: "",
    department: "",
    // Step 3
    techCareer: "",
    experienceLevel: "",
    attendingFrom: "",
    willParticipateInHackathon: "",
    telegramUsername: "",
    portfolio: "",
    reasons: "",
  };

  const handleEmailCheck = async (email: string) => {
    setCheckedEmail(email);
    // The query will automatically trigger and check for existing attendee
    setTimeout(() => {
      setCurrentStep(2);
    }, 500);
  };

  const handleSubmit = async (values: any) => {
    try {
      await registerMutation.mutateAsync({
        eventId: blockathonId,
        data: values,
      });
      router.push("/event/registration/success");
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };

  const nextStep = () =>
    setCurrentStep(Math.min(currentStep + 1, STEPS.length));
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
            Event Registration
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
                  {step.id}
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
              <CardTitle className="text-2xl font-bold text-gray-900">
                Register for Blockathon 2024
              </CardTitle>
              <Text color="muted" className="text-gray-600">
                {STEPS[currentStep - 1].description}
              </Text>
            </CardHeader>

            <CardContent>
              <Formik
                initialValues={initialValues}
                validationSchema={eventRegistrationSchema}
                onSubmit={handleSubmit}
                enableReinitialize
              >
                {({ values, isValid, isSubmitting }) => (
                  <Form className="space-y-6">
                    {/* Step 1: Email */}
                    {currentStep === 1 && (
                      <div className="space-y-6">
                        <div className="text-center">
                          <Mail className="w-16 h-16 text-blockchain-green mx-auto mb-4" />
                          <Text size="lg" weight="semibold" className="mb-2">
                            Let&apos;s start with your email
                          </Text>
                          <Text color="muted">
                            We&apos;ll check if you&apos;re already registered
                          </Text>
                        </div>

                        <FormInput
                          name="email"
                          type="email"
                          placeholder="Enter your email address"
                          icon="/images/icons/email.svg"
                        />

                        <Button
                          type="button"
                          onClick={() => handleEmailCheck(values.email)}
                          disabled={
                            !values.email || !/\S+@\S+\.\S+/.test(values.email)
                          }
                          className="w-full bg-blockchain-green hover:bg-blockchain-green/90"
                          size="lg"
                        >
                          Continue
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </div>
                    )}

                    {/* Step 2: Personal Details */}
                    {currentStep === 2 && (
                      <div className="space-y-6">
                        <div className="text-center">
                          <User className="w-16 h-16 text-blockchain-green mx-auto mb-4" />
                          <Text size="lg" weight="semibold" className="mb-2">
                            Personal Information
                          </Text>
                          <Text color="muted">
                            Tell us a bit about yourself
                          </Text>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <FormInput
                            name="firstName"
                            placeholder="First Name"
                            icon="/images/icons/person.svg"
                          />
                          <FormInput
                            name="lastName"
                            placeholder="Last Name"
                            icon="/images/icons/person.svg"
                          />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <FormInput
                            name="phoneNumber"
                            type="tel"
                            placeholder="Phone Number"
                            icon="/images/icons/phone.svg"
                          />
                          <FormInput
                            name="whatsappNumber"
                            type="tel"
                            placeholder="WhatsApp Number"
                            icon="/images/icons/whatsapp.svg"
                          />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <FormSelect
                            name="gender"
                            placeholder="Select Gender"
                            options={formOptions.gender}
                            icon="/images/icons/gender.svg"
                          />
                          <FormSelect
                            name="isStudent"
                            placeholder="Are you a student?"
                            options={formOptions.isStudent}
                            icon="/images/icons/student.svg"
                          />
                        </div>

                        {values.isStudent === "yes" && (
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <FormInput
                              name="level"
                              placeholder="Academic Level (e.g., 300L)"
                              icon="/images/icons/level.svg"
                            />
                            <FormInput
                              name="department"
                              placeholder="Department"
                              icon="/images/icons/department.svg"
                            />
                          </div>
                        )}

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
                            type="button"
                            onClick={nextStep}
                            className="flex-1 bg-blockchain-green hover:bg-blockchain-green/90"
                          >
                            Continue
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Button>
                        </div>
                      </div>
                    )}

                    {/* Step 3: Preferences */}
                    {currentStep === 3 && (
                      <div className="space-y-6">
                        <div className="text-center">
                          <MessageSquare className="w-16 h-16 text-blockchain-green mx-auto mb-4" />
                          <Text size="lg" weight="semibold" className="mb-2">
                            Your Interests & Experience
                          </Text>
                          <Text color="muted">
                            Help us understand your background
                          </Text>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <FormSelect
                            name="techCareer"
                            placeholder="Tech Career Interest"
                            options={formOptions.techCareer}
                            icon="/images/icons/career.svg"
                          />
                          <FormSelect
                            name="experienceLevel"
                            placeholder="Experience Level"
                            options={formOptions.experienceLevel}
                            icon="/images/icons/experience.svg"
                          />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <FormSelect
                            name="attendingFrom"
                            placeholder="Attending From"
                            options={formOptions.attendingFrom}
                            icon="/images/icons/location.svg"
                          />
                          <FormSelect
                            name="willParticipateInHackathon"
                            placeholder="Join Hackathon?"
                            options={formOptions.willParticipateInHackathon}
                            icon="/images/icons/hackathon.svg"
                          />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <FormInput
                            name="telegramUsername"
                            placeholder="Telegram Username (Optional)"
                            icon="/images/icons/telegram.svg"
                          />
                          <FormInput
                            name="portfolio"
                            type="url"
                            placeholder="Portfolio URL (Optional)"
                            icon="/images/icons/link.svg"
                          />
                        </div>

                        <FormTextarea
                          name="reasons"
                          placeholder="Why do you want to attend this event? (Tell us about your goals and expectations)"
                          rows={4}
                        />

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
                            type="button"
                            onClick={nextStep}
                            className="flex-1 bg-blockchain-green hover:bg-blockchain-green/90"
                          >
                            Review
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Button>
                        </div>
                      </div>
                    )}

                    {/* Step 4: Confirmation */}
                    {currentStep === 4 && (
                      <div className="space-y-6">
                        <div className="text-center">
                          <div className="w-16 h-16 bg-blockchain-green rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg
                              className="w-8 h-8 text-white"
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
                          <Text size="lg" weight="semibold" className="mb-2">
                            Review Your Information
                          </Text>
                          <Text color="muted">
                            Please review your details before submitting
                          </Text>
                        </div>

                        <div className="bg-gray-50 rounded-lg p-6 space-y-4">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                            <div>
                              <Text weight="semibold">Name:</Text>
                              <Text>
                                {values.firstName} {values.lastName}
                              </Text>
                            </div>
                            <div>
                              <Text weight="semibold">Email:</Text>
                              <Text>{values.email}</Text>
                            </div>
                            <div>
                              <Text weight="semibold">Phone:</Text>
                              <Text>{values.phoneNumber}</Text>
                            </div>
                            <div>
                              <Text weight="semibold">Gender:</Text>
                              <Text>
                                {
                                  formOptions.gender.find(
                                    (g) => g.value === values.gender
                                  )?.label
                                }
                              </Text>
                            </div>
                            <div>
                              <Text weight="semibold">Tech Interest:</Text>
                              <Text>
                                {
                                  formOptions.techCareer.find(
                                    (c) => c.value === values.techCareer
                                  )?.label
                                }
                              </Text>
                            </div>
                            <div>
                              <Text weight="semibold">Experience:</Text>
                              <Text>
                                {
                                  formOptions.experienceLevel.find(
                                    (e) => e.value === values.experienceLevel
                                  )?.label
                                }
                              </Text>
                            </div>
                          </div>

                          {values.reasons && (
                            <div>
                              <Text weight="semibold">Why attending:</Text>
                              <Text className="mt-1">{values.reasons}</Text>
                            </div>
                          )}
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

                        <div className="text-center">
                          <Text size="sm" color="muted">
                            Want to participate in the hackathon?{" "}
                            <Link
                              href="/hackathon/registration"
                              className="text-blockchain-green hover:underline"
                            >
                              Register here
                            </Link>
                          </Text>
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
