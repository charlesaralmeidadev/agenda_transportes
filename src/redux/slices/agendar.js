import { createSlice } from '@reduxjs/toolkit'
import { PAGES, PROGRESS_RATE } from '../../utils/constants'

export const initialState = {
    progress: 0,
    currentPage: PAGES.TRANSPORT_TYPE,
    transportType: null,
    vehicleType: null,
    busType: null,
    boardingInfo: {
        date: new Date().toString(),
        time: new Date().toString(),
        uf: 'SP',
        city: 'Campinas',
        adress: '',
        reference: '',
    },
    intermediateDestinationInfo: {
        editing: {
            uf: 'SP',
            city: 'Campinas',
            adress: '',
            reference: '',
            estimatedTimeType: 'Horas',
            estimatedTime: 'Tue Sep 13 2022 00:00:00 GMT-0300 (GMT-03:00)',
            estimatedDays: '0',
        },
        destinationsList: [],
    },
    finalDestinationInfo: {
        uf: 'SP',
        city: 'Campinas',
        adress: '',
        reference: '',
    },
    passengersInfo: {
        editing: {
            vinculo: '',
            name: '',
            documentType: 'Matricula',
            documentNumber: '',
            phone: '',
        },
        passengersList: [],
    },
    otherInfo: {
        fund: 0,
        return: false,
        returnDate: new Date().toString(),
        returnTime: new Date().toString(),
        tripReason: '',
        other: '',
        fundList: [
            'CO 4250 - CL 0171',
            'CO 4250 - CL 0171',
            'CO 4250 - CL 0171',
            'CO 4250 - CL 0172',
        ],
    },
}

export const slice = createSlice({
    name: 'agendar',
    initialState,
    reducers: {
        incrementProgress(state) {
            return {
                ...state,
                progress: state.progress + PROGRESS_RATE,
            }
        },
        decrementProgress(state) {
            return {
                ...state,
                progress: state.progress - PROGRESS_RATE,
            }
        },
        setPage(state, { payload }) {
            return {
                ...state,
                currentPage: payload,
            }
        },
        setTransportType(state, { payload }) {
            return {
                ...state,
                transportType: payload,
            }
        },
        setVehicleType(state, { payload }) {
            return {
                ...state,
                vehicleType: payload,
            }
        },
        setBusType(state, { payload }) {
            return {
                ...state,
                busType: payload,
            }
        },
        setBoardingInfo(state, { payload }) {
            return {
                ...state,
                boardingInfo: {
                    ...state.boardingInfo,
                    [payload.key]: payload.value,
                },
            }
        },
        setIntermediateDestinationInfo(state, { payload }) {
            return {
                ...state,
                intermediateDestinationInfo: {
                    ...state.intermediateDestinationInfo,
                    editing: {
                        ...state.intermediateDestinationInfo.editing,
                        [payload.key]: payload.value,
                    },
                },
            }
        },
        addIntermediateDestination: (state, { payload }) => {
            return {
                ...state,
                intermediateDestinationInfo: {
                    editing: initialState.intermediateDestinationInfo.editing,
                    destinationsList: payload,
                },
            }
        },
        removeIntermediateDestination: (state, { payload }) => {
            return {
                ...state,
                intermediateDestinationInfo: {
                    editing: state.intermediateDestinationInfo.editing,
                    destinationsList: payload,
                },
            }
        },
        setFinalDestinationInfo(state, { payload }) {
            return {
                ...state,
                finalDestinationInfo: {
                    ...state.finalDestinationInfo,
                    [payload.key]: payload.value,
                },
            }
        },
        setPassengersInfo(state, { payload }) {
            return {
                ...state,
                passengersInfo: {
                    ...state.passengersInfo,
                    editing: {
                        ...state.passengersInfo.editing,
                        [payload.key]: payload.value,
                    },
                },
            }
        },
        addPassengers: (state, { payload }) => {
            return {
                ...state,
                passengersInfo: {
                    editing: initialState.passengersInfo.editing,
                    passengersList: payload,
                },
            }
        },
        removePassengers: (state, { payload }) => {
            return {
                ...state,
                passengersInfo: {
                    editing: state.passengersInfo.editing,
                    passengersList: payload,
                },
            }
        },
        setOtherInfo(state, { payload }) {
            return {
                ...state,
                otherInfo: {
                    ...state.otherInfo,
                    [payload.key]: payload.value,
                },
            }
        },
    },
})

export const {
    incrementProgress,
    decrementProgress,
    setPage,
    setTransportType,
    setVehicleType,
    setBusType,
    setBoardingInfo,
    setIntermediateDestinationInfo,
    addIntermediateDestination,
    removeIntermediateDestination,
    setFinalDestinationInfo,
    setPassengersInfo,
    addPassengers,
    removePassengers,
    setOtherInfo,
} = slice.actions

export const getState = (state) => state.agendar
export const getBoardingInfo = (state) => state.agendar.boardingInfo
export const getIntermediateDestinationInfo = (state) =>
    state.agendar.intermediateDestinationInfo
export const getFinalDestinationInfo = (state) =>
    state.agendar.finalDestinationInfo
export const getPassengersInfo = (state) => state.agendar.passengersInfo
export const getOtherInfo = (state) => state.agendar.otherInfo
export const getVehicleType = (state) => state.agendar.vehicleType
export const getTransportType = (state) => state.agendar.transportType

export default slice.reducer
