

import { Card , styled } from '@mui/material';

const StyledImage = styled('img')({
    height: 300,
    width: '100%',
    ogjectFit: 'cover'
})

const Image = ({ image }) => {
    return (
        <Card>
            <StyledImage src={image.largeImageURL} />
        </Card>
    )
}


export default Image;