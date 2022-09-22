import { PAGES } from 'utils/constants'
import {
    incrementProgress,
    decrementProgress,
    setPage,
    setFinalDestinationInfo,
    getFinalDestinationInfo,
} from 'redux/slices/agendar'
import { useDispatch, useSelector } from 'react-redux'

const useLogic = () => {
    const finalDestinationInfoState = useSelector(getFinalDestinationInfo)
    const dispatch = useDispatch()

    const handleBackClick = () => {
        dispatch(decrementProgress())
        dispatch(setPage(PAGES.INTERMEDIATE_DESTINATION_INFO))
    }

    const handleForwardClick = () => {
        dispatch(incrementProgress())
        dispatch(setPage(PAGES.PASSENGERS))
    }

    const handleChangeInfo = (key, value) => {
        dispatch(setFinalDestinationInfo({ key, value }))
    }

    return {
        handleBackClick,
        handleForwardClick,
        handleChangeInfo,
        finalDestinationInfoState,
    }
}

export default useLogic
