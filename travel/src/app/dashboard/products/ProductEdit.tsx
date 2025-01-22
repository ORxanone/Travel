import * as React from 'react';
import {
    Datagrid,
    DateField,
    Edit,
    EditButton,
    Pagination,
    ReferenceManyField,
    ReferenceManyCount,
    required,
    TabbedForm,
    TextField,
    TextInput,
    useRecordContext,
    useDefaultTitle,
    useTranslate,
    useGetResourceLabel,
} from 'react-admin';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import AspectRatioIcon from '@mui/icons-material/AspectRatio';
import EditNoteIcon from '@mui/icons-material/EditNote';
import ReviewIcon from '@mui/icons-material/Comment';

import { ProductEditDetails } from './ProductEditDetails';
import CustomerReferenceField from '../visitors/CustomerReferenceField';
import StarRatingField from '../reviews/StarRatingField';
import Poster from './Poster';
// import { Product } from '../types';
import CreateRelatedReviewButton from './CreateRelatedReviewButton';

const RichTextInput = React.lazy(() =>
    import('ra-input-rich-text').then(module => ({
        default: module.RichTextInput,
    }))
);

const ProductTitle = () => {
    const appTitle = useDefaultTitle();
    const translate = useTranslate();
    const record = useRecordContext();
    const getResourceLabel = useGetResourceLabel();

    const pageTitle = translate('ra.page.edit', {
        name: getResourceLabel('products', 1),
        recordRepresentation: `"${record?.reference}"`,
    });
    return record ? (
        <>
            <title>{`${appTitle} - ${pageTitle}`}</title>
            <span>{pageTitle}</span>
        </>
    ) : null;
};

const ProductEdit = () => (
    <Edit title={<ProductTitle />}>
        <TabbedForm>
            <TabbedForm.Tab
                label="Image"
                sx={{ maxWidth: '40em', minHeight: 48 }}
                iconPosition="start"
                icon={<PhotoCameraIcon />}
            >
                <Poster />
                <TextInput source="image" validate={req} />
                <TextInput source="thumbnail" validate={req} />
            </TabbedForm.Tab>
            <TabbedForm.Tab
                label="Details"
                path="details"
                sx={{ maxWidth: '40em', minHeight: 48 }}
                iconPosition="start"
                icon={<AspectRatioIcon />}
            >
                <ProductEditDetails />
            </TabbedForm.Tab>
            <TabbedForm.Tab
                label="Description"
                path="description"
                sx={{ maxWidth: '40em', minHeight: 48 }}
                iconPosition="start"
                icon={<EditNoteIcon />}
            >
                <RichTextInput source="description" label="" validate={req} />
            </TabbedForm.Tab>
            <TabbedForm.Tab
                label="Reviews"
                count={
                    <ReferenceManyCount
                        reference="comments"
                        target="post"
                        sx={{ lineHeight: 'inherit' }}
                    />
                }
                path="comments"
                sx={{ minHeight: 48 }}
                iconPosition="start"
                icon={<ReviewIcon />}
            >
                <ReferenceManyField
                    reference="comments"
                    target="post"
                    pagination={<Pagination />}
                >
                    <Datagrid
                        sx={{
                            width: '100%',
                            '& .column-comment': {
                                maxWidth: '20em',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                whiteSpace: 'nowrap',
                            },
                        }}
                    >
                        <DateField source="date" />
                        <CustomerReferenceField source="customer_id" />
                        <StarRatingField
                            label="resources.reviews.fields.rating"
                            source="rating"
                        />
                        <TextField source="comment" />
                        <TextField source="status" />
                        <EditButton />
                    </Datagrid>
                    <CreateRelatedReviewButton />
                </ReferenceManyField>
            </TabbedForm.Tab>
        </TabbedForm>
    </Edit>
);

const req = [required()];

export default ProductEdit;
