import { Action } from 'redux';

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
