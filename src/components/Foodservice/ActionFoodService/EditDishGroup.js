import { Field, Form, Formik } from "formik";
import React, { useContext, useState } from "react";
import { MyServiceContext } from "../../context/ServiceContext";
const EditDishGroup = ({ closeModalEdit }) => {
  const [oldDishGroup, setOldDishGroup] = useState({});

  console.log("editgroupmodal");
  return (
    <div>
      <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
        <div className="bg-white p-6 rounded-lg shadow-lg w-96">
          <h2 className="text-xl font-semibold mb-4">Thêm nhóm món</h2>
          <Formik initialValues={oldDishGroup}>
            <Form>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Mã nhóm món
                </label>
                <Field
                  type="text"
                  name="groupCode"
                  className="w-full p-2 border border-gray-300 rounded-lg mt-1"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Nhóm món
                </label>
                <Field
                  type="text"
                  name="groupName"
                  className="w-full p-2 border border-gray-300 rounded-lg mt-1"
                />
              </div>
              <div className="flex justify-end gap-2 ">
                <button
                  type="button"
                  onClick={closeModalEdit}
                  className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  Submit
                </button>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default EditDishGroup;
