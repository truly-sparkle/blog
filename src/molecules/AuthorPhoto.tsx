import React from "react";
import Photo from "../atoms/Photo";


interface AuthorPhoto {
    photoUrl: any;
}

const AuthorPhoto = ({photoUrl}: AuthorPhoto) => {
    return (
        <Photo photoUrl={photoUrl} width={'50px'} height={'50px'}/>
    )

}

export default AuthorPhoto;
