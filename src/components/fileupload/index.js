import { Grid, Box, Table, Button } from "@material-ui/core";
import { DataGrid } from '@material-ui/data-grid';
import { React, useState } from "react";
import CircularProgress from '@material-ui/core/CircularProgress';
import TimedData from '../uploadedSensorData/TimedData'

function FileUpload() {
    const [csv, setCSV] = useState([])
    const [file, setFile] = useState(undefined)
    const [dataname, setDataName] = useState('Upload CSV File')
    const [submitButton, setSubmitButton] = useState(false)
    const [toggle, setToggle] = useState(false)
    const [showRecord, setShowRecord] = useState(false)

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'userid', headerName: 'User ID', width: 130 },
        { field: 'uploaddate', headerName: 'Upload Date', width: 130 },
        {
            field: 'showRecord',
            headerName: "Action",
            disableClickEventBubbling: true,
            renderCell: (params) => {
                const onClick = () => {
                    setShowRecord(true)
                };

                return <Button onClick={onClick}>Show Record</Button>;
            }
        }
    ];

    const rows = [
        { id: 1, userid: '123', uploaddate: '21-05-2021' },
    ];


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
                    {showRecord ? <TimedData></TimedData> : <> </>}
                    <span>Last Records of sensor data</span>
                    <DataGrid rows={rows} columns={columns} pageSize={5} />
                </div>
            </div>
        </>
    )
}

export default FileUpload