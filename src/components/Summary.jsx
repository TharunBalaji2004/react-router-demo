import { useNavigate } from 'react-router-dom';

const Summary = () => {
    const navigate = useNavigate();

    return (
        <>
            <div>Summary page</div>
            <br />
            <button onClick={() => navigate(-1)}>Go Back</button>
        </>
    );
}

export default Summary;