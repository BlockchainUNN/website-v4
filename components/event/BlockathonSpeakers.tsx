"use client";

import Image from "next/image";
import { blockathonContent } from "@/content/blockathon";
import { Text } from "@/components/common/Text";
import { Card, CardContent } from "@/components/ui/card";

export function BlockathonSpeakers() {
  return (
    <div className="w-full bg-black text-white px-4 md:px-8 py-16">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <Text
            variant="h2"
            size="5xl"
            weight="bold"
            className="mb-4 text-3xl md:text-5xl"
          >
            {blockathonContent.speakers.title}
          </Text>
          <Text size="lg" color="muted" className="text-gray-400">
            {blockathonContent.speakers.subtitle}
          </Text>
        </div>

        {/* Speakers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blockathonContent.speakers.speakers.map((speaker, index) => (
            <Card
              key={index}
              className="bg-transparent border-none overflow-hidden group"
            >
              <CardContent className="p-0">
                <div className="relative h-[423px] overflow-hidden rounded-lg">
                  <Image
                    src={speaker.image}
                    alt={speaker.name}
                    width={400}
                    height={423}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />

                  {/* Overlay with speaker info */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-6">
                    <Text size="xl" weight="bold" className="mb-2 text-white">
                      {speaker.name}
                    </Text>
                    <Text size="sm" className="mb-1 text-gray-300">
                      {speaker.title}
                    </Text>
                    <Text
                      size="sm"
                      weight="semibold"
                      className="text-blockchain-green"
                    >
                      {speaker.company}
                    </Text>
                    {speaker.bio && (
                      <Text
                        size="xs"
                        className="mt-2 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      >
                        {speaker.bio}
                      </Text>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-gray-900 rounded-lg p-6 max-w-2xl mx-auto">
            <Text size="lg" weight="semibold" className="mb-2">
              Want to speak at Blockathon 2024?
            </Text>
            <Text size="sm" color="muted" className="mb-4">
              We're still accepting applications from industry experts and
              thought leaders.
            </Text>
            <a
              href="mailto:speakers@blockchainunn.com"
              className="inline-flex items-center px-6 py-3 bg-blockchain-green text-white rounded-lg hover:bg-blockchain-green/90 transition-colors"
            >
              Apply to Speak
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
