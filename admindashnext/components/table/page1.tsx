import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';







export default function DataGridDemo() {

  const [row,setRow]=React.useState([
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 14 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 31 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 31 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 11 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
])

const columns: GridColDef<(typeof row)[number]>[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 150,
    editable: true,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 150,
    editable: true,
  },
  {
    field: 'age',
    headerName: 'Age',
    // type: 'number',
    width: 110,
    editable: true,
    headerAlign:'center',
    align:'center',
    cellClassName: 'age-column-cell',
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
  },
  // {
  //   field: 'edit',
  //   headerName: '',
  //   sortable: false,
  //   filterable: false,
  //   disableColumnMenu: true,
  //   width: 60,
  //   renderCell: (params) => (
  //     <IconButton
  //       onClick={() => handleEdit(params.row)}
  //       color="primary"
  //     >
  //       <EditIcon />
  //     </IconButton>
  //   ),
  // },

  //  {
  //   field: 'delete',
  //   headerName: '',
  //   sortable: false,
  //   filterable: false,
  //   disableColumnMenu: true,
  //   width: 60,
  //   renderCell: (params) => (
  //     <IconButton
  //       onClick={() => console.log('Delete clicked for row:', params.row)}
  //       color="error"
  //     >
  //       <DeleteIcon />
  //     </IconButton>
  //   ),
  // },

];


const handleRowUpdate = (updatedRow:any,originalRow:any)=>{
console.log("Updated Row",updatedRow.id)
console.log("Orginal Row",originalRow);

const newRow = row.map((rows)=>{
  return rows.id === updatedRow.id ? updatedRow:rows
})

setRow(newRow)
console.log(row);

}

  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={row}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        editMode='row'
        processRowUpdate={handleRowUpdate}
        // onProcessRowUpdateError={(error) => console.log(error)}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
}