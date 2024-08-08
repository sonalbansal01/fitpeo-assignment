import React, { useState } from "react";
import { Box, Slider } from "@mui/material";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const CustomBar = (props) => {
  const { x, y, width, height, fill } = props;

  return (
    <g>
      <rect x={x} y={y} width={width} height={height} fill={fill} rx={8} />
    </g>
  );
};

const series = [
  {
    label: "series 1",
    data: [
      { value1: 523, value2: 1223 },
      { value1: 610, value2: 720 },
      { value1: 964, value2: 1864 },
      { value1: 879, value2: 779 },
      { value1: 478, value2: 578 },
      { value1: 373, value2: 1273 },
      { value1: 791, value2: 891 },
      { value1: 1271, value2: 1171 },
      { value1: 620, value2: 720 },
      { value1: 829, value2: 929 },
    ],
  },
];

const ActivityChart = () => {
  const [itemNb, setItemNb] = useState(10);

  const handleItemNbChange = (event, newValue) => setItemNb(newValue);

  return (
    <div className="p-4 bg-white dark:bg-gray-800 w-full rounded-lg shadow-md col-span-2">
      <h2 className="text-lg font-bold mb-4">Activity</h2>
      <Box>
        <ResponsiveContainer width="90%" height={210}>
          <BarChart
            data={series[0].data.slice(0, itemNb).map((item, index) => ({
              name: `${index + 1}`,
              value1: item.value1,
              value2: item.value2,
            }))}
            margin={{ top: 10, right: 0, left: 20, bottom: 5 }}
          >
            <CartesianGrid
              horizontal={true}
              vertical={false}
              strokeDasharray="0"
            />
            <XAxis dataKey="name" />
            <YAxis minTickGap={15} domain={[10, "dataMax"]} />
            <Tooltip cursor={false} />
            <Bar
              dataKey="value1"
              fill="#79a5ff"
              shape={<CustomBar />}
              barSize={20}
            />
            <Bar
              dataKey="value2"
              fill="#79a5ff"
              shape={<CustomBar />}
              barSize={20}
            />
          </BarChart>
        </ResponsiveContainer>
      </Box>
    </div>
  );
};

export default ActivityChart;
