import Form from "./Form"
import SkinAnalyzer from "./SkinCheck";
import CryptoDonation from "./CryptoDonation";

function SkinScreening() {
    
    return (
        <div>
            <SkinAnalyzer />      
                <Form />
                <CryptoDonation />
        </div>
    );
}

export default SkinScreening;