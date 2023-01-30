import React, {ChangeEvent, FC} from 'react';
import './UploadPhoto.css'
import {IconButton} from "@mui/material";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import {convertFileToBase64} from "../../utils/convertFile/convert-file";
import {AppDispatch} from "../../redux/store";
import {useDispatch} from "react-redux";
import {uploadPhotoThunk} from "../../redux/reducers/profile-reducer";

type UploadPhotoType = {
    classname: string
    callback?: (value: string) => void
}
export const UploadPhoto: FC<UploadPhotoType> = ({classname, callback}) => {

    const dispatch: AppDispatch = useDispatch()

    const uploadHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length) {
            const file = e.target.files[0]
            if (file.size < 4000000) {
                if (classname === 'addPhotoProfile') {
                    dispatch(uploadPhotoThunk(file))
                }
                if (classname === 'addPhotoPost') {
                    convertFileToBase64(file, (file64: string) => {
                        callback?.(file64)
                    })
                }

            } else {
                alert('Файл слишком большого размера')
            }
        }
    }
    console.log(classname)
    return (
        <div className={classname}>
            <label>
                <input type="file"
                       onChange={uploadHandler}
                       style={{display: 'none'}}
                       accept={'image/jpeg'}

                />
                <IconButton component="span">
                    <PhotoCameraIcon/>
                </IconButton>
            </label>
        </div>
    );
};

