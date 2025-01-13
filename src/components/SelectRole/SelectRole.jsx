import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, InputLabel, OutlinedInput, Select } from "@mui/material";
import { useState } from "react";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { LiaExchangeAltSolid } from "react-icons/lia";



const SelectRole = ({ user, refetch }) => {
    const { _id, name, role } = user;
    const axiosSecure = useAxiosSecure();
    const [open, setOpen] = useState(false);
    const [selectedRole, setSelectedRole] = useState('');

    const handleClickOpen = () => {
        Swal.fire({
            title: "Are you want to change the role?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, change role!"
        }).then((result) => {
            if (result.isConfirmed) {
                setOpen(true);
            }
        });

    }


    const handleChange = (event) => {
        const userRole = event.target.value;
        if (userRole) {
            setOpen(false);
            Swal.fire({
                title: `${name}'s going to be ${userRole}`,
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Confirm"
            }).then(async (result) => {
                if (result.isConfirmed) {
                    const res = await axiosSecure.patch(`/users?id=${_id}`, { userRole })
                    if (res.data.modifiedCount > 0) {
                        refetch();
                        Swal.fire({
                            title: "Role changed!",
                            text: `${name} is ${role} now.`,
                            icon: "success"
                        });
                    }
                }
            });
        }
        setSelectedRole(event.target.value);
    }


    const handleClose = (event, reason) => {
        if (reason !== 'backdropClick') {
            setOpen(false);
        }
    }
    return (
        <div>
            <div className="flex items-center gap-1">
                <p className={`text-xs md:text-sm font-semibold ${role === 'admin' && 'text-red-600'} ${role === 'host' && 'text-green-600'}`}>{role || 'User'}</p>
                <button className="bg-cyan-600 px-1 md:px-2 py-1 rounded-md text-white text-xs md:text-sm" onClick={handleClickOpen} ><LiaExchangeAltSolid /></button>
            </div>
            <Dialog disableEscapeKeyDown open={open} onClose={handleClose}>
                <DialogTitle>Select Role</DialogTitle>
                <DialogContent>
                    <Box component='form' sx={{ display: 'flex', flexWrap: 'wrap' }}>
                        <FormControl sx={{ m: 1, minWidth: 120 }}>
                            <InputLabel htmlFor='role-dialog'>Role</InputLabel>
                            <Select
                                native
                                value={selectedRole}
                                onChange={handleChange}
                                input={<OutlinedInput label='Role' id="role-dialog" />}
                            >
                                <option aria-label="None" value="" />
                                <option value="user">User</option>
                                <option value="host">Host</option>
                                <option value="admin">Admin</option>
                            </Select>
                        </FormControl>
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleClose}>Ok</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default SelectRole;