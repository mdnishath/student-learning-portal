import React from "react";
import Layout from "../../shared/components/Layout";
import QuizList from "../components/QuizList";

const Quiz = () => {
  return (
    <Layout>
      <section class="py-6 bg-primary">
        <div class="mx-auto max-w-7xl px-5 lg:px-0">
          <div class="mb-8">
            <h1 class="text-2xl font-bold">
              Quizzes for "Debounce Function in JavaScript - JavaScript Job
              Interview question"
            </h1>
            <p class="text-sm text-slate-200">Each question contains 5 Mark</p>
          </div>
          <QuizList />

          <button class="px-4 py-2 rounded-full bg-cyan block ml-auto mt-8 hover:opacity-90 active:opacity-100 active:scale-95 ">
            Submit
          </button>
        </div>
      </section>
    </Layout>
  );
};

export default Quiz;
