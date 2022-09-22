import React from 'react'
import ContainerAdress from '../ContainerAdress'
import ContainerDateTime from '../ContainerDateTime'
import './style.css'
import FundOptionSelect from '../../selects/FundOptionSelect'
import ReturnOptionSelect from 'components/selects/ReturnOptionSelect'
import DateInput from 'components/inputs/DateInput'
import TimeInput from 'components/inputs/TimeInput'
import AdressInput from 'components/inputs/AdressInput'
import ReturnDateInput from 'components/inputs/ReturnDateInput'
import ReturnTimeInput from 'components/inputs/ReturnTimeInput'
import TripReasonInput from 'components/inputs/TripReasonInput'
import OtherInfoInput from '../../inputs/OtherInfoInput'

const OtherInfo = ({ handleChange, otherInfoState }) => {
    return (
        <div role="other-info" className="other-info">
            <div className="fund-option-container">
                <FundOptionSelect
                    handleChange={handleChange}
                    state={otherInfoState}
                />
            </div>
            <div className="return-option-container">
                <ReturnOptionSelect
                    handleChange={handleChange}
                    state={otherInfoState.return}
                />
                {otherInfoState.return ? (
                    <>
                        <ReturnDateInput
                            handleChange={handleChange}
                            keyValue={'returnDate'}
                            state={otherInfoState.returnDate}
                        />
                        <ReturnTimeInput
                            handleChange={handleChange}
                            keyValue={'returnTime'}
                            state={otherInfoState.returnTime}
                        />
                    </>
                ) : null}
            </div>
            <div className="trip-reason-container">
                <TripReasonInput
                    handleChange={handleChange}
                    keyValue={'tripReason'}
                    state={otherInfoState.tripReason}
                />
            </div>
            <div className="other-info-container">
                <OtherInfoInput
                    handleChange={handleChange}
                    keyValue={'other'}
                    state={otherInfoState.other}
                />
            </div>
        </div>
    )
}

export default OtherInfo
