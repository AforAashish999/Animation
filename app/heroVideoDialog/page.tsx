import { HeroVideoDialog } from "@/components/ui/hero-video-dialog"

export default function HeroVideoDialogDemo() {
  return (
    <div className="relative">
      <HeroVideoDialog
        className="block dark:hidden"
        animationStyle="from-center"
        videoSrc="https://www.youtube.com/embed/mdOHJFmfs2g?si=_IU6JSsru5v-BazS"
        // videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
        // thumbnailSrc="https://startup-template-sage.vercel.app/hero-light.png"
        thumbnailSrc="/homebanner.jpg"
        thumbnailAlt="Hero Video"
      />
      <HeroVideoDialog
        className="hidden dark:block"
        animationStyle="from-center"
        videoSrc="https://www.youtube.com/embed/mdOHJFmfs2g?si=_IU6JSsru5v-BazS"
        // videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
        // thumbnailSrc="https://startup-template-sage.vercel.app/hero-dark.png"
        thumbnailSrc="/homebanner.jpg"
        thumbnailAlt="Hero Video"
      />
    </div>
  )
}
