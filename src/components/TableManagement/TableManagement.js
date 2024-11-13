import React, { useContext, useState } from "react";
import TableControl from "./TableControl";
import ListServices from "./ListServices";
import { MyContextDataTable } from "../context/ContextDataTable";

function TableManagement() {
  // const [selectedTable, setSelectedTable] = useState(null);
  // console.log("🚀 ~ TableManagement ~ selectedTable:", selectedTable);
  // const [oderList, setOderList] = useState([]);
  // const ListTable = [
  //   {
  //     soBan: "TB001", // Mã bàn
  //     monAn: [
  //       {
  //         id: 1,
  //         tenMon: "Cà phê đen",
  //         soLuong: 2,
  //         gia: 15000,
  //         tongTien: 30000,
  //       },
  //       {
  //         id: 2,
  //         tenMon: "Bánh mì",
  //         soLuong: 1,
  //         gia: 10000,
  //         tongTien: 10000,
  //       },
  //     ],
  //   },
  //   {
  //     soBan: "TB002",
  //     monAn: [
  //       {
  //         id: 1,
  //         tenMon: "Trà sữa",
  //         soLuong: 3,
  //         gia: 20000,
  //         tongTien: 60000,
  //       },
  //     ],
  //   },
  //   {
  //     soBan: "TB003",
  //     monAn: [
  //       {
  //         id: 1,
  //         tenMon: "Nước cam",
  //         soLuong: 1,
  //         gia: 12000,
  //         tongTien: 12000,
  //       },
  //       {
  //         id: 2,
  //         tenMon: "Cà phê sữa",
  //         soLuong: 1,
  //         gia: 18000,
  //         tongTien: 18000,
  //       },
  //     ],
  //   },
  //   {
  //     soBan: "TB004",
  //     monAn: [
  //       {
  //         id: 1,
  //         tenMon: "Sinh tố dâu",
  //         soLuong: 2,
  //         gia: 25000,
  //         tongTien: 50000,
  //       },
  //     ],
  //   },
  //   {
  //     soBan: "TB005",
  //     monAn: [
  //       {
  //         id: 1,
  //         tenMon: "Nước ép táo",
  //         soLuong: 2,
  //         gia: 20000,
  //         tongTien: 40000,
  //       },
  //     ],
  //   },
  // ];

  const { setSelectedTable } = useContext(MyContextDataTable);

  const handleClickTable = (data) => {
    setSelectedTable(data);
  };
  return (
    <div className="grid grid-cols-12  gap-4 h-screen">
      <div className="col-span-6 row-span-5">
        <TableControl handleClickTable={handleClickTable} />
      </div>
      <div className="col-span-6 row-span-5 col-start-7">
        <ListServices />
      </div>
    </div>
  );
}

export default TableManagement;
