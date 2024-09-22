"use client";

import usePackages from "@/hooks/usePackages";
import { deletePackage } from "@/utils/api/package";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Avatar, Menu, MenuItem } from "@mui/material";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import { visuallyHidden } from "@mui/utils";
import Link from "next/link";
import PropTypes from "prop-types";
import { useMemo, useState } from "react";
import toast from "react-hot-toast";

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: "_id",
    label: "SL.No.",
  },
  {
    id: "createdAt",
    label: "Date",
  },
  {
    id: "coverPic",
    label: "Cover",
  },
  {
    id: "name",
    label: "Package Name",
  },
  {
    id: "tourLocation",
    label: "Destination",
  },
  {
    id: "minDuration",
    label: "Duration",
  },
  {
    id: "minMembers",
    label: "Members",
  },
  {
    id: "price",
    label: "Amount",
  },
];

function EnhancedTableHead(props) {
  const { order, orderBy, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            padding={"normal"}
            sortDirection={orderBy === headCell.id ? order : false}
            sx={{
              fontWeight: 600,
            }}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
        <TableCell
          sx={{
            fontWeight: 600,
          }}
        >
          Action
        </TableCell>
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

export default function PackageTable() {
  const { allPackages, refetch } = usePackages();

  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - allPackages.length) : 0;

  const visibleRows = useMemo(
    () =>
      stableSort(allPackages, getComparator(order, orderBy)).slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage
      ),
    [order, orderBy, allPackages, page, rowsPerPage]
  );

  const [anchorEl, setAnchorEl] = useState(null);
  const [clickedRowId, setClickedRowId] = useState(null);

  const handleClickId = (event, rowId) => {
    setAnchorEl(event.currentTarget);
    setClickedRowId(rowId);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleEditClick = () => {
    handleClose();
  };

  const handleDelete = async (id) => {
    const response = await deletePackage(id);

    if (response?.success) {
      refetch();
      toast.success("Package deleted successfully");
    }

    handleClose();
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%", mb: 2 }}>
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={"medium"}
          >
            <EnhancedTableHead
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
              rowCount={allPackages.length}
            />
            <TableBody>
              {visibleRows.map((row, index) => {
                let [date, time] = row.createdAt.split("T");
                time = time.split(".")[0];

                return (
                  <TableRow
                    hover
                    tabIndex={-1}
                    key={index}
                    sx={{ cursor: "pointer" }}
                  >
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>
                      {time}
                      <br />
                      {date}
                    </TableCell>
                    <TableCell>
                      <Avatar
                        sx={{ width: 56, height: 56 }}
                        variant="square"
                        alt="Cover pic"
                        src={row.coverPic}
                      />
                    </TableCell>
                    <TableCell>{row.name}</TableCell>
                    <TableCell>{row.tourLocation}</TableCell>
                    <TableCell>
                      {row.minDuration}-{row.maxDuration} days
                    </TableCell>
                    <TableCell>
                      {row.minMembers}-{row.maxMembers} pers
                    </TableCell>
                    <TableCell>{row.price} TK</TableCell>
                    <TableCell>
                      <MoreVertIcon
                        onClick={(event) => handleClickId(event, row._id)}
                      />
                      <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl) && clickedRowId === row._id}
                        onClose={handleClose}
                      >
                        <MenuItem onClick={handleEditClick}>
                          <Link
                            passHref
                            href={`/dashboard/update-package?id=${row._id}`}
                          >
                            <div>Edit</div>
                          </Link>
                        </MenuItem>
                        <MenuItem onClick={() => handleDelete(row._id)}>
                          Delete
                        </MenuItem>
                      </Menu>
                    </TableCell>
                  </TableRow>
                );
              })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: 53 * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={allPackages.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
}
