export const themeActionType = {
  TOGGLE_THEME: 'TOGGLE_THEME',
  IS_THEME_LOADING: 'IS_THEME_LOADING',
};

export const changeTheme = () => {
  return function(dispatch, getState){
    const { theme } = getState();
    dispatch({
      type: themeActionType.TOGGLE_THEME,
      payload: theme?.theme === 'dark' ? 'light' : 'dark'
    })
  }
}