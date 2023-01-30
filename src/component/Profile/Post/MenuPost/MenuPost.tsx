import React, {FC} from 'react';
import {IconButton, Menu, MenuItem} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import {deletePost} from "../../../../redux/reducers/profile-reducer";
import {useDispatch} from "react-redux";

type Menu = {
    anchorEl: null | HTMLElement
    setAnchorEl: (value: null | HTMLElement) => void
    open: boolean
    id: string
}

export const MenuPost: FC<Menu> = ({id, anchorEl, setAnchorEl, open}) => {
    const dispatch = useDispatch()

    const handleClose = () => {
        setAnchorEl(null);
    }


    const handleDelete = () => {
        dispatch(deletePost(id))
    }
    return (
        <>

            <Menu
                id="basic-menu"
                sx={{boxShadow:0}}
                disableScrollLock={true}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={handleClose}>
                    <IconButton onClick={handleDelete}>
                        <DeleteIcon/>
                    </IconButton></MenuItem>

            </Menu>
        </>

    );
};

