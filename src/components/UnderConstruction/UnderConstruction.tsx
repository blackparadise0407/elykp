import { AiOutlineLeft } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'

export default function UnderConstruction() {
    const navigate = useNavigate()
    const handleGoBack = () => {
        navigate(-1)
    }
    return (
        <div className="flex flex-col items-center mt-52 gap-5">
            <img
                loading="eager"
                src={require('assets/images/under-construction.png')}
                alt="Under construction"
            />
            <p className="font-medium text-xl text-center">
                This page is temporary under construction
            </p>
            <button
                className="button flex items-center gap-1"
                onClick={handleGoBack}
            >
                <AiOutlineLeft />
                Go back
            </button>
        </div>
    )
}
