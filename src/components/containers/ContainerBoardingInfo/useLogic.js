import { PAGES, VEHICLE_TYPE, TRANSPORT_TYPE } from 'utils/constants'
import {
    incrementProgress,
    decrementProgress,
    setPage,
    setBoardingInfo,
    getBoardingInfo,
    getVehicleType,
    getTransportType,
} from 'redux/slices/agendar'
import { useDispatch, useSelector } from 'react-redux'

const useLogic = () => {
    const boardingInfoState = useSelector(getBoardingInfo)
    const vehicleType = useSelector(getVehicleType)
    const transportType = useSelector(getTransportType)

    const dispatch = useDispatch()

    const handleBackClick = () => {
        dispatch(decrementProgress())
        if (transportType === TRANSPORT_TYPE.DOCUMENTO) {
            //decrementa novamente porque pula escolha de veículo
            dispatch(decrementProgress())
            dispatch(setPage(PAGES.TRANSPORT_TYPE))
        } else if (vehicleType === VEHICLE_TYPE.ONIBUS)
            dispatch(setPage(PAGES.BUS_TYPE))
        else dispatch(setPage(PAGES.VEHICLE_TYPE))
    }

    const handleForwardClick = () => {
        dispatch(incrementProgress())
        dispatch(setPage(PAGES.INTERMEDIATE_DESTINATION_INFO))
    }

    const handleChangeInfo = (key, value) => {
        dispatch(setBoardingInfo({ key, value }))
    }

    return {
        handleBackClick,
        handleForwardClick,
        handleChangeInfo,
        boardingInfoState,
        transportType,
    }
}

export default useLogic
