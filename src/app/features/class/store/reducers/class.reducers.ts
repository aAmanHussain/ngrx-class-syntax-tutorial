import * as ClassActions from './../actions/class.actions';
import { WkClass } from './../../models';

export const featureKey = 'class';

export interface State {
    classesLoaded: boolean;
    classes: WkClass[];
    classError: Error | any;
}

export const initialState = {
    classesLoaded: false,
    classes: [],
    classError: null
}

export const classReducer = (state: State = initialState, action: ClassActions.Actions): State => {
    switch (action.type) {
        case ClassActions.LOAD_CLASSES: {
            return { 
                ...state,
                classesLoaded: false
            };
        }
        case ClassActions.LOADED_CLASSES: {
            return { 
                ...state, 
                classes: (action as ClassActions.LoadedClassesAction).payload,
                classesLoaded: true 
            };
        }
        case ClassActions.ADDED_CLASS: {
            const classes = [ ...state.classes, (action as ClassActions.AddedClassAction).payload ];
            return { ...state, classes };
        }
        case ClassActions.DELETE_CLASS: {
            const classId = (action as ClassActions.DeleteClassAction).payload;
            const classes = [...state.classes ].filter(({ id }) => id !== classId);
            return { ...state, classes };
        }
        case ClassActions.CLASS_ERROR: {
            const classError = (action as ClassActions.ClassErrorAction).payload;
            return { ...state, classError, classesLoaded: true };
        }
        default:
            return { ...state };
    }
}