import { Action } from 'redux';
import { TilePosition } from '../board';

export interface ActionToggleTile extends Action {
	type: 'ToggleTile';
	data: {
		x: number;
		y: number;
	};
}

export const isActionToggleTile = (action: Action): action is ActionToggleTile => (
	action.type === 'ToggleTile'
);

export const toggleTile = (x: number, y: number): ActionToggleTile => ({
	type: 'ToggleTile',
	data: {
		x,
		y,
	},
});

export interface ActionSetWarningTiles extends Action {
	type: 'SetWarningTiles';
	data: {
		positions: TilePosition[];
	};
}

export const isActionSetWarningTiles = (action: Action): action is ActionSetWarningTiles => (
	action.type === 'SetWarningTiles'
);

export const setWarningTiles = (positions: TilePosition[]): ActionSetWarningTiles => ({
	type: 'SetWarningTiles',
	data: {
		positions,
	},
});
