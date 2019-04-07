import React, { Component } from "react";
import axios from "axios";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import TextField from "@material-ui/core/TextField";

function Transition(props) {
   return <Slide direction="up" {...props} />;
}

class AddEditClient extends Component {
   state = {
      name: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      state: "",
      postcode: ""
   };

   onChange = e => {
      this.setState({
         [e.target.name]: e.target.value
      });
   };

   onSbmit = async e => {
      e.preventDefault();

      const client = {
         name: this.state.name,
         email: this.state.email,
         phone: this.state.phone,
         address: this.state.address,
         city: this.state.city,
         state: this.state.state,
         postcode: this.state.postcode
      };

      const clientData = await axios.post("/api/clients", client);

      this.props.callBackFromParent({
         newClient: clientData.config.data
      });

      this.setState({
         name: "",
         email: "",
         phone: "",
         address: "",
         city: "",
         state: "",
         postcode: ""
      });

      this.props.handleClose();
   };

   render() {
      return (
         <div>
            <Dialog
               className="add-ddit-client"
               open={this.props.isOpen}
               TransitionComponent={Transition}
               keepMounted
               onClose={this.props.handleClose}
               aria-labelledby="alert-dialog-slide-title"
               aria-describedby="alert-dialog-slide-description"
            >
               <DialogTitle id="alert-dialog-slide-title">
                  {"Add New Client"}
               </DialogTitle>
               <DialogContent>
                  <form noValidate autoComplete="on">
                     <TextField
                        label="Name"
                        type="text"
                        name="name"
                        fullWidth
                        margin="normal"
                        variant="outlined"
                        value={this.state.name}
                        onChange={this.onChange}
                     />
                     <TextField
                        label="Email"
                        type="email"
                        name="email"
                        fullWidth
                        margin="normal"
                        variant="outlined"
                        value={this.state.email}
                        onChange={this.onChange}
                     />
                     <TextField
                        label="Phone"
                        type="text"
                        name="phone"
                        fullWidth
                        margin="normal"
                        variant="outlined"
                        value={this.state.phone}
                        onChange={this.onChange}
                     />
                     <TextField
                        label="Address"
                        type="text"
                        name="address"
                        fullWidth
                        margin="normal"
                        variant="outlined"
                        value={this.state.address}
                        onChange={this.onChange}
                     />
                     <TextField
                        label="City"
                        type="text"
                        name="city"
                        fullWidth
                        margin="normal"
                        variant="outlined"
                        value={this.state.city}
                        onChange={this.onChange}
                     />
                     <TextField
                        label="State"
                        type="text"
                        name="state"
                        fullWidth
                        margin="normal"
                        variant="outlined"
                        value={this.state.state}
                        onChange={this.onChange}
                     />
                     <TextField
                        label="Postcode"
                        type="text"
                        name="postcode"
                        fullWidth
                        margin="normal"
                        variant="outlined"
                        value={this.state.postcode}
                        onChange={this.onChange}
                     />
                  </form>
               </DialogContent>
               <DialogActions>
                  <Button onClick={this.props.handleClose} color="primary">
                     Cancel
                  </Button>
                  <Button onClick={this.onSbmit} color="primary">
                     Submit
                  </Button>
               </DialogActions>
            </Dialog>
         </div>
      );
   }
}

export default AddEditClient;
