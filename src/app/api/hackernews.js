import axios from "axios";

axios.defaults.baseURL = "https://hacker-news.firebaseio.com/v0/";

const controller = new AbortController();
const signal = controller.signal;

/**
 * Aborts the recent call
 * 
 * @returns 
 */

export function cancelRequest() {
  return controller.abort();
}

/**
 * 
 * @returns {Promise<array>} ids for new and top stories
 */
export function getNewTopStories() {
  return axios.get("/topstories.json", { signal }).then((response) => response.data)
}

/**
 * 
 * @param {hacker item id} itemId 
 * @returns {Promise<array>} an array for the hachker item details
 */

export function getItemById(itemId) {
  return axios.get(`/item/${itemId}.json`, { signal }).then((response) => response.data)
}


/**
 * 
 * @returns {Promise<array>} an array for all the new top stories details
 */

export async function getDetailedNewTopStories() {
  return getNewTopStories().then((storyIds) => {
    return Promise.all(storyIds.map(storyId => {
      return getItemById(storyId);
    }));

  })
}