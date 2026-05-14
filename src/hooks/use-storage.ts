/** 插件缓存-都用这个，本身并不存数据，只是chrome.storage.local的封装 */
export function useStorage() {
  const storage = chrome.storage.local;

  function getStorage(key: string) {
    return new Promise<string>((resolve) => {
      storage.get(key, (result) => resolve(result[key]));
    });
  }

  function setStorage(key: string, value: string) {
    return new Promise((resolve) => {
      storage.set({ [key]: value }, () => resolve(true));
    });
  }

  function removeStorage(key: string) {
    return new Promise((resolve) => {
      storage.remove(key, () => resolve(true));
    });
  }

  async function updateStorage(key: string, value: any) {
    return new Promise((resolve) => {
      storage.set({ [key]: value }, () => resolve(true));
    });
  }

  return {
    getStorage,
    setStorage,
    removeStorage,
    updateStorage,
  };
}
