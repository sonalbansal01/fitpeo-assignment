import React, { useState } from "react";
import {
  Box,
  Typography,
  Slider,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";

// Custom bar shape to add border-radius
const CustomBar = (props) => {
  const { x, y, width, height, fill } = props;

  return (
    <g>
      <rect
        x={x}
        y={y}
        width={30}
        height={height}
        fill={fill}
        radius={90} // Adjust radius as needed
        style={{ borderRadius: "6rem" }} // For border-radius
      />
    </g>
  );
};

const series = [
  {
    label: "series 1",
    data: [
      223, 2210, 764, 1879, 1478, 1373, 1891, 2171, 620, 1269, 724, 1707, 1188,
      1879, 626, 1635, 2177, 516, 1793, 1598,
    ],
  },
];

const ActivityChart = () => {
  const [itemNb, setItemNb] = useState(10);
  const [seriesNb, setSeriesNb] = useState(1);
  const [skipAnimation, setSkipAnimation] = useState(false);

  const handleItemNbChange = (event, newValue) => setItemNb(newValue);
  const handleSeriesNbChange = (event, newValue) => setSeriesNb(newValue);

  return (
    <div className="p-4 bg-white dark:bg-gray-800 w-full rounded-lg shadow-md col-span-2">
      <h2 className="text-lg font-bold mb-4">Activity</h2>
      <Box>
        <BarChart
          width={500}
          height={250}
          data={series[0].data.slice(0, itemNb).map((value, index) => ({
            name: `Item ${index + 1}`,
            value,
          }))}
          margin={{ top: 10, right: 30, left: 20, bottom: 5 }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" fill="#8884d8" shape={<CustomBar />} />
        </BarChart>
        <FormControlLabel
          control={
            <Checkbox
              checked={skipAnimation}
              onChange={(event) => setSkipAnimation(event.target.checked)}
            />
          }
          label="Skip Animation"
          labelPlacement="end"
        />
        <Typography id="input-item-number" gutterBottom>
          Number of items
        </Typography>
        <Slider
          value={itemNb}
          onChange={handleItemNbChange}
          valueLabelDisplay="auto"
          min={1}
          max={20}
          aria-labelledby="input-item-number"
        />
        <Typography id="input-series-number" gutterBottom>
          Number of series
        </Typography>
        <Slider
          value={seriesNb}
          onChange={handleSeriesNbChange}
          valueLabelDisplay="auto"
          min={1}
          max={10}
          aria-labelledby="input-series-number"
        />
      </Box>
    </div>
  );
};

export default ActivityChart;
