import React from 'react'
import { LABELS } from 'utils/constants'
import ButtonBackNavigation from 'components/buttons/ButtonBackNavigation'
import './style.css'
import useLogic from './useLogic'
import ButtonConfirmation from '../../buttons/ButtonConfirmation'
import ButtonCheckInformations from '../../buttons/ButtonCheckInformations'

const ContainerConfirmation = () => {
    const { handleBackClick, handleConfirmationClick } = useLogic()

    return (
        <div role="container-confirmation" className="container-confirmation">
            <div
                role="main-content-confirmation"
                className="main-content-confirmation"
            >
                <div
                    role="container-check-informations"
                    className="container-check-informations"
                >
                    <span>Conferir Informações</span>
                    <ButtonCheckInformations handleClick={handleBackClick} />
                </div>
                <div role="container-confirm" className="container-confirm">
                    <span>Confirmar Agendamento</span>
                    <ButtonConfirmation handleClick={handleConfirmationClick} />
                </div>
            </div>
        </div>
    )
}

export default ContainerConfirmation
