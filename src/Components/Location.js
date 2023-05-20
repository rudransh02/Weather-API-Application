import Card from '@mui/material/Card';

const Location = ({location}) => {
    return (
        <Card className="Card">
            <h1>{location}</h1>
        </Card>
    );
}
 
export default Location;