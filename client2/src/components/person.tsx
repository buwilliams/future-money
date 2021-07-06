export interface PersonState {
  _id: string;
  person_name: string;
  person_position: string;
  person_level: string;
}

export interface PersonRecords extends PersonState {
  records: PersonState[];
}

export interface PersonRecord extends PersonState {
  record: PersonState;
  deleteRecord: DeleteRecord;
}

export interface DeleteRecord {
  (id: string): void
}

export const emptyPerson: PersonRecords = {
  _id: "",
  person_name: "",
  person_position: "",
  person_level: "",
  records: []
}
