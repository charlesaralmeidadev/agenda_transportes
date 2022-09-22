export const COLORS = {
    PRIMARY: '#002C52',
    SECONDARY: '#002c5233',
    RED: '#9E2727',
    GREEN: '#499a26',
    WHITE: '#ffffff',
    YELLOW: '#e4df1c',
}

export const ICONS = {
    PERSON: 'fa-person',
    CUBE: 'fa-cube',
    FILE_LINES: 'fa-file-lines',
    PLANE: 'fa-plane',
    CAR: 'fa-car',
    KOMBI: 'fa-truck-field',
    FURGAO: 'fa-truck',
    VAN: 'fa-van-shuttle',
    BUS: 'fa-bus',
    BUS_SIMPLE: 'fa-bus-simples',
    CIRCLE_ARROW_LEFT: 'fa-circle-arrow-left',
    CIRCLE_ARROW_RIGHT: 'fa-circle-arrow-right',
    CIRCLE_X_MARK: 'fa-circle-xmark',
    CIRCLE_PLUS: 'fa-circle-plus',
    SQUARE_CHECK: 'fa-square-check',
}

export const LABELS = {
    TIPO_TRANSPORTE: 'Tipo de Transporte',
    TIPO_VEICULO: 'Tipo de Veículo',
    TIPO_BUS: 'Tipo de Ônibus',
    EMBARQUE: 'Embarque',
    LOCAL_RETIRADA: 'Local de Retirada',
    FINAL_DESTINATION: 'Destino Final',
    INTERMEDIATE_DESTINATION: 'Destino Intermediário',
    PASSENGERS: 'Passageiros',
    OTHER_INFO: 'Outras Informações',
}

export const SUBLABELS = {
    FINAL_DESTINATION: '(último local antes de retornar)',
    INTERMEDIATE_DESTINATION: '(deixe em branco se nenhum)',
    PASSENGERS: '(adicione todos os passageiros)',
    BUS: '(mais informações em "Ajuda" acima)',
}

export const LINKS = {
    DGA: 'https://www.dga.unicamp.br/',
    USER: {
        INICIO: '/transportes/agenda',
        AGENDAR: '/transportes/agenda/agendar',
        LOCALIZAR: '/transportes/agenda/localizar',
        AJUDA: '/transportes/agenda/ajuda',
    },
}

export const BUTTONS = {
    LOGIN: 'Conectar',
    LOGOUT: 'Desconectar',
}

export const PAGES = {
    BOARDING_INFO: 'BoardingInfoPage',
    FINAL_DESTINATION_INFO: 'FinalDestinationInfoPage',
    INTERMEDIATE_DESTINATION_INFO: 'IntermediateDestinationInfoPage',
    OTHER_INFORMATIONS: 'OtherInformationsPage',
    PASSENGERS: 'PassengersPage',
    TRANSPORT_TYPE: 'TransportTypePage',
    VEHICLE_TYPE: 'VehicleTypePage',
    CONFIRMATION: 'ConfirmationPage',
    BUS_TYPE: 'BusTypePage',
}

export const TRANSPORT_TYPE = {
    PASSAGEIRO: 'Passageiro',
    CARGA: 'Carga',
    DOCUMENTO: 'Documento',
    TRANSLADO: 'Translado Aeroporto',
    EMPRESTIMO: 'Empréstimo de veículo',
}

export const VEHICLE_TYPE = {
    CARRO: 'Carro',
    KOMBI: 'Kombi',
    FURGAO: 'Furgão',
    VAN: 'Van Executiva',
    ONIBUS: 'Ônibus',
}

export const BUS_TYPE = {
    BUS: 'Ônibus Convencional',
    BUS_EXECUTIVE: 'Ônibus Executivo',
    BUS_MICRO: 'Micro-ônibus',
}

export const VINCULO_TYPE = {
    SERVIDOR_UNICAMP: 'Servidor Unicamp',
    SERVIDOR_FUNCAMP: 'Servidor Funcamp',
    PROFESSOR_UNICAMP: 'Professor Unicamp',
    ALUNO_UNICAMP: 'Aluno Unicamp',
    OUTRO: 'Outro',
}

export const PROGRESS_RATE = 16.7
