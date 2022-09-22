import { PAGES } from 'utils/constants'
import { useDispatch } from 'react-redux'
import {
    incrementProgress,
    decrementProgress,
    setPage,
} from 'redux/slices/agendar'

const useLogic = () => {
    const dispatch = useDispatch()

    const handleBackClick = () => {
        dispatch(setPage(PAGES.OTHER_INFORMATIONS))
    }
    const handleConfirmationClick = () => {
        alert('ok')
    }

    return { handleBackClick, handleConfirmationClick }
}

export default useLogic
