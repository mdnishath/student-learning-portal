import React from "react";
import Layout from "../../shared/components/Layout";
import RankingList from "../components/RankingList";
import StudentRanking from "../components/StudentRanking";

const Leaderboard = () => {
  return (
    <Layout>
      <section className="py-6 bg-primary">
        <div className="mx-auto max-w-7xl px-5 lg:px-0">
          <StudentRanking />
          <RankingList />
        </div>
      </section>
    </Layout>
  );
};

export default Leaderboard;
