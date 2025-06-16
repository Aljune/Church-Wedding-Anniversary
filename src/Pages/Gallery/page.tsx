import React, { useState, useEffect } from 'react';

import GalleryComponent from '../../components/container/Gallery/GalleryContainer';
import { useLocation } from 'react-router-dom';

const GalleryPage = () => {

    const [user, setUser] = useState<string>('user');

    const location = useLocation();
    const { pathname } = location;
    const checkPathName = () => {
        if(pathname === '/admin/user-gallery' ){
            setUser('admin');
        }
    }

    useEffect(checkPathName,[]);
    return (
        <>
         Current Path: {user}
            <GalleryComponent role={user}/>
        </>
    );
  };
export default GalleryPage;