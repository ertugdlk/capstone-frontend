import { Grid, Box } from "@material-ui/core";

function Header() {
    return (
        <>
            <div style={{
                display: "flex",
                width: "100%",
                justifyContent: "space-between",
                flexDirection: "column",
                alignItems: "center",
                backgroundColor: "gray",
                alignText: "center",
                height: "150px"
            }}>
                <h1>
                    Video based Dynamic Testing for a Lab-scale Frame structure
                </h1>
                <h3>
                    You can upload video data or sensor dataset
                </h3>
            </div>
        </>
    )
}

export default Header