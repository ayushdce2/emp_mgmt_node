import "../assets/css/adminhome.css";
import { PieChart, Pie, Tooltip, Cell, ResponsiveContainer } from 'recharts';
import { LineChart, CartesianGrid, XAxis, YAxis, Legend, Line } from 'recharts';
import { BarChart, Bar } from 'recharts';
import { useState } from 'react';

const AdminHome = ()=>{

    const [activeIndex, setActiveIndex] = useState(-1);

    const dataPie = [
        { name: 'A', students: 400 },
        { name: 'Technical scripter', students: 700 },
        { name: 'B', students: 200 },
        { name: 'qwerty', students: 1000 }
    ];

    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

    const onPieEnter = (_, index) => {
        setActiveIndex(index);
    };

    const dataLine = [
        {
          "name": "Page A",
          "uv": 4000,
          "pv": 2400,
          "amt": 2400
        },
        {
          "name": "Page B",
          "uv": 3000,
          "pv": 1398,
          "amt": 2210
        },
        {
          "name": "Page C",
          "uv": 2000,
          "pv": 9800,
          "amt": 2290
        },
        {
          "name": "Page D",
          "uv": 2780,
          "pv": 3908,
          "amt": 2000
        },
        {
          "name": "Page E",
          "uv": 1890,
          "pv": 4800,
          "amt": 2181
        },
        {
          "name": "Page F",
          "uv": 2390,
          "pv": 3800,
          "amt": 2500
        },
        {
          "name": "Page G",
          "uv": 3490,
          "pv": 4300,
          "amt": 2100
        }
      ]

      const dataBar = [
        {
          "name": "Page A",
          "uv": 4000,
          "pv": 2400
        },
        {
          "name": "Page B",
          "uv": 3000,
          "pv": 1398
        },
        {
          "name": "Page C",
          "uv": 2000,
          "pv": 9800
        },
        {
          "name": "Page D",
          "uv": 2780,
          "pv": 3908
        },
        {
          "name": "Page E",
          "uv": 1890,
          "pv": 4800
        },
        {
          "name": "Page F",
          "uv": 2390,
          "pv": 3800
        },
        {
          "name": "Page G",
          "uv": 3490,
          "pv": 4300
        }
      ]

    return (
        <>
                                    <div className="mb-6">
                    <p className="main_heading">Home</p>
                </div>
                                    <div className='my_dashHome grid grid-cols-3 gap-3 '>
                            <div className='my_dashHomeItem'>
                                <div>
                                    <p className='my_dashHome_heading'>Sample Heading</p>
                                </div>
                                

                                <div>

                                <ResponsiveContainer width="100%" height={350}>
   
                                    <PieChart>
                                    <Pie
                                    activeIndex={activeIndex}
                                    data={dataPie}
                                    dataKey="students"
                                    // outerRadius={150}
                                    fill="green"
                                    onMouseEnter={onPieEnter}
                                    style={{ cursor: 'pointer', outline: 'none' }} // Ensure no outline on focus
                                    >
                                    {dataPie.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                    </Pie>
                                    <Tooltip />
                                    </PieChart>
                                    
                                    </ResponsiveContainer>

                                </div>
                            </div>
                            <div className='my_dashHomeItem'>
                            <div>
                                    <p className='my_dashHome_heading'>Sample Heading</p>
                                </div>
                                <div>
                                <ResponsiveContainer width="100%" height={350}>
                                <LineChart data={dataLine}
                                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <Line type="monotone" dataKey="pv" stroke="#8884d8" />
                                    <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                                    </LineChart>
                                    </ResponsiveContainer>
                                </div>

                            </div>
                            <div className='my_dashHomeItem'>
                            <div>
                                    <p className='my_dashHome_heading'>Sample Heading</p>
                                </div>
                                    <div>
                                    <ResponsiveContainer width="100%" height={350}>
                                    <BarChart width={730} height={250} data={dataBar}>
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="name" />
                                        <YAxis />
                                        <Tooltip />
                                        <Legend />
                                        <Bar dataKey="pv" fill="#8884d8" />
                                        <Bar dataKey="uv" fill="#82ca9d" />
                                        </BarChart>
                                        </ResponsiveContainer>
                                    </div>
                            </div>
                        </div>
        </>
    )
}

export default AdminHome;