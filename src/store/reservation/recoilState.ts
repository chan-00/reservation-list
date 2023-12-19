import { atom } from 'recoil';
import { ReservationListType } from '../../type/reservation/reservationListType';

const reservationList = atom<ReservationListType[]>({
  key: 'reservationList',
  default: [],
});

const seatReservationList = atom<ReservationListType[]>({
  key: 'seatReservationList',
  default: [],
});

const currentReservation = atom<ReservationListType | null>({
  key: 'currentReservation',
  default: null,
});

const currentId = atom<number>({
  key: 'currentId',
  default: 1,
});

export { reservationList, currentReservation, currentId, seatReservationList };
