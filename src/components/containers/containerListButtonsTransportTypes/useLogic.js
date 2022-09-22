import { COLORS, ICONS, PAGES, TRANSPORT_TYPE } from 'utils/constants'
import {
    incrementProgress,
    setPage,
    setTransportType,
} from 'redux/slices/agendar'
import { useDispatch } from 'react-redux'

const useLogic = () => {
    const dispatch = useDispatch()
    const sizeIcons = '3em'
    const getList = () => [
        {
            id: TRANSPORT_TYPE.PASSAGEIRO,
            icon: {
                name: ICONS.PERSON,
                size: sizeIcons,
                color: COLORS.PRIMARY,
            },
            label: TRANSPORT_TYPE.PASSAGEIRO,
        },
        {
            id: TRANSPORT_TYPE.CARGA,
            icon: { name: ICONS.CUBE, size: sizeIcons, color: COLORS.PRIMARY },
            label: TRANSPORT_TYPE.CARGA,
        },
        {
            id: TRANSPORT_TYPE.DOCUMENTO,
            icon: {
                name: ICONS.FILE_LINES,
                size: sizeIcons,
                color: COLORS.PRIMARY,
            },
            label: TRANSPORT_TYPE.DOCUMENTO,
        },
        {
            id: TRANSPORT_TYPE.EMPRESTIMO,
            icon: { name: ICONS.CAR, size: sizeIcons, color: COLORS.PRIMARY },
            label: TRANSPORT_TYPE.EMPRESTIMO,
        },
    ]

    const handleClick = (typeId) => {
        dispatch(setTransportType(typeId))
        if (typeId === TRANSPORT_TYPE.DOCUMENTO) {
            //incrementa duas vezes porque pula escolha de veiculo
            dispatch(incrementProgress())
            dispatch(incrementProgress())
            dispatch(setPage(PAGES.BOARDING_INFO))
        } else {
            dispatch(incrementProgress())
            dispatch(setPage(PAGES.VEHICLE_TYPE))
        }
    }

    return { getList, handleClick }
}

export default useLogic
