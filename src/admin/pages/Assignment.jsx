import React from "react";
import Layout from "../../shared/components/Layout";
import AssignmentTable from "../components/AssignmentTable";

const Assignment = () => {
  return (
    <Layout>
      <section className="py-6 bg-primary">
        <div className="mx-auto max-w-full px-5 lg:px-20">
          <div className="px-3 py-20 bg-opacity-10">
            <div className="w-full flex">
              <button className="btn ml-auto">Add Assignment</button>
            </div>
            <div className="overflow-x-auto mt-4">
              <AssignmentTable />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Assignment;
