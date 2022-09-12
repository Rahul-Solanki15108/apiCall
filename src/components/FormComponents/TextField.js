import TextField from '@mui/material/TextField';

function renderTextField({
    input,
    label
}){
    return (
        <TextField 
            fullWidth 
            variant="outlined"
            label={label}
            sx={{width:"70%"}} 
            {...input}
        />  
    );
}

export default renderTextField;