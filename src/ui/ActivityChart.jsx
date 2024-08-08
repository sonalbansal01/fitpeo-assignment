import React, { useState } from "react";
import { Box, Slider } from "@mui/material";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// Custom bar shape to add border-radius
const CustomBar = (props) => {
  const { x, y, width, height, fill } = props;

  return (
    <g>
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        fill={fill}
        rx={25} // Border radius of the rectangle
      />
    </g>
  );
};

const series = [
  {
    label: "series 1",
    data: [923, 2210, 1764, 1879, 1478, 1373, 791, 1271, 620, 829],
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
            data={series[0].data.slice(0, itemNb).map((value, index) => ({
              name: ` ${index + 1}`,
              value,
            }))}
            margin={{ top: 10, right: 0, left: 20, bottom: 5 }}
          >
            <XAxis dataKey="name" />
            <YAxis minTickGap={15} domain={[10, "dataMax"]} />{" "}
            {/* Set min to a value greater than 0 */}
            <Tooltip />
            <Bar
              dataKey="value"
              fill="#3ca3fd"
              shape={<CustomBar />}
              barSize={30}
            />
          </BarChart>
        </ResponsiveContainer>
      </Box>
    </div>
  );
};

export default ActivityChart;
