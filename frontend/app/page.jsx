import { Button } from "@/components/ui/button";
import { auth } from "@clerk/nextjs/server";
import { Badge } from "@/components/ui/badge";
import { Flame, ArrowRight, Star, Clock, Users } from "lucide-react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { FEATURES, HOW_IT_WORKS_STEPS, SITE_STATS } from "@/lib/data";
import PricingSection from "@/components/ui/PricingSection";

export default async function Home() {
  const { userId } = auth();

  const subscriptionTier = userId ? "pro" : "free";

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900">
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
           <div className="flex-1 text-center md:text-left relative">

        <Badge
          variant="outline"
          className="border-2 border-orange-600 text-orange-700 bg-orange-50 text-sm font-bold mb-2 uppercase tracking-wide flex items-center gap-1"
        >
          <Flame className="w-4 h-4" />
          #1 A CULINARY AFFAIR
        </Badge>

        <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-[0.9] tracking-tight">
          Give your{" "}
          <span className="italic underline decoration-4 decoration-orange-600">
            leftovers
          </span>{" "}
          second <br />
          life.
        </h1>

        <p className="text-xl md:text-2xl text-stone-600 mb-10 max-w-lg mx-auto md:mx-0 font-light">
          “Open your fridge, We’ll write your menu.”
        </p>

        {/* BUTTON */}
        <Link href="/dashboard">
          <Button
            size="lg"
            className="px-8 py-6 text-lg flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white"
          >
            Start cooking free
            <ArrowRight className="w-5 h-5" />
          </Button>
        </Link>
        <p className="mt-6 text-sm text-stone-500">
          <span className="font bold text-stone-900">10k+ cooks</span>{" "} joined last month 

        </p>
        <div className="hidden md:block absolute right-0 top-62">
  <Image
    src="/ingridients.png"
    alt="Food Bowl"
    width={350}
    height={350}
    className="object-contain"
  />
</div>
        <div>
  <Card className="relative w-full h-[500px] border-4 border-stone-900 bg-stone-200 overflow-hidden">
    <Image
      src="/Pizza.png"
      alt="Delicious pizza"
      fill
      className="object-cover"
    />
    <Card className="absolute bottom-8 left-8 bg-white/95 backdrop-blur-sm border-2 border-stone-900 py-0">
  <CardContent className="p-4">

    {/* Top Section */}
    <div className="flex justify-between items-start">
      <div>
        <h3 className="font-bold text-lg">
          Rustic Tomato Basil Pizza
        </h3>

        <div className="flex gap-0.5 mt-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className="w-3 h-3 fill-orange-500 text-orange-500"
            />
          ))}
        </div>
      </div>

      <Badge
        variant="outline"
        className="border-2 border-green-700 bg-green-50 text-green-700 font-bold rounded-full"
      >
        98% MATCH
      </Badge>
    </div>

    {/* Bottom Section */}
    <div className="flex gap-4 text-xs text-stone-500 font-medium mt-3">
      <span className="flex items-center gap-1">
        <Clock className="w-3 h-3" />
        25 mins
      </span>

      <span className="flex items-center gap-1">
        <Users className="w-3 h-3" />
        2 servings
      </span>
    </div>

  </CardContent>
</Card>
  </Card>
</div>
        </div>
 </div>
</div>
      
      </section>
      <section className="py-12 border-y-2 border-stone-900 bg-stone-900" >
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center px-4">
          {SITE_STATS.map((stat,i) => (
            <div key={i}>
              <div className=" text-4xl font-bold mb-1 text-stone-50">
                {stat.val}
              </div>
              <Badge
                variant="secondary"
                className = "bg-transparent text-orange-500 text-sm uppercase tracking-wider font-medium border-none">
                  {stat.Label}
              </Badge>
              </div>

          ))}
          </div> 

      </section>
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 ">
            <h2 className="text-5xl md:text-6xl font-bold mb-4">
              Your own Kitchen

            </h2>
            <p className="text-stone-600 text-xl font-light">
              Everything you need for your food is here
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {FEATURES.map((features, i) => {
              const IconComponent = features.icon;
              return(
                <Card
                  key = {i}
                  className="border-2 border-stone-200 bg-white hover:border-orange-600 hover:shadow.lg transition-all group py-0">
                    <CardContent className="p-8">
  <div className="flex justify-between items-start">
    <div className="border-2 border-stone-200 bg-orange-50 p-3">
      <IconComponent className="w-6 h-6" />
    </div>

    <Badge variant="secondary">
      {features.limit}
    </Badge>
  </div>

  <h3 className="text-2xl font-bold mt-6">
    {features.title}
  </h3>

  <p className="text-stone-600 mt-2">
    {features.description}
  </p>
</CardContent>
                </Card>
              )
            })}

          </div>

        </div>

      </section >
      <section className="py-24 px-4 border-y-2 border-stone-200 bg-stone-900 text-stone-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold mb-16">
            Cook in 3 steps

          </h2>
          <div className="space-y-12">
            {HOW_IT_WORKS_STEPS.map((item,i)=>{
              return( <div key={i}>
                <div className="flex gap-6 items-start">
                  <Badge
                    variant="outline"
                    className="text-6xl font-bold text-orange-500 border-none bg-transparent p-0 h-auto">
                    {item.step}
                  </Badge>
                  <div>
                    <h3 className="text-2xl font-bold mb-3 ">{item.title} </h3>
                    <p className="text.lg text-stone-400 font-light">
            
                      {item.desc}
                    </p>
                  </div>
                </div>
                {i < HOW_IT_WORKS_STEPS.length - 1 &&  (
                    <hr className="my-8 bg-stone-700 "/>
            )}
                </div>
                ); 
            })}
            
          </div>
        </div>
        </section>

      <section className="py-24 px-4">
  <div className="max-w-5xl mx-auto">
    <PricingSection />
  </div>
</section>
</div>
  );
}