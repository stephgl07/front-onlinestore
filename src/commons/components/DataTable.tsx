import React, { useState } from "react";
import {
  TextField,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  TableSortLabel,
  IconButton,
} from "@mui/material";
import { DataTableColumn, getRowsPerPage } from "../utils/ArrayMapping";
import { Link } from "react-router-dom";

interface DataTableProps {
  columnNames: DataTableColumn[];
  data: any[];
  itemName: string;
  itenId: string;
  rowsPerPageOptions?: number[];
  actionsTable?: any[];
}

const DataTable: React.FC<DataTableProps> = ({
  columnNames,
  data,
  itemName,
  itenId,
  rowsPerPageOptions,
  actionsTable,
}) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [searchTerm, setSearchTerm] = useState("");
  const [orderBy, setOrderBy] = useState<string>("id");
  const [order, setOrder] = useState<"asc" | "desc">("asc");

  const handlePageChange = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    console.log(event);
    setPage(newPage);
  };

  const handleRowsPerPageChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    setPage(0);
  };

  const handleSort = (property: string) => {
    const isAsc = orderBy === property && order === "asc";
    setOrderBy(property);
    setOrder(isAsc ? "desc" : "asc");
  };

  const filteredData = data.filter((item) =>
    item[itemName].toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedData = filteredData.sort((a, b) => {
    const aValue = a[orderBy];
    const bValue = b[orderBy];

    if (aValue < bValue) {
      return order === "asc" ? -1 : 1;
    }
    if (aValue > bValue) {
      return order === "asc" ? 1 : -1;
    }
    return 0;
  });

  const paginatedData = sortedData.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  return (
    <div>
      <TextField
        label="Buscar"
        value={searchTerm}
        onChange={handleSearch}
        style={{ marginBottom: "1rem", width: "100%" }}
      />
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              {columnNames.map((columnName) => (
                <TableCell key={columnName.id}>
                  <TableSortLabel
                    active={orderBy === columnName.id}
                    direction={orderBy === columnName.id ? order : "asc"}
                    onClick={() => handleSort(columnName.id)}
                  >
                    {columnName.label}
                  </TableSortLabel>
                </TableCell>
              ))}

              {actionsTable && (
                <TableCell key="actions-table-header">Actions</TableCell>
              )}
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedData.map((row) => (
              <TableRow key={row[itenId]}>
                {columnNames.map((columnName) => (
                  <TableCell key={columnName.id}>
                    {row[columnName.id]}
                  </TableCell>
                ))}

                {actionsTable && (
                  <TableCell
                    key="actions-table-body"
                    style={{ display: "flex" }}
                  >
                    {actionsTable.map((actionTable, index) =>
                      actionTable.url === "none" ? (
                        <IconButton
                          key={index}
                          onClick={() => actionTable.handleOnClick(row[itenId])}
                        >
                          <actionTable.icon />
                        </IconButton>
                      ) : (
                        <Link
                          key={index}
                          to={`${actionTable.url}/${row[itenId]}`}
                        >
                          <IconButton>
                            <actionTable.icon />
                          </IconButton>
                        </Link>
                      )
                    )}
                  </TableCell>
                )}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={getRowsPerPage(rowsPerPageOptions, data.length)}
        component="div"
        count={filteredData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleRowsPerPageChange}
      />
    </div>
  );
};

export default DataTable;
