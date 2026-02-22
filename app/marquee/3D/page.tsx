import { cn } from "@/lib/utils"
import { Marquee } from "@/components/ui/marquee"

const reviews = [
    {
        name: "Aashish Gharti",
        username: "@cultivator",
        body: "Im a cultivator. I have been cultivating."
    },
    {
        name: "Batman",
        username: "@bat",
        body: "I protect gotham city"
    },
    {
        name: "Zhuo Fan",
        username: "@demonic",
        body: " Im a demonic cultivator"
    },
    {
        name: "Chun Ma",
        username: "@prodigy",
        body: "Im the first heavenly demon"
    },
    {
        name: "Loid",
        username: "@water",
        body: "Water is good, loyd is good"
    },
    {
        name: "Chyung Myung",
        username: "@swordsaint",
        body: " Im the sword saint of mount hua sect"
    },
    {
        name: "Anil Bhujel",
        username: "@anil",
        body: "i am from nepal"
    },
    {
        name: "luffy",
        username: "@pirateking",
        body: "im from wano"
    }
]

const firstRow = reviews.slice(0, reviews.length / 2)
const secondRow = reviews.slice(reviews.length / 2)
const thirdRow = reviews.slice(0, reviews.length / 2)
const fourthRow = reviews.slice(reviews.length / 2)

const ReviewCard = (
    {
        name,
        username,
        body,
    }: {
        name: string
        username: string
        body: string
    }) => {
    return (
        <figure
            className={cn(
                "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4 sm:w-36",
                // light styles
                "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
                // dark styles
                "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
            )}
        >
            <div className="  flex flex-row items-center gap-2">
                {/* circle */}
                <div className="rounded-full h-6 w-6 bg-linear-to-r from-blue-500 to-purple-600 "></div>
                <div className="flex flex-col">
                    <figcaption className="text-sm font-medium dark:text-white ">
                        {name}
                    </figcaption>
                    <p className="text-xs font-medium dark:text-white/40 ">{username}</p>
                </div>
            </div>
            {/* body */}
            <blockquote className="mt-2 text-sm "> {body} </blockquote>
        </figure>
    )
}
export default function MarqueeDemo() {
    return (
        <div
            className=" relative max-h-screen flex  w-full justify-center items -center overflow-hidden [perspective:300px]"
            style={{
                transform:
                    "translateX(-100px) translateY(0px) translateZ(-100px) rotateX(20deg) rotateY(-10deg) rotateZ(20deg)",
            }} >
            <Marquee
                vertical
                pauseOnHover
                className="[--duration:40s]" >
                {
                    firstRow.map((item) => (
                        <ReviewCard key={item.username} {...item} />
                    ))
                }
            </Marquee>

            <Marquee
                vertical
                reverse
                pauseOnHover
                className="[--duration:20s]" >
                {
                    secondRow.map((item) => (
                        <ReviewCard key={item.username} {...item} />
                    ))
                }
            </Marquee>

            <Marquee
                vertical
           reverse
                pauseOnHover
                className="[--duration:40s]" >
                {
                    thirdRow.map((item) => (
                        <ReviewCard key={item.username} {...item} />
                    ))
                }
            </Marquee>

            <Marquee
                vertical
              
                pauseOnHover
                className="[--duration:20s]" >
                {
                    fourthRow.map((item) => (
                        <ReviewCard key={item.username} {...item} />
                    ))
                }
            </Marquee>

            <div className="from-background pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b"></div>
      <div className="from-background pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t"></div>
      <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r"></div>
      <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l"></div>
        </div>
    )
}

