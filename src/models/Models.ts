export interface IDataModel {
    id: number,
    uid: string,
    first_name: string,
    last_name: string,
    avatar: string,
    date_of_birth: string,
    employment: IEmploymentModel,
    phone_number: string,
}

export interface ISelectedModel {
    id: number,
    uid: string,
    first_name: string,
    last_name: string,
    avatar: string,
    
}

export interface IEmploymentModel {
    title: string
}

export interface ISelectableDeveloper {
    isSelected: boolean,
    personData: IDataModel
}