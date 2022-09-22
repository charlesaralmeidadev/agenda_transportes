import { PAGES } from 'utils/constants'
import {
    incrementProgress,
    decrementProgress,
    setPage,
    setIntermediateDestinationInfo,
    getIntermediateDestinationInfo,
    addIntermediateDestination,
    removeIntermediateDestination,
} from 'redux/slices/agendar'
import { useDispatch, useSelector } from 'react-redux'

const useLogic = () => {
    const intermediateDestinationInfoState = useSelector(
        getIntermediateDestinationInfo
    )
    const dispatch = useDispatch()

    const getDestinationList = () =>
        intermediateDestinationInfoState.destinationsList.map((destination) => {
            let time = ''
            if (destination.estimatedTimeType === 'Horas') {
                let hours = new Date(destination.estimatedTime).getHours()
                let minutes = new Date(destination.estimatedTime).getMinutes()
                if (hours > 0) {
                    time = hours.toString() + ' horas'
                    if (minutes > 0)
                        time = time + ' e ' + minutes.toString() + ' minutos'
                } else {
                    if (minutes > 0) time = minutes.toString() + ' minutos'
                    else time = '-'
                }
            } else {
                if (destination.estimatedDays > 0)
                    time = destination.estimatedDays + ' dia(s)'
                else time = '-'
            }
            return (
                destination.adress +
                ' - ' +
                destination.city +
                '/' +
                destination.uf +
                ' - tempo: ' +
                time
            )
        })

    const handleBackClick = () => {
        dispatch(decrementProgress())
        dispatch(setPage(PAGES.BOARDING_INFO))
    }

    const handleForwardClick = () => {
        dispatch(incrementProgress())
        dispatch(setPage(PAGES.FINAL_DESTINATION_INFO))
    }

    const handleChangeInfo = (key, value) =>
        dispatch(setIntermediateDestinationInfo({ key, value }))

    const addDestination = () => {
        let actualDestination = intermediateDestinationInfoState.editing
        let newDestinationsList = [
            ...intermediateDestinationInfoState.destinationsList,
        ]
        newDestinationsList.push(actualDestination)
        dispatch(addIntermediateDestination(newDestinationsList))
    }

    const removeDestination = (index) => {
        let newDestinationsList = [
            ...intermediateDestinationInfoState.destinationsList,
        ]
        newDestinationsList.splice(index, 1)
        dispatch(removeIntermediateDestination(newDestinationsList))
    }

    return {
        getDestinationList,
        handleBackClick,
        handleForwardClick,
        handleChangeInfo,
        intermediateDestinationInfoState,
        addDestination,
        removeDestination,
    }
}

export default useLogic
