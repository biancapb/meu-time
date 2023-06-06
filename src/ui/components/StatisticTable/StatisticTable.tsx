import Table from "@mui/material/Table";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";

import { CustomTable } from "./StatisticTableStyle";
type Props = {};

function createData(name: string, total: number) {
  return { name, total };
}

const rows = [
  createData("Total de Jogos", 159),
  createData("Total de Vitórias", 237),
  createData("Total de Derrotas", 262),
  createData("Total de Empates", 305),
];

const StatisticTable = (props: Props) => {
  return (
    <CustomTable>
      <Table aria-label="simple table">
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.total}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </CustomTable>
  );
};

export default StatisticTable;
