/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Home,
  Users,
  Calendar,
  FileText,
  Upload,
  LogOut,
  Plus,
  UserPlus,
  Copy,
  Trash2,
  Clock,
  Trophy,
  FileCode,
} from "lucide-react";
import { Formik, Form } from "formik";
import {
  FormInput,
  FormSelect,
  FormTextarea,
  FormMultiSelect,
} from "@/components/ui/form-components";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Text } from "@/components/common/Text";
import { useHackathonState } from "@/hooks/store/useHackathonState";
import { clearToken } from "@/lib/api";
import { useTeams } from "@/hooks/crud/useteams";
import { teamActionSchema, projectSubmissionSchema } from "@/lib/validation";

const categoryOptions = [
  { value: "financial-inclusion", label: "Financial Inclusion & Education" },
  { value: "open-governance", label: "Open Governance" },
  { value: "identity-verification", label: "E-Identity & Verification" },
  { value: "entertainment-media", label: "Entertainment & Media" },
  { value: "digital-collectibles", label: "Digital Collectibles" },
  { value: "real-world-assets", label: "Real World Assets (RWAs)" },
  { value: "open-idea", label: "Open Idea" },
];

const technologyOptions = [
  { value: "solidity", label: "Solidity" },
  { value: "javascript", label: "JavaScript" },
  { value: "typescript", label: "TypeScript" },
  { value: "react", label: "React" },
  { value: "nextjs", label: "Next.js" },
  { value: "nodejs", label: "Node.js" },
  { value: "python", label: "Python" },
  { value: "web3", label: "Web3.js" },
  { value: "ethers", label: "Ethers.js" },
  { value: "hardhat", label: "Hardhat" },
  { value: "truffle", label: "Truffle" },
  { value: "ipfs", label: "IPFS" },
  { value: "metamask", label: "MetaMask" },
];

export default function HackathonDashboardPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("overview");
  const { currentHacker, hasTeam, teamId } = useHackathonState();

  const handleLogout = () => {
    clearToken();
    router.push("/hackathon/login");
  };

  if (!currentHacker) {
    // Redirect to login if not authenticated
    router.push("/hackathon/login");
    return null;
  }

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/blogathon_bg.png')" }}
    >
      <div className="min-h-screen bg-black/75">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-600">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-blockchain-green rounded-full flex items-center justify-center">
              <Text color="white" weight="bold">
                {currentHacker.firstName?.[0]}
                {currentHacker.lastName?.[0]}
              </Text>
            </div>
            <div>
              <Text color="white" weight="semibold">
                Welcome back, {currentHacker.firstName}!
              </Text>
              <Text color="muted" size="sm">
                Hacker Dashboard
              </Text>
            </div>
          </div>

          <Button
            variant="outline"
            size="sm"
            onClick={handleLogout}
            className="border-gray-600 text-white hover:bg-red-600"
          >
            <LogOut className="w-4 h-4 mr-2" />
            Logout
          </Button>
        </div>

        {/* Navigation */}
        <div className="border-b border-gray-600">
          <div className="flex justify-center px-6 py-4">
            <Tabs
              value={activeTab}
              onValueChange={setActiveTab}
              className="w-full max-w-2xl"
            >
              <TabsList className="grid w-full grid-cols-5 bg-gray-800">
                <TabsTrigger
                  value="overview"
                  className="data-[state=active]:bg-blockchain-green"
                >
                  <Home className="w-4 h-4 mr-2" />
                  <span className="hidden sm:inline">Overview</span>
                </TabsTrigger>
                <TabsTrigger
                  value="team"
                  className="data-[state=active]:bg-blockchain-green"
                >
                  <Users className="w-4 h-4 mr-2" />
                  <span className="hidden sm:inline">Team</span>
                </TabsTrigger>
                <TabsTrigger
                  value="schedule"
                  className="data-[state=active]:bg-blockchain-green"
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  <span className="hidden sm:inline">Schedule</span>
                </TabsTrigger>
                <TabsTrigger
                  value="project"
                  className="data-[state=active]:bg-blockchain-green"
                >
                  <FileText className="w-4 h-4 mr-2" />
                  <span className="hidden sm:inline">Project</span>
                </TabsTrigger>
                <TabsTrigger
                  value="submit"
                  className="data-[state=active]:bg-blockchain-green"
                >
                  <Upload className="w-4 h-4 mr-2" />
                  <span className="hidden sm:inline">Submit</span>
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <Tabs value={activeTab} className="max-w-6xl mx-auto">
            {/* Overview Tab */}
            <TabsContent value="overview">
              <OverviewSection />
            </TabsContent>

            {/* Team Tab */}
            <TabsContent value="team">
              <TeamSection />
            </TabsContent>

            {/* Schedule Tab */}
            <TabsContent value="schedule">
              <ScheduleSection />
            </TabsContent>

            {/* Project Tab */}
            <TabsContent value="project">
              <ProjectSection />
            </TabsContent>

            {/* Submit Tab */}
            <TabsContent value="submit">
              <SubmitSection />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

// Overview Section Component
function OverviewSection() {
  const rules = [
    "Hackers teams are made up of a maximum of 5 people.",
    "All projects must be related to blockchain.",
    "Minimum of 3 members of your team will need to be at the venue to be judged.",
    "No online submissions.",
    "Be creative and innovative!",
  ];

  return (
    <div className="space-y-6">
      <Card className="bg-white/95 backdrop-blur">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Trophy className="w-6 h-6 text-blockchain-green" />
            Blockathon Rules
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {rules.map((rule, index) => (
            <div
              key={index}
              className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg"
            >
              <div className="w-8 h-8 bg-blockchain-green rounded-full flex items-center justify-center text-white font-bold text-sm">
                {index + 1}
              </div>
              <Text className="flex-1">{rule}</Text>
            </div>
          ))}
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-white/95 backdrop-blur">
          <CardContent className="p-6 text-center">
            <Clock className="w-12 h-12 text-blockchain-green mx-auto mb-2" />
            <Text size="lg" weight="semibold">
              3 Days
            </Text>
            <Text color="muted">Hackathon Duration</Text>
          </CardContent>
        </Card>

        <Card className="bg-white/95 backdrop-blur">
          <CardContent className="p-6 text-center">
            <Trophy className="w-12 h-12 text-blockchain-green mx-auto mb-2" />
            <Text size="lg" weight="semibold">
              $10,000
            </Text>
            <Text color="muted">Total Prize Pool</Text>
          </CardContent>
        </Card>

        <Card className="bg-white/95 backdrop-blur">
          <CardContent className="p-6 text-center">
            <Users className="w-12 h-12 text-blockchain-green mx-auto mb-2" />
            <Text size="lg" weight="semibold">
              100+
            </Text>
            <Text color="muted">Registered Hackers</Text>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

// Team Section Component
function TeamSection() {
  const [teamAction, setTeamAction] = useState<"create" | "join">("create");
  const { hasTeam } = useHackathonState();
  const { data: teamData, isLoading } = useTeams();

  const handleTeamSubmit = async (values: any) => {
    // Implement team creation/joining logic
    console.log("Team action:", values);
  };

  if (isLoading) {
    return (
      <Card className="bg-white/95 backdrop-blur">
        <CardContent className="p-12 text-center">
          <div className="w-8 h-8 border-4 border-blockchain-green border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <Text>Loading team information...</Text>
        </CardContent>
      </Card>
    );
  }

  if (hasTeam && teamData) {
    return (
      <Card className="bg-white/95 backdrop-blur">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="w-6 h-6 text-blockchain-green" />
            Team Overview
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Text weight="semibold" className="mb-2">
                Team Name
              </Text>
              <Text size="lg">{teamData.name}</Text>
            </div>
            <div>
              <Text weight="semibold" className="mb-2">
                Invite Code
              </Text>
              <div className="flex items-center gap-2">
                <Text size="lg" className="font-mono">
                  {teamData.inviteCode}
                </Text>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() =>
                    navigator.clipboard.writeText(teamData.inviteCode)
                  }
                >
                  <Copy className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          <div>
            <Text weight="semibold" className="mb-4">
              Team Members ({teamData.members.length}/5)
            </Text>
            <div className="space-y-2">
              {teamData.members.map((member: any, index: number) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg"
                >
                  <div className="w-8 h-8 bg-blockchain-green rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {member.firstName[0]}
                    {member.lastName[0]}
                  </div>
                  <div className="flex-1">
                    <Text weight="medium">
                      {member.firstName} {member.lastName}
                    </Text>
                    <Text size="sm" color="muted">
                      {member.role}
                    </Text>
                  </div>
                  <Badge variant="secondary">{member.role}</Badge>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-end">
            <Button variant="destructive">
              <Trash2 className="w-4 h-4 mr-2" />
              Leave Team
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="bg-white/95 backdrop-blur">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Users className="w-6 h-6 text-blockchain-green" />
          Join or Create a Team
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex gap-4">
          <Button
            variant={teamAction === "create" ? "default" : "outline"}
            onClick={() => setTeamAction("create")}
            className={
              teamAction === "create"
                ? "bg-blockchain-green hover:bg-blockchain-green/90"
                : ""
            }
          >
            <Plus className="w-4 h-4 mr-2" />
            Create Team
          </Button>
          <Button
            variant={teamAction === "join" ? "default" : "outline"}
            onClick={() => setTeamAction("join")}
            className={
              teamAction === "join"
                ? "bg-blockchain-green hover:bg-blockchain-green/90"
                : ""
            }
          >
            <UserPlus className="w-4 h-4 mr-2" />
            Join Team
          </Button>
        </div>

        <Formik
          initialValues={{ teamName: "", inviteCode: "", action: teamAction }}
          validationSchema={teamActionSchema}
          onSubmit={handleTeamSubmit}
          enableReinitialize
        >
          {({ isValid, isSubmitting }) => (
            <Form className="space-y-4">
              {teamAction === "create" ? (
                <FormInput
                  name="teamName"
                  placeholder="Enter team name"
                  icon="/images/icons/team.svg"
                />
              ) : (
                <FormInput
                  name="inviteCode"
                  placeholder="Enter invite code"
                  icon="/images/icons/key.svg"
                />
              )}

              <Button
                type="submit"
                disabled={!isValid || isSubmitting}
                className="w-full bg-blockchain-green hover:bg-blockchain-green/90"
              >
                {isSubmitting
                  ? `${teamAction === "create" ? "Creating" : "Joining"}...`
                  : `${teamAction === "create" ? "Create" : "Join"} Team`}
              </Button>
            </Form>
          )}
        </Formik>
      </CardContent>
    </Card>
  );
}

// Schedule Section Component
function ScheduleSection() {
  const schedule = [
    {
      day: "Day 1",
      date: "November 1, 2024",
      events: [
        { time: "10:00 AM", title: "Opening Ceremony" },
        { time: "11:00 AM", title: "Team Formation" },
        { time: "12:00 PM", title: "Problem Statements Released" },
        { time: "1:00 PM", title: "Lunch Break" },
        { time: "2:00 PM", title: "Hackathon Begins" },
        { time: "6:00 PM", title: "Mentor Sessions" },
      ],
    },
    {
      day: "Day 2",
      date: "November 2, 2024",
      events: [
        { time: "9:00 AM", title: "Development Continues" },
        { time: "12:00 PM", title: "Progress Check-in" },
        { time: "1:00 PM", title: "Lunch Break" },
        { time: "2:00 PM", title: "Workshop Sessions" },
        { time: "6:00 PM", title: "Mentor Office Hours" },
        { time: "11:00 PM", title: "Midnight Snacks" },
      ],
    },
    {
      day: "Day 3",
      date: "November 3, 2024",
      events: [
        { time: "9:00 AM", title: "Final Development" },
        { time: "12:00 PM", title: "Project Submission Deadline" },
        { time: "1:00 PM", title: "Lunch Break" },
        { time: "2:00 PM", title: "Demo Presentations" },
        { time: "4:00 PM", title: "Judging Period" },
        { time: "6:00 PM", title: "Award Ceremony" },
      ],
    },
  ];

  return (
    <div className="space-y-6">
      {schedule.map((day, index) => (
        <Card key={index} className="bg-white/95 backdrop-blur">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="w-6 h-6 text-blockchain-green" />
              {day.day} - {day.date}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {day.events.map((event, eventIndex) => (
                <div
                  key={eventIndex}
                  className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg"
                >
                  <Badge variant="outline" className="font-mono">
                    {event.time}
                  </Badge>
                  <Text className="flex-1">{event.title}</Text>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

// Project Section Component
function ProjectSection() {
  return (
    <Card className="bg-white/95 backdrop-blur">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <FileCode className="w-6 h-6 text-blockchain-green" />
          Project Categories
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <Text color="muted">
          Choose a category that best fits your project idea. You can change
          this during submission.
        </Text>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {categoryOptions.map((category) => (
            <div
              key={category.value}
              className="p-4 border-2 border-gray-200 rounded-lg hover:border-blockchain-green transition-colors cursor-pointer"
            >
              <Text weight="semibold" className="mb-2">
                {category.label}
              </Text>
              <Text size="sm" color="muted">
                Click to see detailed requirements for this category
              </Text>
            </div>
          ))}
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <Text size="sm" className="text-blue-800">
            <strong>Pro Tip:</strong> Start brainstorming your project idea
            early! Consider the tools and technologies you&apos;ll need, and
            don&apos;t forget to leverage blockchain features like smart
            contracts, tokenization, or decentralization.
          </Text>
        </div>
      </CardContent>
    </Card>
  );
}

// Submit Section Component
function SubmitSection() {
  const [submissionStarted, setSubmissionStarted] = useState(false);

  const handleProjectSubmit = async (values: any) => {
    console.log("Project submission:", values);
    // Implement project submission logic
  };

  if (!submissionStarted) {
    return (
      <Card className="bg-white/95 backdrop-blur">
        <CardContent className="p-12 text-center">
          <Clock className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <Text size="lg" weight="semibold" className="mb-2">
            Submission Not Yet Open
          </Text>
          <Text color="muted" className="mb-6">
            Project submissions will open on November 2nd, 2024
          </Text>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <Text size="sm" className="text-yellow-800">
              Use this time to work on your project! Submissions will be
              available when the deadline approaches.
            </Text>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="bg-white/95 backdrop-blur">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Upload className="w-6 h-6 text-blockchain-green" />
          Submit Your Project
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Formik
          initialValues={{
            projectName: "",
            description: "",
            category: "",
            githubRepo: "",
            liveDemo: "",
            videoDemo: "",
            technologies: [],
            teamContribution: "",
          }}
          validationSchema={projectSubmissionSchema}
          onSubmit={handleProjectSubmit}
        >
          {({ isValid, isSubmitting }) => (
            <Form className="space-y-6">
              <FormInput
                name="projectName"
                placeholder="Project Name"
                icon="/images/icons/project.svg"
              />

              <FormTextarea
                name="description"
                placeholder="Describe your project (what it does, how it works, why it's innovative)"
                rows={4}
              />

              <FormSelect
                name="category"
                placeholder="Select Project Category"
                options={categoryOptions}
                icon="/images/icons/category.svg"
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormInput
                  name="githubRepo"
                  type="url"
                  placeholder="GitHub Repository URL"
                  icon="/images/icons/github.svg"
                />
                <FormInput
                  name="liveDemo"
                  type="url"
                  placeholder="Live Demo URL (Optional)"
                  icon="/images/icons/link.svg"
                />
              </div>

              <FormInput
                name="videoDemo"
                type="url"
                placeholder="Video Demo URL (Optional)"
                icon="/images/icons/video.svg"
              />

              <FormMultiSelect
                name="technologies"
                placeholder="Select Technologies Used"
                options={technologyOptions}
              />

              <FormTextarea
                name="teamContribution"
                placeholder="Describe each team member's contribution to the project"
                rows={3}
              />

              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <Text size="sm" className="text-red-800">
                  <strong>Important:</strong> Once submitted, you cannot edit
                  your project. Please review all information carefully before
                  submitting.
                </Text>
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
                    Submitting Project...
                  </>
                ) : (
                  <>
                    <Upload className="w-4 h-4 mr-2" />
                    Submit Project
                  </>
                )}
              </Button>
            </Form>
          )}
        </Formik>
      </CardContent>
    </Card>
  );
}
