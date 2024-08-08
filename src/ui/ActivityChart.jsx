import React, { useState } from "react";
import {
  Box,
  Typography,
  Slider,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts"; // Replace with your actual library

const series = [
  {
    label: "series 1",
    data: [
      2423, 2210, 764, 1879, 1478, 1373, 1891, 2171, 620, 1269, 724, 1707, 1188,
      1879, 626, 1635, 2177, 516, 1793, 1598,
    ],
  },
].map((s) => ({
  ...s,
  highlightScope: { highlighted: "series", faded: "global" },
}));

const ActivityChart = () => {
  const [itemNb, setItemNb] = useState(10);
  const [seriesNb, setSeriesNb] = useState(1);
  const [skipAnimation, setSkipAnimation] = useState(false);

  const handleItemNbChange = (event, newValue) => setItemNb(newValue);
  const handleSeriesNbChange = (event, newValue) => setSeriesNb(newValue);

  return (
    <div className="p-4 bg-white dark:bg-gray-800 w-full rounded-lg shadow-md col-span-2">
      <h2 className="text-lg font-bold mb-4">Activity</h2>
      <Box sx={{ width: "100%" }}>
        <BarChart
          width={700}
          height={250}
          data={series[0].data.slice(0, itemNb).map((value, index) => ({
            name: `Item ${index + 1}`,
            value,
          }))}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" fill="#8884d8" />
        </BarChart>
      </Box>
    </div>
  );
};

export default ActivityChart;
