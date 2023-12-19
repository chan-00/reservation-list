interface TableType {
  table: number;
  floor: number;
}
// 예약 데이터 객체의 타입
interface ReservationListType {
  id: number;
  name: string;
  phone: string;
  reserveDate: Date;
  guest: number;
  table: TableType;
  note: string;
}

export type { ReservationListType, TableType };
