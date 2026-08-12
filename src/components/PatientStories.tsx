"use client";

import Image from "next/image";
import { useState } from "react";
import { copy } from "@/content/copy";
import { site } from "@/content/site";
import { Reveal, StaggerGrid } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

const thumbnailMap = {
  storyEmma: site.images.storyEmma,
  storyRonda: site.images.storyRonda,
  storyCathy: site.images.storyCathy,
  storyVictor: site.images.storyVictor,
} as const;

type Story = (typeof copy.patientStories.stories)[number];

function VideoStoryCard({ story }: { story: Story }) {
  const [playing, setPlaying] = useState(false);
  const thumbnail = thumbnailMap[story.thumbnail];

  return (
    <article className="story-card bt-card flex h-full flex-col">
      <div className="video-facade overflow-hidden rounded-brand">
        {playing ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${story.videoId}?autoplay=1&rel=0`}
            title={`${story.name} — Deep TMS patient story from BrainsWay`}
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
            className="video-facade-iframe"
          />
        ) : (
          <button
            type="button"
            className="video-facade-btn relative"
            aria-label={`Play video: ${story.name} (${story.condition})`}
            onClick={() => setPlaying(true)}
          >
            <Image
              src={thumbnail}
              alt=""
              fill
              className="object-cover transition-transform duration-500 ease-brand group-hover:scale-[1.03]"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 420px"
            />
            <span className="video-play" aria-hidden />
          </button>
        )}
      </div>
      <h3 className="story-card-title">{story.name}</h3>
      <p className="story-condition">{story.condition}</p>
      <p className="story-card-body">{story.body}</p>
    </article>
  );
}

export function PatientStories() {
  return (
    <section id="patient-stories" className="bt-section">
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeader
            eyebrow={copy.patientStories.eyebrow}
            headline={copy.patientStories.headline}
            body={copy.patientStories.intro}
          />
        </Reveal>

        <StaggerGrid className="story-grid mt-12" staggerMs={100}>
          {copy.patientStories.stories.map((story) => (
            <VideoStoryCard key={story.videoId} story={story} />
          ))}
        </StaggerGrid>

        <Reveal delay={120}>
          <p className="citation-note mt-8 text-center text-sm leading-relaxed text-bt-muted">
            {copy.patientStories.disclaimer}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
