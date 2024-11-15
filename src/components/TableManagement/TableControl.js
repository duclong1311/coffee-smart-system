import React, { useContext } from "react";
import table from "../../assets/images/table.png";
import waiter from "../../assets/images/waiter.png";
import XSticker from "../../assets/images/X sticker.png";
import { MyContextDataTable } from "../context/ContextDataTable";

const TableControl = ({ handleClickTable }) => {
  const { listTable } = useContext(MyContextDataTable);

  return (
    <>
      <div className="p-1">
        <h1 className="text-xl font-bold text-center mb-6">Quản lí bàn</h1>
        {/* old here */}

        <div className="grid grid-cols-4 gap-3 mb-24">
          {listTable.map((item) => (
            <div
              className="flex flex-col items-center space-y-2"
              key={item.tableNumber}
            >
              <div className="w-32 h-48 bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden shadow-lg flex-col relative">
                <div className="w-full relative h-80 flex items-center justify-center p-2">
                  <img
                    src={table}
                    alt="Bàn"
                    className="object-fill h-full w-full rounded-lg "
                  />
                  <div className="absolute top-1 right-1 bg-white p-1 rounded-full border border-gray-300">
                    {item.food.length > 0 ? (
                      <img
                        src={waiter}
                        alt=""
                        className="h-10 rounded-2xl object-cover"
                      />
                    ) : (
                      <img
                        src={XSticker}
                        alt=""
                        className="h-10 rounded-2xl object-cover"
                      />
                    )}
                  </div>
                </div>
              </div>
              <button
                className="before:ease relative h-12 w-14 rounded-lg overflow-hidden border border-b-amber-800 bg-[#6F4F37] text-white shadow-lg transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-amber-800 hover:before:-translate-x-40"
                onClick={() => handleClickTable(item)}
              >
                <span relative="relative z-10">{item.tableNumber}</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TableControl;
