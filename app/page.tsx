import Header from "@/components/custom/Header";
import Navigation from "@/components/custom/Navigation";
import OverviewCard from "@/components/custom/Overview";
import PropertyCard from "@/components/custom/PropertyCard";
import SalesOverview from "@/components/custom/SalesOverview";
import StatsGrid from "@/components/custom/StatsGrid";
import { MessagesSquare } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen white w-full pb-6.75">
      <Header />
      <Navigation />

      <main className="w-full max-w-321 mx-auto">
        <h1 className="text-xl font-semibold text-black mb-4 mt-3">
          Welcome, Ezeugo
        </h1>

        <div className="flex mb-5 gap-4">
          <div className="flex-1">
            <SalesOverview />
          </div>
          <div className="w-full max-w-101.75">
            <div className="space-y-5">
              <OverviewCard title="Listings Overview" isUser={false}>
                <StatsGrid
                  stats={[
                    { label: "Total", value: "1.8k" },
                    { label: "Active", value: "80" },
                    { label: "Archived", value: "1k" },
                  ]}
                />
              </OverviewCard>

              <OverviewCard title="Users Overview" isUser>
                <StatsGrid
                  stats={[
                    { label: "Total", value: "20.7k" },
                    { label: "Riders", value: "8.5k" },
                    { label: "Subscribers", value: "7.5k" },
                  ]}
                />
              </OverviewCard>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-6">
          <PropertyCard
            image="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=300&fit=crop"
            label="Most Clicked"
            title="Urban Prime Plaza Premiere"
          />
          <PropertyCard
            image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop"
            label="Most Watchlisted"
            title="Urban Prime Plaza Premiere"
          />
          <PropertyCard
            image="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop"
            label="Hottest Listing"
            title="Urban Prime Plaza Premiere"
          />
        </div>
      </main>

      <button className="fixed bottom-8 right-8 w-14 h-14 bg-gray-700 rounded-full flex items-center justify-center text-white shadow-lg hover:bg-gray-800 transition-colors">
        <MessagesSquare size={24} />
      </button>
    </div>
  );
}
