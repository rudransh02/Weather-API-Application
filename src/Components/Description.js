import Card from '@mui/material/Card';

const Description = ({description}) => {

    return (
        <Card className="Card">
            <h1>{description}</h1>
        </Card>
    );
}
 
export default Description;