import React from "react";
import Layout from "../../shared/components/Layout";
import Player from "../components/Player";
import PlayerDescription from "../components/PlayerDescription";
import VideoList from "../components/VideoList";

const CoursePlayer = () => {
  return (
    <Layout>
      <section class="py-6 bg-primary">
        <div class="mx-auto max-w-7xl px-5 lg:px-0">
          <div class="grid grid-cols-3 gap-2 lg:gap-8">
            <div class="col-span-full w-full space-y-8 lg:col-span-2">
              <Player />

              <PlayerDescription />
            </div>
            <VideoList />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CoursePlayer;
