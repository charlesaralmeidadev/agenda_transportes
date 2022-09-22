import React from 'react'
import TitleContainer from 'components/containers/titleContainer'
import SubLabel from 'components/sublabels'
import { LABELS, SUBLABELS } from 'utils/constants'
import ButtonBackNavigation from 'components/buttons/ButtonBackNavigation'
import ButtonFowardNavigation from 'components/buttons/ButtonFowardNavigation'
import FinalDestinationInfo from 'components/containers/FinalDestinationInfo'
import './style.css'
import useLogic from './useLogic'

const ContainerFinalDestinationInfo = () => {
    const {
        handleBackClick,
        handleForwardClick,
        handleChangeInfo,
        finalDestinationInfoState,
    } = useLogic()

    return (
        <div
            role="container-final-destination-info"
            className="container-final-destination-info"
        >
            <ButtonBackNavigation handleClick={handleBackClick} />
            <div
                role="main-content-final-destination-info"
                className="main-content-final-destination-info"
            >
                <div
                    className="title-final-destination-info"
                    role="title-final-destination-info"
                >
                    <TitleContainer
                        text={LABELS.FINAL_DESTINATION}
                        children={
                            <div role="sub-label" className="sub-label">
                                <SubLabel text={SUBLABELS.FINAL_DESTINATION} />
                            </div>
                        }
                    />
                </div>
                <div
                    className="input-final-destination-info"
                    role="input-final-destination-info"
                >
                    <FinalDestinationInfo
                        handleChange={handleChangeInfo}
                        finalDestinationInfoState={finalDestinationInfoState}
                    />
                </div>
            </div>
            <ButtonFowardNavigation handleClick={handleForwardClick} />
        </div>
    )
}

export default ContainerFinalDestinationInfo
