import { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { DashboardLayout, MainContent } from "../components/layout/DashboardLayout";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import CapsuleList from "../components/common/CapsuleList";
import Auth from "../utils/auth";
import { QUERY_SHARED_CAPSULES } from "../utils/queries";

export default function Dashboard() {
  const { loading, data, error, refetch } = Auth.loggedIn()
    ? useQuery(QUERY_SHARED_CAPSULES, { fetchPolicy: "network-only" }) // Always fetch fresh data
    : { loading: false, data: null, refetch: () => {} };

  useEffect(() => {
    if (Auth.loggedIn()) {
      refetch(); // Ensures the query runs every time the page is visited
    }
  }, []); // Runs once on mount

  if (error) {
    console.error(error);
    return <div>Error loading capsules.</div>;
  }

  // Filter and sort capsules by unlockDate
  const processCapsules = (capsules: any[]) => {
    const now = new Date();
    return capsules
      .filter((capsule) => new Date(capsule.unlockDate) <= now) // Only unlocked capsules
      .sort((a, b) => new Date(b.unlockDate).getTime() - new Date(a.unlockDate).getTime()); // Sort by unlockDate descending
  };

  const capsules = data?.sharedCapsules || [];

  // Apply filtering and sorting
  const filteredCapsules = processCapsules(capsules);

  return (
    <DashboardLayout>
      <Header />
      <MainContent>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <CapsuleList capsules={filteredCapsules} title="Public Capsules" />
        )}
      </MainContent>
      <Footer />
    </DashboardLayout>
  );
}
