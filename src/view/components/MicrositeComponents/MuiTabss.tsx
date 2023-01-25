import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

import MicrositeapplicationdataTable from 'view/components/Table/MicrositeapplicationdataTable';
import MicrositePractitionerTable from 'view/components/MicrositeComponents/MicrositePractitionerTable';
import MicrositeAllApplicationTable from 'view/components/MicrositeComponents/MicrositeAllApplicationTable';


export const MuiTabss = () => {
const [value, setValue] = React.useState("1");

const handleChange=(event: React.SyntheticEvent, newValue:string) =>
{
    setValue(newValue)
}

return (
	<div className="App">
	<div
		className="head"
		style={{
		width: "fit-content",
		margin: "auto",
		}}
	>
		
	</div>
	<div
		style={{
		width: "fit-content",
		margin: "auto",
		}}
	>
	</div>
	<br />
	<div
		style={{
		margin: "auto",
		display: "flex",
		justifyContent: "space-evenly",
		}}
	>
		<Box sx={{ width: "100%", typography: "body1" }}>
		<TabContext value={value}>
			<Box sx={{ borderBottom: 1, borderColor: "divider" }}>
			<TabList onChange={handleChange}>
				<Tab label="Attested/Submitted Applications
" value="1" />
				<Tab label="All Applications" value="2" />
			</TabList>
			</Box>
			<TabPanel value="1">
                <MicrositePractitionerTable/>
                <MicrositeapplicationdataTable/></TabPanel>
			<TabPanel value="2"><MicrositeAllApplicationTable/></TabPanel>
		</TabContext>
		</Box>


	</div>
	</div>
);
}

