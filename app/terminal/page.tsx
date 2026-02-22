import {AnimatedSpan, Terminal, TypingAnimation } from "@/components/ui/terminal"
import { TbWorld } from "react-icons/tb";

export default function page() {
    return(
        <div className="min-h-screen flex items-center justify-center">

        <Terminal >
            <TypingAnimation>
                Hello! Wake up Neo
            </TypingAnimation>

            <AnimatedSpan className="text-green-500 flex gap-2" >
                <TbWorld />
                Hey, what are u doing
            </AnimatedSpan>

             <AnimatedSpan className="text-green-500 flex gap-2" >
                <TbWorld />
                Hey, what are u doing
            </AnimatedSpan>

             <AnimatedSpan className="text-green-500 flex gap-2" >
                <TbWorld />
                Hey, what are u doing
            </AnimatedSpan>
              <AnimatedSpan className="text-green-500 flex gap-2" >
                <TbWorld />
                Hey, what are u doing
            </AnimatedSpan>
              <AnimatedSpan className="text-green-500 flex gap-2" >
                <TbWorld />
                Hey, what are u doing
            </AnimatedSpan>
              <AnimatedSpan delay={9000} className="text-green-500 flex gap-2" >
                <TbWorld />
                Hey, what are u doing
            </AnimatedSpan>
              <AnimatedSpan delay={90000} className="text-green-500 flex gap-2" >
                <TbWorld />
                Wake Up!
            </AnimatedSpan>

            <TypingAnimation className="text-red-500">
                Its time to ventre into the world ................
            </TypingAnimation>

  <TypingAnimation className="  text-muted-foreground">
                Its time to ventre into the world ...................
            </TypingAnimation>
          
        </Terminal>
        </div>
    )
}            