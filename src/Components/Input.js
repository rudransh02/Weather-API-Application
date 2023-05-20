import Card from '@mui/material/Card';
import IconButton from '@mui/material/IconButton';
import ArrowCircleRightTwoToneIcon from '@mui/icons-material/ArrowCircleRightTwoTone';
import TextField from '@mui/material/TextField';

const Input = ({updateUI, handleLocation}) => {
    return (
        <Card className="Card">
            <TextField id="standard-basic" size='large' label="Location" variant="standard" onChange={(event)=>handleLocation(event.target.value)} />
            <IconButton color="primary" aria-label="Set Location" onClick = {() =>
            {
                updateUI();
            }}>
            <ArrowCircleRightTwoToneIcon  className="Button" fontSize='large' />
            </IconButton>
        </Card>
    );
}
 
export default Input;