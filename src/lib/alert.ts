// TODO move to module context?

export type Alert_Status = 'inform' | 'help' | 'error';

export interface Alert_Status_Options {
	color: string;
	icon: string | null;
}

export const alert_status_options: Record<Alert_Status, Alert_Status_Options> = {
	inform: {color: 'var(--text_2)', icon: '✻'},
	help: {color: 'var(--color_b_5)', icon: '➺'},
	error: {color: 'var(--color_c_5)', icon: '!?'},
};
