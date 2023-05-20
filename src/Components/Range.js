import Card from '@mui/material/Card';

const Range = ({minimumTemprature, maximumTemprature}) => {
    return (
        <Card className="Card">
            <h1>{minimumTemprature}&#176;C &emsp; &emsp; &emsp; - &emsp; &emsp; &emsp; {maximumTemprature}&#176;C</h1>
        </Card>
    );
}
 
export default Range;