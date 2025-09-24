import Image from "next/image";
import { Briefcase, RockingChair, Tv, Lightbulb, Truck, CloudSunRain, LayoutGrid, ShieldCheck, DraftingCompass, Gem, Disc, Settings, Award } from "lucide-react";

const features = [

    {
        icon: <Gem className="h-8 w-8 text-primary" />,
        title: "Toughened safety glass panels",

    },

    {
        icon: <Disc className="h-8 w-8 text-primary" />,
        title: " Sleek, space-saving design",

    },

    {
        icon: <Settings className="h-8 w-8 text-primary" />,
        title: " Easy to clean and maintain",

    },

    {
        icon: <Award className="h-8 w-8 text-primary" />,
        title: "Enhances bathroom aesthetics",

    },

];


export function Railing() {
    return (
        <section className="py-20 bg-background text-foreground">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-4">

                {/* Image Section */}
                <div>
                    <Image
                        src="https://res.cloudinary.com/ddqqlfsjp/image/upload/v1758710350/freepik__a-luxurious-modern-bathroom-with-a-frameless-glass__82803.jpeg_bkuqan.jpg" // Replace with your actual image
                        alt="Conference Room"
                        width={600}
                        height={600}
                        className="w-full h-auto rounded-2xl shadow-lg object-cover"
                    />
                </div>

                {/* Content Section */}
                <div>
                    <h2 className="text-4xl font-bold tracking-tight sm:text-5xl font-headline mb-8 text-primary">
                       Stylish glass shower cubicles bring privacy and durability.
                    </h2>

                    <div className="space-y-8">
                        {features.map((item) => (
                            <div key={item.title} className="flex items-center gap-5">
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
                                    {item.icon}
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold">{item.title}</h3>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>

            </div>
        </section>
    );
}