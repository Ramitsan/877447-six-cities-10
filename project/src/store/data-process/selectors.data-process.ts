import { NameSpace } from '../../const';
import { State } from '../../types/stateType';
import { OfferType } from '../../types/offerType';

export const getOffers = (state: State): OfferType[] => state[NameSpace.Data].offers;
export const getLoadedDataStatus = (state: State): boolean => state[NameSpace.Data].isDataLoaded;

export const getOfferGetter = (offerId: number) => (state: State) => state[NameSpace.Data].offers.find((it) => it.id === offerId);
