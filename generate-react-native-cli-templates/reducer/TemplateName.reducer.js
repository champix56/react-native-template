export const templateNameInitialState = {};
export const TemplateName_ACTIONS = Object.freeze({
  TYPE1: 'TYPE1',
});
export const TemplateName_PRIVATE_ACTIONS = Object.freeze({
  PRIVATE_TYPE1: 'PRIVATE_TYPE1',
});
/**
 * reducer TemplateName
 */
export default (state = templateNameInitialState, action) => {
  if (undefined === action) {
    return state;
  }
  if (action.type.includes('@@redux/INIT')) {
    action.type = '@@redux/INIT';
  }
  switch (action.type) {
    case TemplateName_ACTIONS.TYPE1:
      return {...state};
    default:
      return state;
  }
};
