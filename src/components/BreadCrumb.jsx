
import { Box , InputBase, styled} from '@mui/material';

const Component = styled(Box)`
 background: #F6F6F6;
 '& > div': {
    margin: 10;
    
 }

 `

 

const BreadCrumb = () => {
    return (
        <Component>
           <InputBase 
           placeholder='Search Images'
           />
           <InputBase 
             placeholder='Number of Images' 
             
             type='number'/>
        </Component>
    )
}

export default BreadCrumb;