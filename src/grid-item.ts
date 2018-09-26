import { TilePosition } from './board';

export interface GridItem<T = any> extends TilePosition {
	readonly value: T;
}
