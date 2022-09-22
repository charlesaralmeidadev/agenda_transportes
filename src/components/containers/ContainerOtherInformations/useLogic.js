import { PAGES } from 'utils/constants'
import {
    decrementProgress,
    setPage,
    setOtherInfo,
    getOtherInfo,
} from 'redux/slices/agendar'
import { useDispatch, useSelector } from 'react-redux'

const useLogic = () => {
    const otherInfoState = useSelector(getOtherInfo)
    const dispatch = useDispatch()

    const handleBackClick = () => {
        dispatch(decrementProgress())
        dispatch(setPage(PAGES.PASSENGERS))
    }

    const handleForwardClick = () => {
        dispatch(setPage(PAGES.CONFIRMATION))
    }

    const handleChangeInfo = (key, value) => {
        dispatch(setOtherInfo({ key, value }))
    }

    return {
        handleBackClick,
        handleForwardClick,
        otherInfoState,
        handleChangeInfo,
    }
}

export default useLogic
