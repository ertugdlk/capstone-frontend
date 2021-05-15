import { Grid, Box, Table, Button } from "@material-ui/core";
import { DataGrid } from '@material-ui/data-grid';
import { React, useState } from "react";
import CircularProgress from '@material-ui/core/CircularProgress';

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    {
        field: 'age',
        headerName: 'Age',
        type: 'number',
        width: 90,
    },
    {
        field: 'fullName',
        headerName: 'Full name',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 160,
        valueGetter: (params) =>
            `${params.getValue('firstName') || ''} ${params.getValue('lastName') || ''}`,
    },
    {
        field: 'showRecord',
        headerName: "Action",
        disableClickEventBubbling: true,
        renderCell: (params) => {
            const onClick = () => {
                console.log("deneme")
            };

            return <Button onClick={onClick}>Show Record</Button>;
        }
    }
];

const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

function FileUpload() {
    const [csv, setCSV] = useState([])
    const [file, setFile] = useState(undefined)
    const [dataname, setDataName] = useState('Upload CSV File')
    const [submitButton, setSubmitButton] = useState(false)
    const [toggle, setToggle] = useState(false)

    const handleFileUpload = (event) => {
        setFile(event.target.files[0])
        setDataName('File Uploaded')
        setSubmitButton(true)
    }

    return (
        <>
            <div style={{
                display: "flex",
                width: "100%",
                flexDirection: "column",
                alignItems: "center",
                backgroundColor: "white",
                height: "670px",
            }}>
                <span style={{ margin: "auto", marginTop: "30px" }}>Dataset upload</span>
                <Box style={{
                    width: "60%",
                }}>
                    <div style={{
                        width: "40%",
                        height: "150px",
                        marginTop: "100px",
                        background: "#FFFFFF 0% 0% no-repeat padding-box",
                        border: "4px dashed #5068CD6A",
                        borderEadius: "42px",
                        opacity: 1,
                        display: "flex",
                        justifyContent: "center",
                        margin: "auto",
                    }}>
                        <label for="file" style={{
                            display: "flex",
                            width: "100%",
                            height: "100%",
                            justifyContent: "center",
                            alignItems: "center",
                        }}><span>{dataname}</span></label>
                        <input style={{ width: "0px " }} onChange={(event) => handleFileUpload(event)} type="file" name="file" id="file" />
                    </div>
                </Box>
                {toggle ?
                    <>
                        <CircularProgress />
                            Data saving ...
                    </>
                    :
                    <>
                    </>
                }
                {submitButton ? <Button style={{ marginTop: "30px" }} type="submit" onClick={() => setToggle(true)}>Save to DB</Button> : <> </>}
                <div style={{ height: 400, width: '60%', marginTop: "0px" }}>
                    <span>Last Records of sensor data</span>
                    <DataGrid rows={rows} columns={columns} pageSize={5} />
                </div>
            </div>
        </>
    )
}

export default FileUpload