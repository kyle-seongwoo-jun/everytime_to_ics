export interface EveryTimeResponse {
  table: Table;
  user: User;
  primaryTables: PrimaryTables;
}

export interface PrimaryTables {
  primaryTable: PrimaryTable[];
}

export interface PrimaryTable {
  year: string;
  semester: string;
  identifier: string;
}

export interface Table {
  subject: Subject[];
  year: string;
  semester: string;
  status: string;
  identifier: string;
}

export interface Subject {
  internal: Closed;
  name: Closed;
  professor: Closed;
  time: Time;
  place: Closed;
  credit: Closed;
  closed: Closed;
  id: string;
}

export interface Closed {
  value: string;
}

export interface Time {
  data: Data;
  value: string;
}

export interface Data {
  day: string;
  starttime: string;
  endtime: string;
  place: string;
}

export interface User {
  name: string;
}
