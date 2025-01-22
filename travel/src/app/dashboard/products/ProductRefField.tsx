import * as React from 'react';
import { useRecordContext, Link } from 'react-admin';
// import { Product } from '../types';

const ProductRefField = (_: { source: string }) => {
    const record = useRecordContext();
    return record ? (
        <Link to={`/products/${record.id}`}>{record.reference}</Link>
    ) : null;
};

export default ProductRefField;
