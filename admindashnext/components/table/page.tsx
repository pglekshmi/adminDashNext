'use client'
import  React,{useRef} from 'react';
import { useState,useEffect } from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Modal, TextField, Typography } from '@mui/material';
import { dataContext } from '@/app/dashboard/page';
import { Item,MyContextType } from '@/app/dashboard/page';
import * as XLSX from 'xlsx';
import {saveAs} from 'file-saver';
 
export default  function DataGridDemo() {

  const data = React.useContext(dataContext)

    
    interface UserRow {
    id: number;
    firstName: string;
    lastName: string;
    salary:number;
    age: number;
}
//  type Item = {
//     id: number;
//     firstName: string;
//     lastName: string;
//     salary:number;
//     age: number;
// }

// type MyContextType = {
//   data: Item[];                    // value is an array of Item objects
//   setData: (val: Item[]) => void;  // setter accepts an array of Item objects
// };


    // const [rows, setRows] = useState<any[]>([]);
    const [selectedRow, setSelectedRow] = useState<UserRow | null>(null);
    const [open,setOpen]=useState(false)
    const[modalOpen,setModalopen] = useState(false)

    const MYdata = [
  {"title":"Title1", "website":"Foo"},
  {"title":"Title2", "website":"Bar"}
]

    const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

  function handleExport(){
    exportToexcel(MYdata)
  }

   function exportToexcel(data:any){
     const worksheet = XLSX.utils.json_to_sheet(data);
     const workbook = XLSX.utils.book_new();
     XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
     XLSX.writeFile(workbook, "MYSavedData.xlsx");
   }

    function handleEdit(row:any){
        console.log(row);
        setSelectedRow({...row})
        setOpen(true)
    }

    const handleClose = ()=>{
        setOpen(false)
        setSelectedRow(null)
    }

    const handleModalClose =()=>{
        setModalopen(false)
        // setSelectedRow(null)
    }

    const handleChange = (e:any) => {
    const { name, value } = e.target;
    console.log(selectedRow);
    
    console.log(name,value);

    
    setSelectedRow((prev:any) => ({
      ...prev,
      [name]: value,
    }));
  };

  function handleSubmit(){
    setModalopen(true)
  }


  async function handleModalSubmit(){
    const val = await fetch('/api/dashapi',{
        method:'PUT',
        headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(selectedRow),
    });

    if(val.status == 200){
        // alert("Updated")
       if (data && selectedRow) {
  data.setData((prev) =>
    prev.map(item1 =>
      item1.id === selectedRow.id ? selectedRow : item1
    )
  );
}
        handleModalClose()
        handleClose()
    }
    else{
        alert("Something went wrong")
    }
  }
       
    const columns: GridColDef<UserRow>[] = [
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
    field: 'salary',
    headerName: 'Salary',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
  },
  {
    field: 'edit',
    headerName: '',
    sortable: false,
    filterable: false,
    disableColumnMenu: true,
    width: 60,
    renderCell: (params) => (
      <IconButton
        onClick={() => handleEdit(params.row)}
        color="primary"
      >
        <EditIcon />
      </IconButton>
    ),
  }
];
    
  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={data?.data}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
      <Button onClick={handleExport}>Export as xlsx</Button>
       <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit User</DialogTitle>
        <DialogContent>
          <TextField
            margin="dense"
            label="lastName"
            name="lastName"
            value={selectedRow?.lastName || ''}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            margin="dense"
            label="firstName"
            name="firstName"
            value={selectedRow?.firstName || ''}
            onChange={handleChange}
            fullWidth
          />
           <TextField
            margin="dense"
            label="salary"
            name="salary"
            value={selectedRow?.salary || ''}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            margin="dense"
            label="age"
            name="age"
            value={selectedRow?.age || ''}
            onChange={handleChange}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary" variant="contained">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
       <Modal
        open={modalOpen}
        onClose={handleModalClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Are you sure, you want to make the updates!!!
          </Typography>
          {/* <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography> */}
           <Button onClick={handleModalClose} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleModalSubmit} color="primary" variant="contained">
            Yes, Submit
          </Button>
        </Box>
      </Modal>
    </Box>
  );
}