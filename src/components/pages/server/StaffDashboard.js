import axios from 'axios';
import { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
const data = [
    {
        "name": "Cà phê muối",
        "Doanh thu": 25000 * 50
    },
    {
        "name": "Vang Đỏ",
        "Doanh thu": 10 * 150000
    },
    {
        "name": "Bánh Sô-cô-la",
        "Doanh thu": 40000 * 12
    },
    {
        "name": "Bạc xỉu",
        "Doanh thu": 30 * 28000
    },
    {
        "name": "Nâu đá",
        "Doanh thu": 35 * 20000
    },
    {
        "name": "Nước dưa hấu",
        "Doanh thu": 35000 * 40
    },
    {
        "name": "Nước dứa táo",
        "Doanh thu": 35000 * 20
    },
    {
        "name": "Bánh topper",
        "Doanh thu": 42000 * 8
    },
    {
        "name": "Bánh vani",
        "Doanh thu": 38000 * 14
    },
    {
        "name": "Nước ổi",
        "Doanh thu": 35000 * 18
    },
]

const StaffDashboard = () => {

    const [reportData, setReportData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get("http://localhost:3000/report");
            setReportData(res.data);
            console.log(res.data);
        }
        fetchData();
    }, [])

    return (
        <>
            <h1 className="text-left text-3xl font-bold mb-8">Trang chủ</h1>
            <div className="container grid grid-cols-2 gap-4">
                <div className="flex flex-wrap justify-center items-center">
                    <div className="flex border-2 border-amber-700 size-72 m-1 justify-center items-center">
                        {`Bàn trống: ${reportData[0]?.freeTable}`}
                    </div>
                    <div className="flex border-2 border-amber-700 size-72 m-1 justify-center items-center">
                        {` Nhân viên đang làm việc: ${reportData[0]?.staffWorking}`}
                    </div>
                    <div className="flex border-2 border-amber-700 size-72 m-1 justify-center items-center">
                        {`Tổng doanh thu: ${reportData[0]?.revenue.toLocaleString('vi', { style: 'currency', currency: 'VND' })}`}
                    </div>
                    <div className="flex border-2 border-amber-700 size-72 m-1 justify-center items-center">
                        {`Bán chạy nhất: ${reportData[0]?.bestSeller[0]?.name}`}
                    </div>
                </div>
                <div className="">
                    <ResponsiveContainer className={"w-full h-full"}>
                        <BarChart data={data} margin={{ top: 0, left: 20, right: 0, bottom: 100 }}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis
                                dataKey="name"
                                interval={0}
                                textAnchor="end"
                                angle={-45}
                                tickFormatter={(value) =>
                                    value.length > 10 ? `${value.substring(0, 10)}...` : value
                                }
                            />
                            <YAxis
                                tickFormatter={(value) =>
                                    new Intl.NumberFormat("vi-VN", {
                                        style: "currency",
                                        currency: "VND",
                                    }).format(value)
                                }
                                style={{ fontSize: "12px" }}
                            />
                            <Tooltip
                                formatter={(value) =>
                                    new Intl.NumberFormat("vi-VN", {
                                        style: "currency",
                                        currency: "VND",
                                    }).format(value)
                                }
                            />
                            <Legend verticalAlign='top' />
                            <Bar dataKey="Doanh thu" fill="#333" barSize={40} />
                        </BarChart>
                    </ResponsiveContainer>

                </div>
            </div>
        </>
    )
}

export default StaffDashboard;