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

const firstRow = reviews.slice(0, reviews.length/2)
const secondRow = reviews.slice(reviews.length/2)

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
        return(
            <figure
              className={cn(
        "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
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
    <div className=" relative min-h-screen flex flex-col  w-full justify-center items-center overflow-hidden" >
        <Marquee
        pauseOnHover
        className="[--duration:20s]" >
           {
            firstRow.map((item) => (
                <ReviewCard key={item.username} {...item} />
            ) )
           }
        </Marquee>

        <Marquee
        reverse 
        pauseOnHover
        className="[--duration:20s]" >
            {
                secondRow.map((item)=> (
                    <ReviewCard key={item.username} {...item} />
                ))
            }
        </Marquee>

        <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r"></div>
      <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l"></div>
    </div>
  )
}

/*
Yes — that cn() function did help, but not in the way beginners usually think.
It doesn’t add styles. It prevents class conflicts and cleans up conditional classes.

Let’s break it down properly.

1️⃣ What cn() actually does

Your function:

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

It combines two tools:

🔹 clsx → builds class strings safely

It lets you do things like:

clsx("p-4", isActive && "bg-blue-500")

If isActive is false, it removes that class automatically.

So instead of:

className={isActive ? "p-4 bg-blue-500" : "p-4"}

you can do:

className={clsx("p-4", isActive && "bg-blue-500")}

Cleaner. No manual string building.

🔹 twMerge → resolves Tailwind conflicts

This is the real magic.

Example problem:

className="p-2 p-4"

Tailwind keeps both, but browser uses the last one.

But this can create messy output and unpredictable overrides.

twMerge fixes this:

twMerge("p-2 p-4")

➡️ returns "p-4" only

So duplicate Tailwind classes get merged properly.

2️⃣ Why cn() is useful in your marquee

Your card has lots of classes:

layout classes

light mode colors

dark mode colors

hover states

Without cn() you’d have:

className="relative h-full w-64 cursor-pointer ... dark:bg-gray-50/10 ..."

Hard to read. Hard to conditionally add/remove.

With cn() you can do:

cn(
  "layout classes",
  "light mode classes",
  "dark mode classes",
  isActive && "ring-2"
)

Cleaner, scalable, safer.

3️⃣ Important: cn() did NOT make marquee work

It didn’t:

animate anything

affect speed

control layout

It only helped organize class strings safely.

So your marquee would still slide without it.

It just makes your code maintainable.

4️⃣ Real-world analogy

Think of Tailwind classes as:

ingredients

Then:

clsx = grocery bag that holds ingredients neatly

twMerge = chef removing duplicate ingredients

cn() = both together

So your component always gets a clean recipe.

*/