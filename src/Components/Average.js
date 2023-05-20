import Card from '@mui/material/Card';

const Average = ({averageTemprature}) => {
    return (
        <Card className="Card">
            <h1>{averageTemprature}&#176;C</h1>
        </Card>
    );
}
 
export default Average;