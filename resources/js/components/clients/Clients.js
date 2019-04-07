import React, { Component } from "react";
import axios from "axios";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import AddEditClient from "./AddEditClient";

class Clients extends Component {
	state = {
		clients: [],
		open: false
	};

	componentDidMount() {
		this.getInitialData();
	}

	getInitialData = async () => {
		const response = await axios.get("/api/clients");
		const clients = await response.data;

		this.setState({
			clients: clients
		});
	};

	getDataFromChild = dataFromChild => {
		this.setState({
			clients: [...this.state.clients, dataFromChild.newClient]
		});

		this.getInitialData();
	};

	handleClickOpen = () => {
		this.setState({ open: true });
	};

	handleClose = () => {
		this.setState({ open: false });
	};

	render() {
		return (
			<div>
				<Button
					variant="outlined"
					color="primary"
					className="add-new-client"
					onClick={this.handleClickOpen}
				>
					Add New Client
				</Button>
				<Paper>
					<Table className="clients">
						<TableHead>
							<TableRow>
								<TableCell>Name</TableCell>
								<TableCell>Email</TableCell>
								<TableCell>Phone</TableCell>
								<TableCell>Address</TableCell>
								<TableCell>City</TableCell>
								<TableCell>State</TableCell>
								<TableCell>Postcode</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{this.state.clients.map(client => (
								<TableRow key={client.id}>
									<TableCell>{client.name}</TableCell>
									<TableCell>{client.email}</TableCell>
									<TableCell>{client.phone}</TableCell>
									<TableCell>{client.address}</TableCell>
									<TableCell>{client.city}</TableCell>
									<TableCell>{client.state}</TableCell>
									<TableCell>{client.postcode}</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</Paper>
				<AddEditClient
					isOpen={this.state.open}
					handleClose={this.handleClose}
					callBackFromParent={this.getDataFromChild}
				/>
			</div>
		);
	}
}

export default Clients;
