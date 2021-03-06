// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import {ActionTypes} from 'utils/constants';

import type {GenericAction} from 'mattermost-redux/types/actions';

import type {ViewsState} from 'types/store/views';

export default function settings(state: ViewsState['settings'] = {activeSection: '', previousActiveSection: ''}, action: GenericAction) {
    switch (action.type) {
    case ActionTypes.UPDATE_ACTIVE_SECTION:
        return {
            activeSection: action.data,
            previousActiveSection: state.activeSection,
        };
    default:
        return state;
    }
}
