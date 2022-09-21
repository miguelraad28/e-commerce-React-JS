import {React, useState} from 'react';

const UseLoading = () => {
    const [loading, setLoading] = useState();
    return {loading, setLoading}
}

export default UseLoading;
