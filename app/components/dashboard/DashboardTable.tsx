import { Button, Checkbox, Table } from "@mui/joy";
import React from "react";
import { rows } from "../../../dummyData";
import Tag from "../Tag";
import Plus from "@phosphor-icons/react/dist/icons/Plus";

const DashboardTable = () => {
  return (
    <div className="flex border-2 py-4 px-4 rounded-xl items-end justify-between flex-col">
      <div className="flex w-full flex-row mb-4 justify-between">
        <p className="flex flex-col">
          <span className="text-lg">In-app Transactions</span>
          <span className="text-left text-xs text-[#646872]">
            Latest transactions
          </span>
        </p>

        <Button
          className="bg-[#7abbec38] h-min	"
          variant="soft"
          size="sm"
          startDecorator={<Plus size={15} />}
        >
          <span className="text-sm">Add</span>
        </Button>
      </div>

      <Table
        stripe="odd"
        hoverRow
        sx={{
          "& tbody": { bgcolor: "background.surface" },
        }}
      >
        <thead className="bg-white">
          <tr>
            <th>
              <Checkbox sx={{ verticalAlign: "sub" }} />
              <span className="m-4">Order</span>
            </th>
            <th>Status</th>
            <th>Amount </th>
            <th>Billing date </th>
            <th>Payment method </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, key) => {
            return (
              <tr key={key}>
                <td scope="row" className="flex flex-row   items-center">
                  <Checkbox />
                  <span className="ml-3">{row.order}</span>
                </td>
                <td scope="row">
                  <Tag text={row.name} color={row.color} />
                </td>
                <td>${row.calories}</td>
                <td>{row.fat}</td>
                <td>{row.carbs}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default DashboardTable;
