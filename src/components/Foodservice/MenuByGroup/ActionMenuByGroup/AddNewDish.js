import axios from "axios";
import { Field, Form, Formik } from "formik";
import React, { useContext } from "react";
import { MyServiceContext } from "../../../context/ServiceContext";

const AddNewDish = ({ closeModalAddDish, groupDetails }) => {
  const { updateDishGroup, defaultDishValues } = useContext(MyServiceContext);

  // console.log("🚀 ~ AddNewDish ~ groupDetails:", groupDetails);

  const onSubmitHandler = async (data) => {
    console.log("🚀 ~ Dữ liệu nhận được:", data);
    updateDishGroup(data);
    closeModalAddDish();
  };

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-2/6">
        <h2 className="text-xl font-semibold mb-4">Thêm mới món</h2>
        <Formik initialValues={defaultDishValues} onSubmit={onSubmitHandler}>
          {() => (
            <Form>
              <div className="mb-4 flex justify-between pr-16 pl-3 items-center">
                <label className="block text-sm font-medium text-gray-700">
                  Mã số món
                </label>
                <Field
                  type="text"
                  name="code"
                  className="w-2/3 p-2 border border-gray-300 rounded-lg"
                />
              </div>
              <div className="mb-4 flex justify-between pr-16 pl-3 items-center">
                <label className="block text-sm font-medium text-gray-700">
                  Tên món
                </label>
                <Field
                  type="text"
                  name="foodName"
                  className="w-2/3 p-2 border border-gray-300 rounded-lg"
                />
              </div>
              <div className="mb-4 flex justify-between pr-16 pl-3 items-center">
                <label className="block text-sm font-medium text-gray-700">
                  Giá món
                </label>
                <Field
                  type="text"
                  name="price"
                  className="w-2/3 p-2 border border-gray-300 rounded-lg"
                />
              </div>
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={closeModalAddDish}
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
          )}
        </Formik>
      </div>
    </div>
  );
};

export default AddNewDish;
