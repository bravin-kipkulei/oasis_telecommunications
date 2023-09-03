// history.js
// history.js

/**
 * Pushes a new state to the browser's history.
 * @param {Object} state - The state object associated with the history entry.
 * @param {string} title - The title of the history entry (ignored by most browsers).
 * @param {string} url - The URL to push to the history stack.
 */
export const pushState = (state, title, url) => {
    window.history.pushState(state, title, url);
  };
  
  /**
   * Replaces the current state in the browser's history.
   * @param {Object} state - The state object associated with the history entry.
   * @param {string} title - The title of the history entry (ignored by most browsers).
   * @param {string} url - The URL to replace the current history entry with.
   */
  export const replaceState = (state, title, url) => {
    window.history.replaceState(state, title, url);
  };
  
  /**
   * Sets up an event listener for the 'popstate' event.
   * @param {Function} handler - The function to execute when a 'popstate' event occurs.
   */
  export const onPopState = (handler) => {
    window.addEventListener('popstate', handler);
  };
  
  /**
   * Sets up an event listener for a custom 'pushstate' event.
   * @param {Function} handler - The function to execute when a 'pushstate' event occurs.
   */
  export const onPushState = (handler) => {
    window.addEventListener('pushstate', handler);
  };
  