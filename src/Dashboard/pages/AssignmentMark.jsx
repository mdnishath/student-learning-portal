import React from "react";
import Layout from "../../shared/components/Layout";
import AssignmentFilters from "../components/AssignmentFilters";
import AssignmentMarkTable from "../components/AssignmentMarkTable";

const AssignmentMark = () => {
  return (
    <Layout>
      <section className="py-6 bg-primary">
        <div className="mx-auto max-w-full px-5 lg:px-20">
          <div className="px-3 py-20 bg-opacity-10">
            <AssignmentFilters />
            <div className="overflow-x-auto mt-4">
              <AssignmentMarkTable />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AssignmentMark;
