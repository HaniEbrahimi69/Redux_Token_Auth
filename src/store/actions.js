 
// Token
export const ACTION_UPDATE_TOKEN = Symbol('For update token');

// Page
export const ACTION_CHANGE_PAGE = 'ACTION_CHANGE_PAGE';

// Root
export const ACTION_ROOT_RESET = Symbol('Back to default state');
 

export default {
   // Page
   [ACTION_CHANGE_PAGE]: (state, {   pageTitle  }) => ({
  
    pageTitle
  }),
  // Token
  [ACTION_UPDATE_TOKEN]: (state, token) => ({
    token
  }),
};
